import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { useLoginHandler } from "./hooks/useLoginHandler";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, dispatchData, errorData, dispatchError, loginFormHandler } =
    useLoginHandler();

  const loginHandler = () => loginFormHandler(formData, false);

  const guestLoginHandler = (data) => loginFormHandler(data, true);

  return (
    <>
      <div className="dark:bg-gray-700 pt-[16px]">
        <section className="py-12 min-h-[70vh] w-[40%] mx-auto flex items-center mt-12 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg dark:bg-slate-400">
          <h2 className="relative text-5xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-violet-300 after:-left-[10%] dark:text-slate-100">
            Login
          </h2>
          <div className="mt-16 w-[80%] p-4">
            <div className="flex pb-8 items-center m-auto">
              <label htmlFor="email" className="text-2xl font-semibold w-[30%]">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                className="block w-[70%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1"
                placeholder="email@domain.com"
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
            <div className="relative flex items-center m-auto mb-4">
              <label
                htmlFor="password"
                className="text-2xl font-semibold w-[30%]"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
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
                className="block w-[70%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
                placeholder="Your Password"
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
          </div>
          <div className="flex w-full px-24 items-center mb-8">
            <div className="text-2xl ml-auto justify-self-end  w-full">
              <div className="inline-block w-full text-violet-400 text-right underline underline-offset-4 hover:text-violet-500 dark:text-violet-700">
                <Link to="/resetPassword">Forgot Password?</Link>
              </div>
            </div>
          </div>
          <button
            className="bg-violet-300 w-[80%] p-4 text-2xl font-bold rounded-md hover:bg-violet-400"
            onClick={loginHandler}
          >
            Login
          </button>
          <button
            className="mt-8 hover:bg-violet-300 border border-violet-300 w-[80%] p-4 text-2xl font-bold rounded-md"
            onClick={() => {
              guestLoginHandler({
                email: "amanjain@gmail.com",
                password: "amanjain1234",
              });
            }}
          >
            Login as Guest
          </button>
          <div className="text-2xl mt-8">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-violet-400 underline underline-offset-2 hover:text-violet-500 dark:text-violet-700"
            >
              SignUp Here
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
