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
    } else if (categoryNames === "bus") {
      setCategoryName("بلیط اتوبوس");
    } else {
      setCategoryName("");
    }
  }, [categoryNames]);

  return categoryName ? (
    <div className="mt-5 space-y-2 bg-[#e8f1fa] py-5">
      <h1 className="text-center text-xl font-semibold">مسیر های پر تردد</h1>
      <p className="mt-2 w-max text-xs text-slate-500">
        ارزان ترین و سریعترین مسیرها را با بیش از 500 شریک رسمی انتخاب کنید
      </p>
      {busyRoutes.map((item, index) => (
        <p key={index} className="pr-2 text-right font-bold text-blue">
          {categoryName} {item.name}
        </p>
      ))}
    </div>
  ) : null;
}

export default BusyRoutes;
