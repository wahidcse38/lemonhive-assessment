import React from "react";
import Image from "next/image";

import logo from "../assets/logo/logo_white.png";

import { twiter, linkedin, fb, web } from "../utils";

function Footer() {
  return (
    <div className="bg-downriver grid justify-center">
      <div className="container py-16">
        <div
          className="w-[150px] relative mx-auto mb-20"
          style={{ aspectRatio: 3.6 }}
        >
          <Image src={logo} alt="logo" fill className="object-contain" />
        </div>
        <div className="flex justify-center items-center gap-8 mb-6">
          <a href="#">{twiter}</a>
          <a href="#">{linkedin}</a>
          <a href="#">{fb}</a>
          <a href="#">{web}</a>
        </div>
        <div className="font normal text-base text-white text-center">
          &copy; 2023 Lemonhive. All rights reserved.
        </div>
      </div>
    </div>
  );
}
export default Footer;
