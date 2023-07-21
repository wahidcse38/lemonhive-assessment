import { arrayMove } from "@dnd-kit/sortable";

export const handleContentDrag = (event, setState) => {
  const { active, over } = event;

  if (active.id !== over.id) {
    setState((arr) => {
      const activeIndex = arr.findIndex((i) => i.id === active.id);
      const overIndex = arr.findIndex((i) => i.id === over.id);
      return arrayMove(arr, activeIndex, overIndex);
    });
  }
};

export const handleMenuDrag = (event, setMenu) => {
  const { active, over } = event;

  if (active.id !== over.id) {
    setState((arr) => {
      const activeIndex = arr.findIndex((i) => i.id === active.id);
      const overIndex = arr.findIndex((i) => i.id === over.id);

      return arrayMove(arr, activeIndex, overIndex);
    });
  }
};
