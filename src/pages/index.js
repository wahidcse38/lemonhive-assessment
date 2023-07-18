import { useEffect, useState } from "react";
//Queries
import { CONFERENCES } from "../queries/conferenceQueries";
//Hook
import useGetAllData from "@/hooks/useGetAllData";
//Component
import ConferencesForSmallDevices from "@/components/home/conferences/ConferencesForSmallDevices";

export default function Home() {
  const [conf, setConf] = useState([]);
  const { error, loading, data } = useGetAllData(CONFERENCES);

  useEffect(() => {
    if (data) {
      const conferences = [...data?.conferences].sort((a, b) => {
        const aDate = new Date(a.startDate);
        const bDate = new Date(b.startDate);
        return bDate - aDate;
      });
      setConf((prevArr) => {
        return [...prevArr, ...conferences];
      });
    }
  }, [data]);

  return (
    <div className="container">
      <ConferencesForSmallDevices conf={conf} />
    </div>
  );
}
