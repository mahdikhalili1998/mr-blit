"use client";

import Link from "next/link";
import FirstSecH from "../module/Header/FirstSecH";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { routeDesktop } from "@/constant/DataForMap";

function Header() {
  const [device, setDevice] = useState("");
  const params = usePathname();
  const categoryName = params.split("/").pop() || "";

  useEffect(() => {
    setDevice(categoryName);
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0 z-30 bg-blue pb-4 lg:relative lg:h-[13rem] lg:bg-transparent lg:bg-[url(/image/mainDesktopbg.png)] lg:bg-[length:120%] lg:pb-40">
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
      <span className="absolute right-20 top-[75px] z-20 lg:block">
        <Image
          src="/image/flight-desktop.svg"
          alt="thing"
          width={400}
          height={400}
          priority
          className="w-[22rem]"
        />
      </span>
      {/* انتخاب مسیر در دستکتاپ */}
      <div className="-mt-6 mr-8 hidden gap-4 lg:flex">
        {routeDesktop.map((item, index) => (
          <Link
            href={`/${item.name}`}
            key={index}
            className={`${categoryName === item.name ? "bg-yellow-300" : "bg-white"} z-30 flex flex-col items-center justify-center gap-2 rounded-md px-6 py-3`}
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
