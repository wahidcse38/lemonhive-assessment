import React, { useEffect, useState } from "react";
//Component
import Tab from "./common/Tab";
import Content from "./common/Content";
import ScheduleContent from "./common/ScheduleContent";

//Helper function
import { handleContentSet } from "@/hooks/helperFunction/handleContentSet";

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

function ConferenceDetailForSmallDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const [state, setState] = useState([]);

  useEffect(() => {
    handleContentSet(section, setState, state, conference);
  }, [conference, section]);

  return (
    <div className="space-y-6">
      {tabText.map((item) => (
        <div key={item?.id} className="w-full space-y-6">
          <Tab item={item} setSection={setSection} section={section} />
          <div className="bg-light rounded-lg">
            {section === "Schedule"
              ? state?.map((eachData) => (
                  <div
                    key={eachData.id}
                    className={`${item?.name === section ? "block" : "hidden"}`}
                  >
                    <ScheduleContent eachData={eachData} />
                  </div>
                ))
              : state.map((eachData) => (
                  <div
                    key={eachData.id}
                    className={`${item?.name === section ? "block" : "hidden"}`}
                  >
                    <Content key={eachData.id} eachData={eachData} />
                  </div>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConferenceDetailForSmallDevices;
