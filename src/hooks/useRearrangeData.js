import React, { useState } from "react";

function useRearrangeData(conference, section, setState) {
  //   const [state, setState] = useState([]);
  let arr = [];
  switch (section) {
    case "Organizer":
      setState([]);
      conference?.organizers?.forEach((item, i) => {
        let obj = {
          ...item,
          id: i + 1,
        };
        //   console.log({ obj });
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
        //   console.log({ obj });
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
        //   console.log({ obj });
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
        //   console.log({ obj });
        arr.push({ ...obj });
      });
      return setState((prevArr) => {
        return [...prevArr, ...arr];
      });

    default:
      return null;
  }
}

export default useRearrangeData;
