import React from "react";
import ConferenceTimelineLarge from "./ConferenceTimelineLarge";

function ConferencesForLargeDevices({ conf }) {
  return (
    <div className="my-10">
      <h3 className="md:text-4xl lg:text-5xl font-bold text-midnight mb-16 text-center">
        Conferences
      </h3>
      <div className="">
        {conf?.map((conference, i, conferences) => (
          <ConferenceTimelineLarge
            key={conference.id}
            conference={conference}
            isLast={i + 1 === conferences.length}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default ConferencesForLargeDevices;
