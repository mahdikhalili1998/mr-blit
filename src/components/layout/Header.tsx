"use client";

import Link from "next/link";
import FirstSecH from "../module/Header/FirstSecH";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { routeDesktop } from "@/constant/DataForMap";

function Header() {
  const [device, setDevice] = useState("");
  const [isChangeRoute, setIsChangeRoute] = useState(false);
  // console.log(isChangeRoute);
  const router = useRouter();
  const params = usePathname();
  const categoryName = params.split("/").pop() || "";

  useEffect(() => {
    setDevice(categoryName); // تأخیر برای جلوگیری از فلیکر
  }, [categoryName]);

  const routeHandler = (route: string) => {
    setIsChangeRoute(true);
    router.push(route);
    setTimeout(() => setIsChangeRoute(false), 1500);
  };

  return (
    <div className="relative">
      <div
        className={`sticky top-0 z-30 bg-blue pb-4 lg:relative lg:bg-transparent ${categoryName === "hotel" ? "lg:h-[16rem] lg:bg-[url(/image/hotel-desktop.svg)]" : "lg:h-[13rem] lg:bg-[url(/image/mainDesktopbg.png)]"} lg:bg-[length:120%] lg:pb-40`}
      >
        <Link
          href={"/"}
          className="mb-4 mr-5 flex flex-col gap-2 pt-1 lg:mr-2 lg:gap-1"
        >
          <h1 className="text-2xl font-bold text-white lg:text-3xl">
            مِستر بلیط
          </h1>
          <p className="text-sd text-white lg:text-xs lg:font-semibold">
            بلیط هواپیما و رزرو هتل
          </p>
        </Link>
        <div className="sticky top-0 z-20 lg:hidden">
          <FirstSecH />
        </div>
      </div>
      {/* مربوط به وسیله نقلیه ی دسکتاپ */}
      <span
        className={`${categoryName === "hotel" ? "hidden" : "block"} ${categoryName === "airPlane" ? "top-[75px]" : null} ${categoryName === "train" ? "top-[105px]" : null} ${categoryName === "bus" ? "top-[88px]" : null} ${categoryName === "taxi" ? "top-[95px]" : null} absolute z-20 ${isChangeRoute ? "-translate-x-full opacity-0" : "-translate-x-20 opacity-100"} transition-all duration-500 ease-in-out`}
      >
        <Image
          src={`/image/${device}-desktop.svg`}
          alt="thing"
          width={400}
          height={400}
          priority
          className={` ${categoryName === "taxi" ? "w-[11rem]" : "w-[22rem]"} ${categoryName === "bus" ? "w-[15rem]" : "w-[22rem]"}`}
        />
      </span>
      {/* انتخاب مسیر در دستکتاپ */}
      <div
        className={`${categoryName === "hotel" ? "-mt-12" : "-mt-6"} mr-2 hidden gap-3 lg:flex`}
      >
        {routeDesktop.map((item, index) => (
          <div
            onClick={() => routeHandler(item.name)}
            key={index}
            className={`${categoryName === item.name ? "bg-yellow-300" : "bg-white"} z-30 flex flex-col items-center justify-center gap-2 rounded-md px-5 py-2`}
          >
            {item.icon}
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
