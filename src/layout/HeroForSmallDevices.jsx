import Image from "next/image";
import React from "react";

import heroImg1 from "../assets/img/hero-img-1.png";
import heroImg2 from "../assets/img/hero-img-2.png";
import heroStar from "../assets/img/hero-star.png";

import { heroImg } from "@/utils";
import { BsArrowUpRight } from "react-icons/bs";

function HeroForSmallDevices() {
  return (
    <div
      className="bg-image-line bg-no-repeat bg-transparent bg-right-top bg-contain px-5"
      // style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <div className=" text-center">
        <div className="inline-block">
          <h1 className=" font-bold text-5xl text-downriver inline float-right relative">
            React
            <span className="absolute bottom-[85%] right-[90%]">{heroImg}</span>
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
            <Image src={heroImg1} alt="img" fill className="object-contain" />
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
            <Image src={heroImg2} alt="img" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroForSmallDevices;
