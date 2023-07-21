import Image from "next/image";
import React from "react";

function Sponsors({ item }) {
  return (
    <div>
      <h6 className="text-xs md:text-base text-mistBlue font-medium text-center mb-8">
        {item.badge}
      </h6>
      <div className="flex flex-wrap justify-center items-center gap-14">
        {item.logos.map((logo) => (
          <div
            key={logo.id}
            // className="w-full relative"
            // style={{ aspectRatio: 4.2 }}
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={180}
              height={100}
              className="object-contain flex-grow-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
