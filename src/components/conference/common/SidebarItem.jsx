import React from "react";
import Content from "./Content";
import ScheduleContent from "./ScheduleContent";
import Tab from "./Tab";

function SidebarItem({ item, setSection, section, state }) {
  return (
    <div className="w-full space-y-6">
      <Tab item={item} setSection={setSection} section={section} />
      <div className="bg-light rounded-lg">
        {section !== "Schedule" &&
          state.map((eachData) => (
            <div
              key={eachData.id}
              className={`${item?.name === section ? "block" : "hidden"}`}
            >
              <Content eachData={eachData} />
            </div>
          ))}
        {section === "Schedule" &&
          state?.map((eachData) => (
            <div
              key={eachData.id}
              className={`${item?.name === section ? "block" : "hidden"}`}
            >
              <ScheduleContent eachData={eachData} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SidebarItem;
