import React from "react";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineExport } from "react-icons/ai";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Question = () => {
  return (
    <>
      <main className="mt-12 p-12 flex flex-col min-h-[70vh]">
        <div className="flex justify-center text-5xl font-bold">
          <h2 className="pb-8 border-b-4 rounded-md border-violet-600 w-2/5 text-center">
            UEFA Champions League Quiz
          </h2>
        </div>

        <div className="my-12 w-3/5 py-4 px-8 mx-auto shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-xl">
          <div className="flex justify-between">
            <p className=" flex items-center text-2xl pl-8 m-8 font-semibold">
              Question :
              <span className="font-bold ml-2 text-3xl text-violet-800">
                1/10
              </span>
            </p>
            <p className="flex items-center text-2xl pl-8 m-8 font-semibold">
              <span className="text-4xl">
                <RiTimerLine />
              </span>
              <span className="font-bold ml-2 text-3xl text-violet-800">
                60s
              </span>
            </p>
          </div>
          <div className="pl-8 m-8">
            <p className="text-3xl font-bold mt-16">
              <span className="mr-2 text-violet-800">Q.1</span>
              Which team has won the UEFA Champions League title most number of
              times?
            </p>
          </div>

          <ul className="my-12 mx-auto">
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-1">
                <input
                  className="w-10 h-10 mr-8 checked:bg-violet-400"
                  type="radio"
                  name="options"
                  id="option-1"
                />
                <p className="text-3xl">AC Milan</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-2">
                <input
                  className="w-10 h-10 mr-8 checked:bg-violet-400"
                  type="radio"
                  name="options"
                  id="option-2"
                />
                <p className="text-3xl">FC Barcelona</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-3">
                <input
                  className="w-10 h-10 mr-8 checked:bg-violet-400"
                  type="radio"
                  name="options"
                  id="option-3"
                />
                <p className="text-3xl">Real Madrid</p>
              </label>
            </li>
            <li className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700">
              <label className="h-full flex items-center" htmlFor="option-4">
                <input
                  className="w-10 h-10 mr-8 checked:bg-violet-400"
                  type="radio"
                  name="options"
                  id="option-4"
                />
                <p className="text-3xl">Liverpool FC</p>
              </label>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between my-12 w-3/5 py-4 px-8 mx-auto text-3xl font-semibold">
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                to="/"
              >
                Quit
                <span className="text-4xl">
                  <AiOutlineExport />
                </span>
              </Link>
            </div>
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                to="/result"
              >
                Next
                <span className="text-4xl">
                  <GrFormNext />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
