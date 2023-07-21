import React, { useEffect, useState } from "react";
import SidebarItem from "./common/SidebarItem";

function ConferenceDetailForSmallDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const makeObjToArr = (obj) => {
    return [
      {
        id: 1,
        name: "Organizer",
        data: obj?.organizers.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 2,
        name: "Speakers",
        data: obj?.speakers.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 3,
        name: "Schedule",
        data: obj?.schedules.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 4,
        name: "Sponsors",
        data: obj?.sponsors.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
    ];
  };

  return (
    <div className="space-y-6">
      {makeObjToArr(conference)?.map((item) => (
        <SidebarItem
          key={item?.id}
          item={item}
          setSection={setSection}
          section={section}
        />
      ))}
    </div>
  );
}

export default ConferenceDetailForSmallDevices;
