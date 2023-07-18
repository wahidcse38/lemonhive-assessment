import React from "react";
import Link from "next/link";
//Icon
import { BiSolidZap } from "react-icons/bi";
//Date Formate
import moment from "moment";

function ConferenceTimelineLarge({ conference, isLast, index }) {
  const startDate = moment(new Date(conference?.startDate)).format(
    "D MMMM YYYY"
  );
  return (
    <div className="group flex justify-center md:w-full lg:w-3/4 mx-auto">
      {index % 2 === 1 ? (
        <div className="text-sm text-mistBlue font-normal w-[50%] pr-10 text-right relative top-[-12px]">
          {startDate}
        </div>
      ) : (
        <div className="pr-10 mb-8 w-[50%] relative top-[-16px]">
          <Link href={`/conference/${conference?.id}`}>
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
          </Link>
        </div>
      )}

      <div
        className={`${
          isLast ? "" : "border-l border-pastelGrey group-hover:border-sunglow"
        } relative block`}
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
      </div>
      {index % 2 === 1 ? (
        <div className="ps-10 mb-8 w-[50%] relative top-[-16px]">
          <Link href={`/conference/${conference?.id}`}>
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
          </Link>
        </div>
      ) : (
        <div className="text-sm text-mistBlue font-normal w-[50%] ps-10 text-left relative top-[-12px]">
          {startDate}
        </div>
      )}
    </div>
  );
}

export default ConferenceTimelineLarge;
