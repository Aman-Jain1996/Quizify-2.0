import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useSignUpHandler } from "./hooks/useSignUpHandler";
import { BiError } from "react-icons/bi";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    formData,
    dispatchData,
    errorData,
    dispatchError,
    signUpFormHandler,
  } = useSignUpHandler();

  const signUpHandler = () => signUpFormHandler(formData);

  return (
    <>
      <div className="dark:bg-gray-700 py-[16px] min-h-[92vh] grid place-items-center">
        <section className=" py-12 h-max w-[95%] mx-auto flex items-center my-12 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg dark:bg-slate-400 md:w-[60%] lg:w-[50%]">
          <h2 className="relative text-5xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-black after:-left-[10%]">
            SignUp
          </h2>
          <div className="mt-16 w-[90%] my-4 p-4">
            <div className="flex mb-2 items-center m-auto">
              <label htmlFor="name" className="text-2xl font-semibold w-[25%]">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-[75%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
                placeholder="John Snow"
                value={formData.name}
                onChange={(e) =>
                  dispatchData({
                    type: "name",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  dispatchError({
                    type: "nameError",
                    payload: "",
                  })
                }
              />
            </div>
            <div className="block mb-6 flex justify-end text-red-500 font-bold flex gap-2 items-center text-2xl dark:text-red-600">
              {errorData.name && (
                <>
                  <BiError />
                  <div>{errorData.name}</div>
                </>
              )}
            </div>
            <div className="flex mb-2 items-center m-auto">
              <label htmlFor="email" className="text-2xl font-semibold w-[25%]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-[75%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
                placeholder="email@domain.com"
                value={formData.email}
                onChange={(e) =>
                  dispatchData({
                    type: "email",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  dispatchError({
                    type: "emailError",
                    payload: "",
                  })
                }
              />
            </div>
            <div className="block mb-6 flex justify-end text-red-500 font-bold flex gap-2 items-center text-2xl dark:text-red-600">
              {errorData.email && (
                <>
                  <BiError />
                  <div>{errorData.email}</div>
                </>
              )}
            </div>
            <div className="relative flex mb-2 items-center m-auto">
              <label
                htmlFor="password"
                className="text-2xl font-semibold w-[25%]"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="block w-[75%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
                placeholder="Your Password"
                value={formData.password}
                onChange={(e) =>
                  dispatchData({
                    type: "password",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  dispatchError({
                    type: "passwordError",
                    payload: "",
                  })
                }
              />
              <span
                className="absolute right-8 text-4xl cursor-pointer"
                onClick={() => setShowPassword((pass) => !pass)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="block mb-6 flex justify-end text-red-500 font-bold flex gap-2 items-center text-2xl dark:text-red-600">
              {errorData.password && (
                <>
                  <BiError />
                  <div>{errorData.password}</div>
                </>
              )}
            </div>
            <div className="relative flex mb-2 items-center m-auto">
              <label
                htmlFor="confirmPassword"
                className="text-2xl font-semibold w-[25%]"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="block w-[75%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
                placeholder="Your Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  dispatchData({
                    type: "confirmPassword",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  dispatchError({
                    type: "confirmPasswordError",
                    payload: "",
                  })
                }
              />
              <span
                className="absolute right-8 text-4xl cursor-pointer"
                onClick={() => setShowConfirmPassword((pass) => !pass)}
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="block mb-6 flex justify-end text-red-500 font-bold flex gap-2 items-center text-2xl dark:text-red-600">
              {errorData.confirmPassword && (
                <>
                  <BiError />
                  <div>{errorData.confirmPassword}</div>
                </>
              )}
            </div>
          </div>

          <button
            className="bg-violet-300 w-[80%] p-4 text-2xl font-bold rounded-md hover:bg-violet-400"
            onClick={signUpHandler}
          >
            Create Account
          </button>

          <div className="text-2xl mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-400 underline underline-offset-2 hover:text-violet-500 dark:text-violet-700"
            >
              Login Here
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
