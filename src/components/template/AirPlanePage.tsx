"use client";

import { useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";

function AirPlanePage() {
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div>
      <TypeOfTravel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}

export default AirPlanePage;
