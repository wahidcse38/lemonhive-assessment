import React from "react";
import Image from "next/image";

import { sponsors } from "@/utils";
import Sponsors from "./Sponsors";

function SponsorsSection() {
  return (
    <div className="bg-light">
      <div className="py-20 px-5">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-midnight mb-16 text-center">
          Our Sponsor
        </h3>
        <div className="space-y-8">
          {sponsors.map((item) => (
            <Sponsors key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
