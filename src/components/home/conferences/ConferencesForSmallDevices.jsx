import React from "react";
import Conference from "./Conference";

function ConferencesForSmallDevices({ conf }) {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold text-midnight mb-20 text-center">
        Conferences
      </h3>
      <div className="ps-4">
        {conf?.map((conference, i, conferences) => (
          <Conference
            key={conference.id}
            conference={conference}
            isLast={i + 1 === conferences.length}
          />
        ))}

        {/* <Conference />
        <Conference isLast /> */}
      </div>
    </div>
  );
}

export default ConferencesForSmallDevices;
