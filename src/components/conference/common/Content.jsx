import Image from "next/image";
import React from "react";

import dummyImage from "../../../assets/logo/logo.png";

//Swapable
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Content({ eachData }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: eachData?.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="p-3">
        <div className="flex justify-start items-start gap-4 p-2 bg-white rounded-lg">
          <Image
            src={eachData?.image?.url}
            alt={eachData?.name || "image"}
            width={100}
            height={100}
            className="object-contain flex-shrink-0 rounded-lg"
          />
          <div>
            <h3 className="text-midnight font-bold text-base capitalize mb-2">
              {eachData?.name}
            </h3>
            <p className="text-midnight font-normal text-xs">
              {eachData?.aboutShort}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
