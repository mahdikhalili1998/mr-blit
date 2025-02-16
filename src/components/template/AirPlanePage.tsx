"use client";

import { useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";
import ChooseDestination from "../module/ChooseDestination";

function AirPlanePage() {
  const [selectedType, setSelectedType] = useState({
    type: "inside",
    way: "یک طرفه",
  });

  return (
    <div className="bg-white my-2 pb-5">
      <TypeOfTravel
        type={selectedType.type}
        way={selectedType.way}
        setSelectedType={setSelectedType}
      />
      <ChooseDestination
        type={selectedType.type}
        way={selectedType.way}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}

export default AirPlanePage;
