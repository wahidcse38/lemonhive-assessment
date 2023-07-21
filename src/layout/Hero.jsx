import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import HeroForSmallDevices from "./HeroForSmallDevices";
import HeroForLargeDevices from "./HeroForLargeDevices";

function Hero() {
  const router = useRouter();
  console.log({ router });
  return (
    <div
      className={`${
        router.pathname === "/"
          ? "bg-gradient-to-b from-[#7C3EFF]/10 to-white"
          : "bg-white"
      }`}
    >
      <div className="container">
        <Navbar />
        {router.pathname === "/" && (
          <>
            <div className="block py-6 md:hidden">
              <HeroForSmallDevices />
            </div>
            <div className="hidden md:block pt-12 pb-24">
              <HeroForLargeDevices />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
