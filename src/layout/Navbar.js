import React from "react";
import Image from "next/image";

import logo from "../assets/logo/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import NavItem from "./NavItem";
import Menu from "./Menu";

//hook
import useToggle from "@/hooks/useToggle";
import Link from "next/link";

function Navbar() {
  const [isToggle, toggle] = useToggle();
  return (
    <div className="px-5">
      <div className="flex justify-between items-center py-10 relative">
        <Link
          href={"/"}
          className="w-[100px] relative"
          style={{ aspectRatio: 3.6 }}
        >
          <Image src={logo} alt="logo" fill className="object-contain" />
        </Link>
        <div className="hidden md:block">
          <NavItem />
        </div>
        {/* <div className="block md:hidden"> 
          <Menu />
        </div> */}
        <div>
          <AiOutlineMenu size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
