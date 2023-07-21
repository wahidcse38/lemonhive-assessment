export function handleContentSet(section, setState, state, conference) {
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
}
