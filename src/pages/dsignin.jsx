import React, { useState, useEffect } from "react";
import signinimage from "../images/esg.gif";
import logo from "../images/logo.png";
import "../css/external.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className="min-h-screen  place-items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-wrap justify-center">
        <div className="bg-white z-50  rounded-l-md shadow-xl grid grid-cols-1 md:grid-cols-2">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-4 ">
            <div className="sm:mx-4 sm:w-full sm:max-w-sm mt-4">
              <div className="flex">
                <img className="h-10 w-auto" src={logo} alt="Sustainext" />
              </div>
              <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome back
              </h2>
              <p>Welcome back! please enter your details</p>
              {/* <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-2" role="alert">
  <p class="font-bold">invalid email address or password</p>
 
</div> */}
            </div>

            <div className="mt-5 sm:mx-4 sm:w-full sm:max-w-sm ">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <div className="absolute inset-y-0 right-0 mr-2 flex items-center">
                        <div onClick={handleClickShowPassword}>
                          {showPassword ? (
                            <FontAwesomeIcon icon="eye-slash" />
                          ) : (
                            <FontAwesomeIcon icon="eye" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6">
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight " type="checkbox" />
                    <span className="text-sm">Remember</span>
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/forgotten-password"
                      className="font-semibold text-[#a855f7] hover:text-[#a855f7]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md  bg-gradient-to-r from-[#364161] to-[#06081f] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover: bg-gradient-to-r from-[#364161] to-[#06081f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="py-7 text-center text-sm text-gray-500">
                Don't have an account ?{" "}
                <Link
                      to="/Signup"
                      className="font-semibold leading-6 text-[#a855f7] hover:text-[#a855f7]"

                    >
                     Sign up
                    </Link>
           
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div>
              <img
                src={signinimage}
                alt="..."
                className="hidden  md:block rounded max-w-full align-middle border-none mt-3 section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
