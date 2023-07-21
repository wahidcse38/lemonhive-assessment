import React from "react";
//Queries
import { CONFERENCE } from "./../../queries/conferenceQueries";
//Hook
import useGetDataById from "@/hooks/useGetDataById";
import { useRouter } from "next/router";
//Spinner
import { RotatingLines } from "react-loader-spinner";
//Components
import ConferenceDetailForSmallDevices from "@/components/conference/ConferenceDetailForSmallDevices";
import ConferenceDetailForLargeDevices from "@/components/conference/ConferenceDetailForLargeDevices";

function Conference() {
  const router = useRouter();
  const { slug } = router.query;

  const { error, loading, data } = useGetDataById(CONFERENCE, slug);

  return (
    <div className="my-10 px-5">
      <div>
        <div className="space-y-4 mb-10 lg:mb-14">
          <h3 className="font-bold text-5xl text-midnight">
            {data?.conference?.name}
          </h3>
          <p className="font-normal text-lg text-midnight">
            {data?.conference?.slogan}
          </p>
        </div>
        {loading ? (
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
        ) : (
          <>
            <div className="block lg:hidden">
              <ConferenceDetailForSmallDevices conference={data?.conference} />
            </div>
            <div className="hidden lg:block">
              <ConferenceDetailForLargeDevices conference={data?.conference} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Conference;
