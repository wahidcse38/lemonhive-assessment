import React, { useEffect, useState } from "react";
import SidebarItem from "./common/SidebarItem";

function ConferenceDetailForSmallDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const makeObjToArr = (obj) => {
    return [
      {
        id: 1,
        name: "Organizer",
        data: obj?.organizers,
      },
      {
        id: 2,
        name: "Speakers",
        data: obj?.speakers,
      },
      {
        id: 3,
        name: "Schedule",
        data: obj?.schedules,
      },
      {
        id: 4,
        name: "Sponsors",
        data: obj?.sponsors,
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
