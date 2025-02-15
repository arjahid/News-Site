import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Finds us on</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
            <FaFacebook> </FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start ">
            <BsYoutube></BsYoutube> Youtube
        </button>
        <button className="btn join-item justify-start">
            <BsInstagram></BsInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
