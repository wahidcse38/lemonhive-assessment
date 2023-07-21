import React, { useEffect, useState } from "react";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@/components/conference/SortableItem";

const data = [
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

function Swap() {
  const [state, setState] = useState(data);

  function handleDragEnd(event) {
    console.log("hello");
    const { active, over } = event;
    console.log({ active, over });

    // const activeIndex = state.findIndex((i) => i.id === active.id.id);
    // const overIndex = state.findIndex((i) => i.id === over.id.id);
    // console.log({ activeIndex, overIndex });

    if (active.id !== over.id) {
      console.log("in");
      setState((arr) => {
        //   const activeIndex = arr.indexOf(active.id.name);
        //   const overIndex = arr.indexOf(over.id.name);
        const activeIndex = arr.findIndex((i) => i.id === active.id);
        const overIndex = arr.findIndex((i) => i.id === over.id);
        console.log({ activeIndex, overIndex });
        console.log(arrayMove(arr, activeIndex, overIndex));
        return arrayMove(arr, activeIndex, overIndex);
      });
    }
  }

  useEffect(() => {
    let arr = [];
    data.forEach((item, i) => {
      let obj = {
        ...item,
        d: i,
      };
      //   console.log({ obj });
      arr.push({ ...obj });
    });
    setState([...arr]);
  }, [data]);

  console.log({ state });

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div>
        <h1>Hello, I am practising Dragable component</h1>
        <SortableContext items={state} strategy={verticalListSortingStrategy}>
          {state.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default Swap;
