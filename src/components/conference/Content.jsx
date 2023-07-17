import Image from "next/image";
import React from "react";

import img1 from "../../assets/img/img1.png";

function Content() {
  return (
    <div className="p-3 lg:w-[80%]">
      <div className="flex justify-start items-start gap-4 p-2 bg-white rounded-lg">
        <Image
          src={img1}
          alt="img"
          width={100}
          height={100}
          className="object-contain flex-shrink-0"
        />
        <div>
          <h3 className="text-midnight font-bold text-base capitalize mb-2">
            John Blain Doe
          </h3>
          <p className="text-midnight font-normal text-xs">
            Lorem ipsum dolor sit amet, con sec tetur ad. n sec tetur ad n sec
            tetur ad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
