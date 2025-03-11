"use client";

import { shortcutData } from "@/constant/ShortcutData";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Shortcut() {
  const [isCheck, setIsCheck] = useState({ click: false, value: "" });
  const router = useRouter();
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    if (categoryName === "airPlane") {
      setIsCheck({ click: true, value: "home" });
    } else if (categoryName === "services") {
      setIsCheck({ click: true, value: "newTrip" });
    } else if (categoryName === "profile") {
      setIsCheck({ click: true, value: "profile" });
    }
  }, [categoryName]);

  const clickHandler = (value: string) => {
    if (value === "home") {
      router.push("/");
      setIsCheck({ click: true, value });
    } else if (value === "newTrip") {
      setIsCheck({ click: true, value });
      router.push("/services");
    } else if (value === "profile") {
      router.push("/profile");
    } else if (value === "my-ticket") {
      router.push("/my-ticket");
    }
  };

  return (
    <ul className="fixed bottom-0 z-50 flex w-full items-center justify-between bg-white px-4 py-4">
      {shortcutData.map((item: any) => (
        <li
          onClick={() => clickHandler(item.nameEn)}
          key={item.nameEn}
          className={`${isCheck.click && isCheck.value === item.nameEn ? "text-blue" : "text-slate-400"} flex flex-col items-center justify-center gap-2`}
        >
          <span>{item.icon}</span>
          <span className="text-xs font-bold">{item.nameFa}</span>
        </li>
      ))}
    </ul>
  );
}

export default Shortcut;
