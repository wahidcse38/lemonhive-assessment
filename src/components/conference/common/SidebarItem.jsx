import React from "react";
import Content from "./Content";
import ScheduleContent from "./ScheduleContent";
import Tab from "./Tab";

function SidebarItem({ item, setSection, section }) {
  return (
    <div className="w-full space-y-6">
      <Tab item={item} setSection={setSection} section={section} />
      <div className="bg-light rounded-lg">
        {section !== "Schedule" &&
          item?.data?.map((eachData, i) => (
            <div
              key={i}
              className={`${item?.name === section ? "block" : "hidden"}`}
            >
              <Content eachData={eachData} />
            </div>
          ))}
        {section === "Schedule" &&
          item?.data?.map((eachData, i) => (
            <div
              key={i}
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
