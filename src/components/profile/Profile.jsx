import { useAuth } from "contexts";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastHandler } from "utils";

export const Profile = () => {
  const { setAuthUser, setAuthToken } = useAuth();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const logOutHandler = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
    setAuthToken();
    setAuthUser();
    navigate("/");
    ToastHandler("success", "Logged Out Successfully!");
  };
  return (
    <>
      <div className="min-h-[80vh] grid place-items-center">
        <section className=" py-12 h-max w-[40%] mx-auto flex items-center my-12 flex-col shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg">
          <h2 className="relative text-6xl font-bold after:absolute after:content-[''] after:w-[120%] after:h-[2px] after:-bottom-2 after:bg-black after:-left-[10%]">
            Profile Details
          </h2>
          <div className="mt-16 my-4 p-4">
            <div className="flex pb-8 gap-8 items-center m-auto">
              <label
                htmlFor="email"
                className="text-3xl font-semibold w-[30%] text-right"
              >
                Name :
              </label>
              <label
                className="block w-[40%] text-3xl bg-white w-full"
                placeholder="email@domain.com"
              >
                {userDetails.name}
              </label>
            </div>
            <div className="flex pb-8 gap-8 items-center m-auto">
              <label
                htmlFor="email"
                className="text-3xl font-semibold w-[30%] text-right"
              >
                Email :
              </label>
              <label
                className="block w-[40%] text-3xl bg-white w-full"
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
        </section>
      </div>
    </>
  );
};
