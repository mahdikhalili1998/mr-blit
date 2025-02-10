"use client";

import { useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";

function AirPlanePage() {
  const [selectedType, setSelectedType] = useState({
    type: "",
    way: "یک طرفه",
  });
  console.log(selectedType);
  return (
    <div>
      <TypeOfTravel
        type={selectedType.type}
        way={selectedType.way}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}

export default AirPlanePage;
