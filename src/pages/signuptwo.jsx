import React, { useState, useEffect } from "react";
import signinimage from "../images/4707071.jpg";
import logo from "../images/logo.png";
import "../css/external.css";
import key from "../images/mail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
const Signuptwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [conshowPassword, setConshowPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [massgecolor, setMassgecolor] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordCon = () => setConshowPassword((show) => !show);
  function confirmPassword(event) {
    let val = event.target.value;
    console.log(confirmPass);
    if (password === val) {
      // console.log(confirmPass);
      setConfirmPass("New Password and Confirm Password are matched");

      setMassgecolor("rit");

      // setConfirmPass("Password matched");
    } else if (password == "") {
      setConfirmPass("");
    } else {
      // console.log(confirmPass);
      setConfirmPass("New Password and Confirm Password are not matched");
      setMassgecolor("worng");
    }
  }

  return (
    <>
      <div className="min-h-screen  place-items-center  to-teal-500 flex flex-wrap justify-center">
        <div className="bg-white  rounded-l-md shadow-xl w-3/5">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8  ">
            <div className="">
              <div className="flex">
                <img className="h-10 w-auto" src={logo} alt="Sustainext" />
              </div>
              <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
            </div>

            <div className="mt-5  ">
              <form className="space-y-4" action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="mr-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="First Name"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="lastname"
                        type="text"
                        autoComplete="lastname"
                        required
                        placeholder="Last name"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="mr-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Company name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Company name"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Job title
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="lastname"
                        type="text"
                        autoComplete="lastname"
                        required
                        placeholder="Job title"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

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
                      placeholder="Email address"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="mr-2">
                    <div className="mr-2">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div
                        className="relative mt-2 rounded-md shadow-sm"
                        id="app-title"
                      >
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
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
                  <ReactTooltip
                    anchorId="app-title"
                    place="right"
                    content={
                      <PasswordChecklist
                        rules={[
                          "number",
                          "specialChar",
                          "capital",
                          "minLength",
                        ]}
                        minLength={8}
                        value={password}
                        iconSize={16}
                        invalidColor="red"
                        validColor="#4BCA81"
                        style={{ fontSize: "14px" }}
                        messages={{
                          number: "At least one number (0-9)",
                          specialChar:
                            "At least one special character (Eg. @#%$)",
                          capital:
                            "At least one uppercase & one lowercase letter",
                          minLength: "Minimum 8 characters",
                        }}
                      />
                    }
                  />
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Mobile Number"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="mr-2">
                    <div className="mr-2">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          id="password"
                          name="password"
                          type={conshowPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          placeholder=" Confirm Password"
                          onChange={confirmPassword}
                          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="absolute inset-y-0 right-0 mr-2 flex items-center">
                          <div onClick={handleClickShowPasswordCon}>
                            {conshowPassword ? (
                              <FontAwesomeIcon icon="eye-slash" />
                            ) : (
                              <FontAwesomeIcon icon="eye" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        {" "}
                        <h3 className={massgecolor}> {confirmPass} </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="mr-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="City"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Industry
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="lastname"
                        type="text"
                        autoComplete="lastname"
                        required
                        placeholder="Industry"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="mr-2">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create account
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-purple-100 px-3 py-1.5 text-sm font-semibold leading-6 text-violet-600 shadow-sm hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <img
                        src={key}
                        className="mr-2"
                        style={{ height: "24px" }}
                      />{" "}
                      Sign up with email
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-5 mb-4 text-center text-sm text-gray-500">
                Already have an account ?
                <Link
                  to="/"
                  className="font-semibold leading-6 text-[#a855f7] hover:text-[#a855f7]"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signuptwo;
