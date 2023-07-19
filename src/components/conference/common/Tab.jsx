import React from "react";
import { LuArrowUpDown } from "react-icons/lu";

function Tab({ item, setSection, section }) {
  return (
    <div
      onClick={() => setSection(item?.name)}
      className={`border border-[#D9D9D9] rounded-lg ${
        item?.name === section ? "bg-sunglow" : "bg-white"
      }  p-2 gap-10 flex justify-start items-center `}
    >
      <div
        className={`w-12 h-12 rounded-lg bg-white flex justify-center items-center`}
      >
        <LuArrowUpDown size={22} className="text-sunglow" />
      </div>
      <p className="text-xl text-midnight font-bold">{item?.name}</p>
    </div>
  );
}

export default Tab;
