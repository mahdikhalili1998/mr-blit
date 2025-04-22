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
        className={`sticky top-0 z-30 bg-blue pb-4 lg:relative lg:bg-transparent ${categoryName === "hotel" ? "1200:h-[21rem] 1400:h-[23rem] 1120:h-[18rem] lg:h-[16rem] lg:bg-[url(/image/hotel-desktop.svg)]" : "1120:h-[16rem] lg:h-[13rem] lg:bg-[url(/image/mainDesktopbg.png)] xl:h-[17.8rem] 2xl:h-[21.1rem]"} lg:bg-[length:120%] lg:pb-40`}
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
        className={`${categoryName === "hotel" ? "hidden" : "block"} ${categoryName === "airPlane" ? "1090:top-[90px] 1155:top-[100px] 1230:top-[110px] 1292:top-[119px] 1292:right-7 1368:top-[130px] 1450:top-[140px] 1450:right-10 right-4 top-[80px]" : null} ${categoryName === "train" ? "1055:top-[120px] 1140:top-[135px] 1250:top-[145px] 1315:top-[160px] 1420:top-[175px] 1420:right-10 1510:top-[190px] right-2 top-[105px]" : null} ${categoryName === "bus" ? "top-[95px]" : null} ${categoryName === "taxi" ? "top-[100px]" : null} absolute z-20 ${isChangeRoute ? "-translate-x-full opacity-0" : "-translate-x-20 opacity-100"} hidden transition-all duration-500 ease-in-out lg:block`}
      >
        <Image
          src={`/image/${device}-desktop.svg`}
          alt="thing"
          width={400}
          height={400}
          priority
          className={` ${categoryName === "taxi" ? "w-[10rem]" : "w-[22rem]"} ${categoryName === "hotel" ? "hidden" : "block"} ${categoryName === "bus" ? "w-[14rem]" : "w-[22rem]"}`}
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
