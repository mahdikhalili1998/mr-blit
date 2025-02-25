"use client";
import { usePathname } from "next/navigation";
import { busyRoutes } from "@/constant/DataForMap";
import { useEffect, useState } from "react";

function BusyRoutes() {
  const [categoryName, setCategoryName] = useState("");
  const params = usePathname();
  const categoryNames = params.split("/").pop();
  useEffect(() => {
    if (categoryNames === "airPlane") {
      setCategoryName("بلیط هواپیمای ");
    }
  }, [categoryNames]);

  return (
    <div className="mt-5 space-y-2">
      {busyRoutes.map((item, index) => (
        <p key={index} className="pr-2 text-right font-bold text-blue">
          {categoryName} {item.name}
        </p>
      ))}
    </div>
  );
}

export default BusyRoutes;
