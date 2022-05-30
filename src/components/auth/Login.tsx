import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <section className=" py-12 min-h-[70vh] w-[40%] mx-auto flex items-center my-12 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg">
        <h2 className="relative text-6xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-black after:-left-[10%]">
          Login
        </h2>
        <div className="mt-16 w-[80%] my-4 p-4">
          <div className="flex pb-8 items-center m-auto">
            <label htmlFor="email" className="text-3xl font-semibold w-[30%]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-[70%] text-3xl bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-violet-300 focus:ring-violet-500 focus:ring-1 "
              placeholder="email@domain.com"
            />
          </div>
          <div className="relative flex pb-8 items-center m-auto">
            <label
              htmlFor="password"
              className="text-3xl font-semibold w-[30%]"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
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
        </div>
        <div className="text-2xl w-max-content ml-auto mr-32 mb-8">
          <Link
            to="#"
            className="text-violet-400 underline underline-offset-4 hover:text-violet-500"
          >
            Forgot Password?
          </Link>
        </div>
        <button className="bg-violet-300 w-[80%] p-4 text-3xl font-bold rounded-md hover:bg-violet-400">
          Login
        </button>
        <button className="mt-8 hover:bg-violet-300 border border-violet-300 w-[80%] p-4 text-3xl font-bold rounded-md">
          Login as Guest
        </button>

        <div className="text-2xl mt-8">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-violet-400 underline underline-offset-2 hover:text-violet-500"
          >
            SignUp Here
          </Link>
        </div>
      </section>
    </>
  );
};
