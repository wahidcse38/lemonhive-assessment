import Image from "next/image";
import React from "react";

import heroImg1 from "../assets/img/hero-img-1.png";
import heroImg2 from "../assets/img/hero-img-2.png";
import heroStar from "../assets/img/hero-star.png";

import { heroImg } from "@/utils";
import { BsArrowUpRight } from "react-icons/bs";

function HeroForLargeDevices() {
  return (
    <div className="px-5  bg-image-line bg-no-repeat bg-transparent bg-right-bottom bg-contain">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 text-right">
          <p className="font-bold text-8xl md:text-6xl text-downriver  relative text-right inline-flex">
            React
            <span className="absolute bottom-[85%] right-[95%]">{heroImg}</span>
          </p>
        </div>
      </div>
      <div class="grid grid-rows-7 grid-cols-5 grid-flow-col gap-5">
        <div class="row-span-2 col-span-3 ">
          <p className="font-bold text-8xl md:text-6xl text-downriver text-right">
            Conference
          </p>
        </div>
        <div class="row-span-4 col-span-3 ">
          <div className="grid grid-cols-3 grid-rows-4 h-full gap-5">
            <div
              className="w-full relative col-span-1  row-span-4"
              style={{ aspectRatio: 0.8 }}
            >
              <Image src={heroImg2} alt="img" fill className="object-contain" />
            </div>
            <div className="col-span-2 row-span-4 space-y-10">
              <p className="font-normal text-base text-midnight">
                Lorem uis diam turpis quam id fermetum.In quis diam turpis quam
                id fermentu me.In quis diam turpis quam id fermentum.
              </p>
              <button className="text-lg font-medium text-midnight px-6 py-3 bg-sunglow rounded-full flex justify-center items-center gap-2">
                Buy Tickets <BsArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div class="row-span-6 col-span-2 ">
          <div className="relative my-8 md:my-0">
            <div className="w-full relative" style={{ aspectRatio: 1 }}>
              <Image src={heroImg1} alt="img" fill className="object-contain" />
            </div>
            <Image
              src={heroStar}
              alt="star"
              width={80}
              height={80}
              className="z-30 absolute -bottom-10 -left-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroForLargeDevices;
