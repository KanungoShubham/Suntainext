import React, { useState, useEffect } from "react";
import key from "../images/key3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import PasswordChecklist from "react-password-checklist";
import "../css/external.css";
import { Link } from "react-router-dom";
const Passwordreset = () => {
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
      <div className="min-h-screen grid place-items-center bg-fuchsia-50">
        <div className="bg-white  w-80 rounded-md">
          <div className="w-12 h-12 bg-purple-50 rounded-full mx-auto mt-8">
            <img src={key} className=" mx-auto py-2" />
          </div>
          <div className="mt-2">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Set new password
            </h2>
            <p className="text-center">
              Your new password must be different to previously used password
            </p>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm  justify-center px-3 py-2 lg:px-3 ">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div>
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
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <div className="absolute inset-y-0 right-0 mr-2 flex items-center">
                      <div onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <FontAwesomeIcon icon="eye-slash" />
                        ) : (
                          <FontAwesomeIcon icon="eye" />
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
                <ReactTooltip
                  anchorId="app-title"
                  place="right"
                  content={
                    <PasswordChecklist
                      rules={["number", "specialChar", "capital", "minLength"]}
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
              </div>
              <div>
                <div>
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
                      className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={confirmPassword}
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
                </div>
              </div>
              <div>
                {" "}
                <h3 className={massgecolor}> {confirmPass} </h3>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md  bg-gradient-to-r from-[#364161] to-[#06081f] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover: bg-gradient-to-r from-[#364161] to-[#06081f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset password
                </button>
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
export default Passwordreset;
