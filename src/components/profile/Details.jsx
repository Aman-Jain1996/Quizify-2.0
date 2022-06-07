import { useAuth } from "contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastHandler } from "utils";

export const Details = () => {
  const { setAuthUser, setAuthToken } = useAuth();
  const navigate = useNavigate();
  const [userDetails] = useState(JSON.parse(localStorage.getItem("authUser")));

  const logOutHandler = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
    setAuthToken();
    setAuthUser();
    navigate("/");
    ToastHandler("success", "Logged Out Successfully!");
  };
  return (
    <div className="h-max w-[90%] mx-auto flex items-center p-4 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg dark:bg-slate-400 md:w-[60%] lg:w-[50%]">
      <h2 className="relative text-4xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-black after:-left-[10%]">
        Profile Details
      </h2>
      <div className="w-full mt-16 my-4 p-4 grid place-items-center ">
        <div className="w-full flex pb-8 gap-8">
          <label
            htmlFor="email"
            className="text-3xl font-bold w-[40%] text-right"
          >
            Name :
          </label>
          <label
            className="block text-3xl bg-white w-full dark:bg-inherit dark:text-slate-50"
            placeholder="email@domain.com"
          >
            {userDetails.name}
          </label>
        </div>
        <div className="w-full flex pb-8 gap-8">
          <label
            htmlFor="email"
            className="text-3xl font-bold w-[40%] text-right"
          >
            Email :
          </label>
          <label
            className="block text-3xl bg-white w-full dark:bg-inherit dark:text-slate-50"
            placeholder="email@domain.com"
          >
            {userDetails.email}
          </label>
        </div>
      </div>
      <div className="flex w-full justify-end px-16">
        <button
          className="border-2 border-red-500 text-2xl bg-red-300 font-bold px-8 py-4 rounded-md hover:bg-red-500"
          onClick={logOutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
