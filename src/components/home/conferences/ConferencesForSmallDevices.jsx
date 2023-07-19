import React from "react";
import ConferenceTimelineSmall from "./ConferenceTimelineSmall";

function ConferencesForSmallDevices({ conf }) {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold text-midnight mb-20 text-center">
        Conferences
      </h3>
      <div className="ps-4">
        {conf?.map((conference, i, conferences) => (
          <ConferenceTimelineSmall
            key={conference.id}
            conference={conference}
            isLast={i + 1 === conferences.length}
          />
        ))}
      </div>
    </div>
  );
}

export default ConferencesForSmallDevices;
