import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ScheduleContent({ eachData }) {
  const day = new Date(eachData?.day).toLocaleString("en-us", {
    weekday: "long",
  });
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: eachData?.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="p-3">
        <div className="w-full p-5  bg-white">
          <div className="flex justify-between items-center mb-5">
            <span className="font-bold text-base text-midnight">
              {eachData?.day}
            </span>
            <span className="font-normal text-xs text-midnight">{day}</span>
          </div>
          <div className="space-y-4">
            {eachData?.intervals?.map((interval, i) => (
              <div key={i} className="text-sm font-normal text-midnight">
                <p>
                  Duration : {interval?.begin} - {interval?.end}
                </p>
                {interval?.title && (
                  <li className="list-disc ps-3">{interval?.title}</li>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleContent;
