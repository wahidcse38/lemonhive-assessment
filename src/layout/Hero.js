import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { BsArrowUpRight } from "react-icons/bs";

import heroImg1 from "../assets/img/hero-img-1.png";
import heroImg2 from "../assets/img/hero-img-2.png";
import heroStar from "../assets/img/hero-star.png";

function Hero() {
  return (
    <div className="container">
      <Navbar />
      {/* <div>
        <div
          className="bg-image-line bg-no-repeat bg-transparent bg-right-top bg-contain"
          // style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className=" text-center">
            <div className="inline-block">
              <h1 className=" font-bold text-5xl text-downriver inline float-right relative">
                React
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[85%] right-[90%]"
                >
                  <path
                    d="M35.2266 20.9158C33.8292 15.8288 32.2924 10.811 30.6868 5.7894"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.873 27.7763C22.4883 22.877 18.3515 18.631 14.5168 14.1156"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5007 37.2487C15.0895 34.9979 10.3153 33.1704 5.41798 32.5409"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h1>
              <h1 className=" font-bold text-5xl text-downriver">Conference</h1>
            </div>
          </div>
          <div>
            <p className="font-normal text-base text-midnight my-8 md:my-0">
              Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
              fermentu me.In quis diam turpis quam id fermentum.
            </p>
            <button className="flex justify-center items-center gap-2 text-lg font-medium text-midnight px-6 py-3 bg-sunglow rounded-full mx-auto my-8 md:my-0">
              Buy Tickets <BsArrowUpRight />{" "}
            </button>
            <div className="relative my-8 md:my-0">
              <div className="w-full relative" style={{ aspectRatio: 1 }}>
                <Image
                  src={heroImg1}
                  alt="img"
                  fill
                  className="object-contain"
                />
              </div>
              <Image
                src={heroStar}
                alt="star"
                width={80}
                height={80}
                className="z-30 absolute -bottom-10 -right-4"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <div className="w-full relative" style={{ aspectRatio: 0.8 }}>
                <Image
                  src={heroImg2}
                  alt="img"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
