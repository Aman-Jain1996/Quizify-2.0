import React from "react";
import { GoHome } from "react-icons/go";
import { GrSync } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Result = () => {
  return (
    <>
      <main className="mt-12 p-12 flex flex-col min-h-[70vh]">
        <div className="flex justify-center text-5xl font-bold">
          <h2 className="pb-8 border-b-4 rounded-md border-violet-600 px-4 text-center">
            Your Score : 30/100
          </h2>
        </div>

        <div className="my-12 w-3/5 py-4 px-8 mx-auto">
          <p className="text-center text-3xl pl-8 m-8 font-semibold">
            Check your answers here
          </p>

          <div className="pl-8 m-8 mt-24">
            <p className="text-3xl font-bold mt-16">
              <span className="mr-2 text-violet-800">Q.1</span>
              Which team has won the UEFA Champions League title most number of
              times?
            </p>
          </div>

          <ul className="my-12 mx-auto">
            <li className="font-semibold mx-12 my-8 h-24 bg-red-200 rounded-lg border-l-8 px-4 py-4 border-red-700">
              <label className="h-full flex items-center" htmlFor="option-1">
                <p className="text-3xl ml-8">AC Milan</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-2">
                <p className="text-3xl ml-8">FC Barcelona</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-green-200 rounded-lg border-l-8 px-4 py-4 border-green-700">
              <label className="h-full flex items-center" htmlFor="option-3">
                <p className="text-3xl ml-8">Real Madrid</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-4">
                <p className="text-3xl ml-8">Liverpool FC</p>
              </label>
            </li>
          </ul>

          <div className="pl-8 m-8 mt-36">
            <p className="text-3xl font-bold mt-16">
              <span className="mr-2 text-violet-800">Q.2</span>
              Which team has won the UEFA Champions League title most number of
              times?
            </p>
          </div>

          <ul className="my-12 mx-auto">
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-1">
                <p className="text-3xl ml-8">AC Milan</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-2">
                <p className="text-3xl ml-8">FC Barcelona</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-green-200 rounded-lg border-l-8 px-4 py-4 border-green-700">
              <label className="h-full flex items-center" htmlFor="option-3">
                <p className="text-3xl ml-8">Real Madrid</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-4">
                <p className="text-3xl ml-8">Liverpool FC</p>
              </label>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between my-12 w-3/5 py-4 px-8 mx-auto text-3xl font-semibold">
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-8"
                to="/categories"
              >
                <span className="text-4xl">
                  <GrSync />
                </span>
                Retake
              </Link>
            </div>
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                to="/"
              >
                <span className="text-4xl">
                  <GoHome />
                </span>
                Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
