import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { ToastHandler } from "utils";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const resetHandler = async () => {
    if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email))
      setEmailError("Enter a valid email");
    else {
      if (email.toLowerCase() === "amanjain@gmail.com")
        ToastHandler("error", "You can't chnage admin password");
      else {
        try {
          await sendPasswordResetEmail(auth, email);
          ToastHandler("success", "Password reset Link sent to email");
          navigate("/", { replace: true });
        } catch (err) {
          console.error(err.message);
          ToastHandler("error", "Email ID not Registered!!");
        }
      }
    }
  };

  return (
    <div className="dark:bg-gray-700 pt-[16px] min-h-[89.5vh] grid place-items-center">
      <section className=" py-12 h-max w-[40%] mx-auto flex items-center my-12 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg dark:bg-slate-400">
        <h2 className="relative text-4xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-black after:-left-[10%]">
          Reset Password
        </h2>
        <div className="mt-16 mb-8 w-[80%] p-4">
          <div className="relative flex items-center m-auto">
            <label htmlFor="email" className="text-2xl font-semibold w-[20%]">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailError("")}
              className="block w-[80%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
              placeholder="user@gmail.com"
            />
          </div>
          <div className="block mt-6 flex justify-end text-red-500 font-bold flex gap-2 items-center text-2xl dark:text-red-600">
            {emailError && (
              <>
                <BiError />
                <div>{emailError}</div>
              </>
            )}
          </div>
        </div>
        <button
          className="bg-violet-300 w-[80%] p-4 text-3xl font-bold rounded-md hover:bg-violet-400"
          onClick={resetHandler}
        >
          Reset Password
        </button>
        <div className="text-2xl mt-8">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="text-violet-400 underline underline-offset-2 hover:text-violet-500 dark:text-violet-700"
          >
            Login Here
          </Link>
        </div>
      </section>
    </div>
  );
};
