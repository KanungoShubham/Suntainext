import React, { useState, useEffect } from "react";
import key from "../images/mail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../css/external.css";
const Emaibox = () => {
  return (
    <>
      <div className="min-h-screen grid place-items-center bg-fuchsia-50">
        <div className="bg-white  w-80 rounded-md">
          <div className="w-12 h-12 bg-purple-50 rounded-full mx-auto mt-8">
            <img src={key} className=" mx-auto py-2" />
          </div>
          <div className="mt-2">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Check your mail
            </h2>
            <div className="px-3">
              {" "}
              <p className="text-center px-8 mt-2" style={{ fontSize: "13px" }}>
                We sent a password reset link to Register Email
              </p>
            </div>
          </div>
          <div className="my-5">
            <p className="text-center px-8 mt-2" style={{ fontSize: "13px" }}>
              Didn't receive the email?
              <Link
                to="/password-reset"
                className="font-semibold text-[#a855f7] hover:text-[#a855f7] ml-1"
              >
                Click to resend
              </Link>
            </p>
          </div>
          <div>
            <Link to="/">
              <p className="text-center mb-5" style={{ fontSize: "13px" }}>
                <FontAwesomeIcon icon="arrow-left" /> Back to log in
              </p>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Emaibox;
