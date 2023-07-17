import React from "react";
import { LuArrowUpDown } from "react-icons/lu";
import Content from "./Content";

function SidebarItem() {
  return (
    <div className="md:flex justify-start items-start gap-5">
      <div className="border border-[#D9D9D9] rounded-lg bg-sunglow p-2 gap-10 flex justify-start items-center mb-6 md:w-[30%]">
        <div className="w-12 h-12 b rounded-lg bg-white flex justify-center items-center">
          <LuArrowUpDown size={22} className="text-sunglow" />
        </div>
        <p className="text-xl text-midnight font-bold">Organizer</p>
      </div>
      <div className="bg-[#000] rounded-lg">
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

export default SidebarItem;
