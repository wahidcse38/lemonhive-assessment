import Sidebar from "@/components/conference/Sidebar";
import React from "react";

function Conference() {
  return (
    <div className="my-10">
      <div>
        <div className="space-y-4 mb-10">
          <h3 className="font-bold text-5xl text-midnight">Conference info</h3>
          <p className="font-normal text-lg text-midnight">
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum.
          </p>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Conference;
