import React from "react";
import { LuArrowUpDown } from "react-icons/lu";

function Tab({ item, setSection, section }) {
  return (
    <div
      onClick={() => setSection(item?.name)}
      className={`border ${
        item?.name === section ? "border-sunglow" : "border-borderGrey"
      }  rounded-lg ${
        item?.name === section ? "bg-sunglow" : "bg-white"
      }  p-2 gap-10 flex justify-start items-center cursor-pointer`}
    >
      <div
        className={`w-12 h-12 rounded-lg bg-white flex justify-center items-center`}
      >
        <LuArrowUpDown size={22} className="text-sunglow" />
      </div>
      <p
        className={`text-xl font-bold ${
          item?.name === section ? " text-white" : "text-midnight"
        }`}
      >
        {item?.name}
      </p>
    </div>
  );
}

export default Tab;
