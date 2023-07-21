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

import { handleContentDrag } from "@/hooks/helperFunction/handleDragItem";
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

function ConferenceDetailForLargeDevices({ conference }) {
  const [section, setSection] = useState("Organizer");
  const [state, setState] = useState([]);

  useEffect(() => {
    handleContentSet(section, setState, state, conference);
  }, [conference, section]);

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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleContentDrag(e, setState)}
        >
          <SortableContext items={state} strategy={verticalListSortingStrategy}>
            {state?.map((eachData) =>
              section === "Schedule" ? (
                <ScheduleContent key={eachData.id} eachData={eachData} />
              ) : (
                <Content key={eachData.id} eachData={eachData} />
              )
            )}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default ConferenceDetailForLargeDevices;
