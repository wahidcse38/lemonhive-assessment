import { useEffect, useState } from "react";
//Queries
import { CONFERENCES } from "../queries/conferenceQueries";
//Hook
import useGetAllData from "@/hooks/useGetAllData";
//Spinner
import { RotatingLines } from "react-loader-spinner";
//Component
import ConferencesForSmallDevices from "@/components/home/conferences/ConferencesForSmallDevices";
import ConferencesForLargeDevices from "@/components/home/conferences/ConferencesForLargeDevices";

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
      {loading && (
        <div className="h-screen flex justify-center items-center">
          <RotatingLines
            strokeColor="#FFC93E"
            strokeWidth="3"
            animationDuration="1"
            width="56"
            visible={true}
            className="text-midnight"
          />
        </div>
      )}
      <div className="block md:hidden">
        <ConferencesForSmallDevices conf={conf} />
      </div>
      <div className="hidden md:block">
        <ConferencesForLargeDevices conf={conf} />
      </div>
    </div>
  );
}
