import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsBox from "../components/NewsBox";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      {/* ------------------------------------------------ */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Sec-62 Noida near metro station <br />
            Electronic City Center, Noida
          </p>
          <p className="text-gray-500">
            Phone: +917042214463 <br />
            Email: manishverma9310@gmail.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at M@V Collections
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job <br />
            openings.
          </p>
        <Link to={'https://www.linkedin.com/in/manish-verma-b98805265/'}>  <p className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-2xl">
            Explore Jobs
          </p>
          </Link>
        </div>
      </div>

      <NewsBox />
    </div>
  );
};

export default Contact;
