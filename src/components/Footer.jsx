import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import manish_logo from "../assets/manish_logo.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to={"/"}>
            <img
              src={manish_logo}
              className="w-14 mb-5 ml-2 hover:scale-110 transition-all"
              alt=""
            />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            "Fashion that Defines You"- Implying that the brand's clothing has{" "}
            <br /> the power to define and reflect the wearer's personality and
            style. <br /> "Be Bold, Be Fashionable ...
          </p>
        </div>
        {/* -------------------------------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About us</li>
            </Link>
            <Link to={"place-order"}>
              <li>Delivery</li>
            </Link>
            <Link to={"/contact"}>
              <li>PrivacyPolicy</li>
            </Link>
          </ul>
        </div>
        {/* -------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-7042214463</li>
            <li>manishverma14042002@gmail.com</li>
           <Link to={'https://www.linkedin.com/in/manish-verma-b98805265/'}> <li className="border text-blue-600 w-1/4 text-center py-1 px-3 hover:bg-blue-600 hover:text-white">LinkedIn</li></Link>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright @ 2024 ShopWithManish - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
