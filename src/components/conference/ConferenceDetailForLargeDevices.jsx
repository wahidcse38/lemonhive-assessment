import React, { useState } from "react";
import Tab from "./common/Tab";
import Content from "./common/Content";
import ScheduleContent from "./common/ScheduleContent";

function ConferenceDetailForLargeDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const tabText = [
    {
      id: 1,
      name: "Organizer",
    },
    {
      id: 2,
      name: "Speakers",
    },
    {
      id: 3,
      name: "Schedule",
    },
    {
      id: 4,
      name: "Sponsors",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="space-y-6 col-span-1">
        {tabText?.map((item) => (
          <Tab
            key={item?.id}
            item={item}
            setSection={setSection}
            section={section}
          />
        ))}
      </div>
      <div className="col-span-2 bg-light rounded-lg p-6">
        {section === "Organizer" &&
          conference?.organizers?.map((eachData, i) => (
            <div key={i} className="">
              <Content eachData={eachData} />
            </div>
          ))}
        {section === "Speakers" &&
          conference?.speakers?.map((eachData, i) => (
            <div key={i} className="">
              <Content eachData={eachData} />
            </div>
          ))}
        {section === "Schedule" &&
          conference?.schedules?.map((eachData, i) => (
            <div key={i} className="">
              <ScheduleContent eachData={eachData} />
            </div>
          ))}
        {section === "Sponsors" &&
          conference?.sponsors?.map((eachData, i) => (
            <div key={i} className="">
              <Content eachData={eachData} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ConferenceDetailForLargeDevices;
