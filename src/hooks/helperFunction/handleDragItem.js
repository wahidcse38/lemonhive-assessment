import { arrayMove } from "@dnd-kit/sortable";

export const handleContentDrag = (event, setState) => {
  console.log(event);
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

export const handleMenuDrag = (event, setMenu) => {
  console.log(event);
  const { active, over } = event;
  console.log({ active });
  console.log({ over });
  if (active.id !== over.id) {
    console.log("in");
    setMenu((arr) => {
      const activeIndex = arr.findIndex((i) => i.id === active.id);
      const overIndex = arr.findIndex((i) => i.id === over.id);
      console.log({ activeIndex, overIndex });
      console.log(arrayMove(arr, activeIndex, overIndex));
      return arrayMove(arr, activeIndex, overIndex);
    });
  }
};
