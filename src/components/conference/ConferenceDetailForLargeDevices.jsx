import React, { useEffect, useState } from "react";
import Tab from "./common/Tab";
import Content from "./common/Content";
import ScheduleContent from "./common/ScheduleContent";

//Dragable
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

function ConferenceDetailForLargeDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const [state, setState] = useState([]);

  const handleDragEnd = (event) => {
    console.log("hello");
    const { active, over } = event;
    console.log({ active });
    console.log({ over });
    if (active.id !== over.id) {
      console.log("in");
      setState((arr) => {
        const activeIndex = arr.findIndex((i) => i.id === active.id);
        const overIndex = arr.findIndex((i) => i.id === over.id);
        console.log({ activeIndex, overIndex });
        console.log(arrayMove(arr, activeIndex, overIndex));
        return arrayMove(arr, activeIndex, overIndex);
      });
    }
  };

  useEffect(() => {
    let arr = [];
    switch (section) {
      case "Organizer":
        setState([]);
        conference?.organizers?.forEach((item, i) => {
          let obj = {
            ...item,
            id: i + 1,
          };
          arr.push({ ...obj });
        });
        return setState((prevArr) => {
          return [...prevArr, ...arr];
        });
      case "Speakers":
        setState([]);
        conference?.speakers?.forEach((item, i) => {
          let obj = {
            ...item,
            id: i + 1,
          };
          arr.push({ ...obj });
        });
        return setState((prevArr) => {
          return [...prevArr, ...arr];
        });
      case "Schedule":
        setState([]);
        conference?.schedules?.forEach((item, i) => {
          let obj = {
            ...item,
            id: i + 1,
          };
          arr.push({ ...obj });
        });
        return setState((prevArr) => {
          return [...prevArr, ...arr];
        });
      case "Sponsors":
        setState([]);
        conference?.sponsors?.forEach((item, i) => {
          let obj = {
            ...item,
            id: i + 1,
          };
          arr.push({ ...obj });
        });
        return setState((prevArr) => {
          return [...prevArr, ...arr];
        });

      default:
        return state;
    }
  }, [conference, section]);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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
          <SortableContext items={state} strategy={verticalListSortingStrategy}>
            {state?.map((eachData) =>
              section === "Schedule" ? (
                <ScheduleContent key={eachData.id} eachData={eachData} />
              ) : (
                <Content key={eachData.id} eachData={eachData} />
              )
            )}
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
}

export default ConferenceDetailForLargeDevices;
