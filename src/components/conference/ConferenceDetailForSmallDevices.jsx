import React, { useEffect, useState } from "react";
import SidebarItem from "./common/SidebarItem";

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
  const makeObjToArr = (obj) => {
    return [
      {
        id: 1,
        name: "Organizer",
        data: obj?.organizers.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 2,
        name: "Speakers",
        data: obj?.speakers.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 3,
        name: "Schedule",
        data: obj?.schedules.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
      {
        id: 4,
        name: "Sponsors",
        data: obj?.sponsors.map((item, i) => {
          return {
            ...item,
            id: i + 1,
          };
        }),
      },
    ];
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
    <div className="space-y-6">
      {tabText.map((item) => (
        <SidebarItem
          key={item?.id}
          item={item}
          setSection={setSection}
          section={section}
          state={state}
        />
      ))}
    </div>
  );
}

export default ConferenceDetailForSmallDevices;
