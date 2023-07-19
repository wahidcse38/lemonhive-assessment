import React from "react";
//Icon
import { BiSolidZap } from "react-icons/bi";
//Date Formate
import moment from "moment";

function ConferenceTimelineSmall({ conference, isLast }) {
  const startDate = moment(new Date(conference?.startDate)).format(
    "D MMMM YYYY"
  );

  return (
    <div className="group">
      <div
        className={`${
          isLast
            ? ""
            : "border-l border-pastelGrey group-hover:border-sunglow pb-8"
        } relative`}
      >
        <div
          className={`w-12 h-12 bg-white  rounded-full flex justify-center items-center absolute top-[-24px] left-[-24px]`}
        >
          <div
            className={`w-10 h-10 border border-pastelGrey group-hover:border-sunglow bg-white  rounded-full flex justify-center items-center
           
           `}
          >
            <BiSolidZap
              size={20}
              className={`text-pastelGrey group-hover:text-sunglow`}
            />
          </div>
        </div>
        <div className="ps-8 relative top-[-50px]">
          <div className="text-sm text-mistBlue font-normal mb-3">
            {startDate}
          </div>
          <div className="flex justify-start items-baseline gap-3 p-3 rounded-lg bg-light border-t-4 border-pastelGrey cursor-pointer hover:shadow-lg shadow-[#E7E7E7]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pt-1 flex-shrink-0"
            >
              <circle cx="8" cy="8" r="8" fill="#FFC93E" />
              <circle cx="8" cy="8" r="3" fill="white" />
            </svg>
            <div>
              <h6 className="text-lg font-medium text-downriver capitalize">
                {conference?.name}
              </h6>
              <p className="text-sm text-mistBlue font-normal">
                {conference?.slogan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferenceTimelineSmall;
