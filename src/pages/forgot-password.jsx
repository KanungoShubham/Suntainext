import React, { useState, useEffect } from "react";
import key from "../images/key3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../css/external.css";
const Forgotpassword = () => {
  return (
    <>
      <div className="min-h-screen grid place-items-center bg-fuchsia-50">
        <div className="bg-white  w-80 rounded-md">
          <div className="w-12 h-12 bg-purple-50 rounded-full mx-auto mt-8">
            <img src={key} className=" mx-auto py-2" />
          </div>
          <div className="mt-2">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgotten password
            </h2>
            <p className="text-center px-1 mt-2" style={{ fontSize: "13px" }}>
              No worries, we'll send you reset instructions
            </p>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm  justify-center px-2 py-2 lg:px-5 ">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div
                    className="relative mt-2 rounded-md shadow-sm"
                    id="app-title"
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link to="/email">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md  bg-gradient-to-r from-[#364161] to-[#06081f] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover: bg-gradient-to-r from-[#364161] to-[#06081f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset password
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <p className="text-center mb-5" style={{ fontSize: "13px" }}>
                    <FontAwesomeIcon icon="arrow-left" /> Back to log in
                  </p>
                </Link>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgotpassword;
