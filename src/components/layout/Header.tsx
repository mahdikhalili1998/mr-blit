"use client";

import Link from "next/link";
import FirstSecH from "../module/Header/FirstSecH";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  desktopSiteMap,
  routeDesktop,
  desktopTravelOption,
  desktopRahkarSazmani,
  desktopPeygiri,
  desktopSupport,
  desktopProfileOption,
} from "@/constant/DataForMap";

import DownArrow from "../icon/DownArrow";

import DesktopProfile from "../icon/DesktopProfile";
import axios from "axios";
import { formatName } from "@/helper/function";
import LeftIcon from "../icon/LeftIcon";
import SignUp from "../desktop/SignUp";

interface IDesktop {
  text?: string;
  link?: string;
}

function Header() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
  });
  // برای زمانی که کاربر احراز هویت نکرده
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  // برای زمانی که کاربر در دستکتاپ میخاد احراز هویت بکنه
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [bioName, setBioName] = useState("");
  const [device, setDevice] = useState("");
  const [isChangeRoute, setIsChangeRoute] = useState(false);
  // برای hover کردن روی گزینه ها
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  // برای گرفتن اطلاعات گزینه های هاور شده
  const [optionText, setOptionText] = useState<string>("");
  const [optionList, setOptionList] = useState<IDesktop[]>([]);

  useEffect(() => {
    if (optionText === "خدمات سفر") {
      setOptionList(desktopTravelOption);
    } else if (optionText === "راهکارهای سازمانی") {
      setOptionList(desktopRahkarSazmani);
    } else if (optionText === "پیگیری بلیط") {
      setOptionList(desktopPeygiri);
    } else if (optionText === "پشتیبانی") {
      setOptionList(desktopSupport);
    }
  }, [optionText]);

  const handleMouseEnter = (index: number) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setHoverIndex(null);
    }, 300); // می‌تونی این عدد رو کمتر یا بیشتر کنی
  };
  // برای گرفتن نام مسیر فعلی
  const router = useRouter();
  const params = usePathname();
  const categoryName = params.split("/").pop() || "";
  // برای ریسپانسیو سازی موقعیت وسیله نقلیه ی درون هدر
  const [topOffset, setTopOffset] = useState(100); // مقدار اولیه top

  // برای گوس دادن ب اندازه صفحه کاربر
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 1024;
      let baseTop = 100;
      if (categoryName === "train") {
        baseTop = 110;
      }
      if (categoryName === "airPlane") {
        baseTop = 85;
      }
      const extra = screenWidth > baseWidth ? screenWidth - baseWidth : 0;
      const steps = Math.floor(extra / 36);
      let newTop = baseTop + steps * 4;
      if (categoryName === "train") {
        newTop = baseTop + steps * 5;
      }
      if (categoryName === "airPlane") {
        newTop = baseTop + steps * 5;
      }
      setTopOffset(newTop);
    };
    handleResize(); // مقدار اولیه
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // برای گرفتن اطلاعات و تعین نوع وسیله نقلیه
  useEffect(() => {
    setDevice(categoryName); // تأخیر برای جلوگیری از فلیکر
  }, [categoryName]);
  // مربوط به گرفتن اطالاعات کاربر در دستکتاپ
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchData = async () => {
      await axios
        .post("/api/find-user", { userId })
        .then((res) => {
          if (res.status === 200) {
            setUserData({
              name: res.data.userInfo.name,
              lastName: res.data.userInfo.lastName,
              phoneNumber: res.data.userInfo.phoneNumber,
            });
          }
        })
        .catch(() => {
          setUserNotFound(true);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userData.phoneNumber) {
      setBioName(userData.name);
    }
  }, [userData]);

  const routeHandler = (route: string) => {
    setIsChangeRoute(true);
    router.push(route);
    setTimeout(() => setIsChangeRoute(false), 1500);
  };

  return (
    <div className="relative">
      <div
        className={`sticky top-0 z-30 bg-blue pb-4 lg:relative lg:bg-transparent ${categoryName === "hotel" ? "lg:h-[16rem] lg:bg-[url(/image/hotel-desktop.svg)] 1120:h-[18rem] 1200:h-[21rem] 1400:h-[23rem]" : "lg:h-[13rem] lg:bg-[url(/image/mainDesktopbg.png)] 1120:h-[16rem] xl:h-[17.8rem] 2xl:h-[21.1rem]"} lg:flex lg:items-start lg:justify-between lg:bg-[length:120%] lg:pb-40`}
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
        {/* مربوط به گزینه های بیشتر در دستکتاپ */}
        <div className="relative ml-14 hidden pt-2 lg:mr-2 lg:mt-2 lg:flex lg:gap-14">
          {desktopSiteMap.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                handleMouseEnter(index);
                setOptionText(item.name);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex cursor-pointer items-center gap-1 text-lg font-medium text-white">
                <li>{item.icon}</li>
                <li>{item.name}</li>
                <li>
                  <DownArrow width={16} height={13} color="currentColor" />
                </li>
              </ul>

              {hoverIndex === index && (
                <ul className="absolute left-0 top-full z-50 mt-2 min-w-[150px] space-y-4 rounded bg-white p-2 shadow">
                  {optionList.map((item, index) => (
                    <Link
                      href={item.link ? item.link : "#"}
                      className="flex flex-col rounded-md py-2 pr-3 font-medium text-black hover:bg-blue hover:text-white"
                      key={index}
                    >
                      {item.text}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {/* مربوط به گزینه ی اکانت و یا اطالاعات حساب */}
          {userNotFound ? (
            <>
              <ul
                onClick={() => setIsOpenModal(true)}
                className="flex cursor-pointer items-center gap-1 text-lg font-medium text-white"
              >
                <li>
                  <DesktopProfile width={22} height={19} color="currentColor" />
                </li>
                <li>ورود به حساب کاربری</li>
                <li>
                  <DownArrow width={16} height={13} color="currentColor" />
                </li>
              </ul>
              {isOpenModal && (
                <div className="z-[80]">
                  {/* بک‌درپ تار */}
                  <div
                    onClick={() => setIsOpenModal(false)}
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                  ></div>

                  {/* پنجره بازشو */}
                  <div className="fixed right-[25%] top-20 z-50 w-2/4 rounded-lg bg-white p-4 shadow-lg">
                    <SignUp setIsOpenModal={setIsOpenModal} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <ul
              onMouseEnter={() => {
                handleMouseEnter(6);
                setOptionText("account");
              }}
              onMouseLeave={handleMouseLeave}
              className="flex cursor-pointer items-center gap-1 text-lg font-medium text-white"
            >
              <li>
                <DesktopProfile width={22} height={19} color="currentColor" />
              </li>
              <li>
                <span className="flex items-center justify-center rounded-full border-2 border-solid border-white bg-blue px-[6px] py-1">
                  {formatName(bioName)}
                </span>
              </li>
              <li>
                <DownArrow width={16} height={13} color="currentColor" />
              </li>
              {hoverIndex === 6 && (
                <ul className="absolute left-0 top-full z-50 mt-2 min-w-[150px] space-y-4 rounded bg-white p-2 shadow">
                  {/* سطح برنزی */}
                  <li className="rounded-md bg-[#ffede2] px-1 py-2">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/image/level1.png"
                        width={100}
                        height={100}
                        alt="level 1"
                        priority
                        className="size-[1.5rem]"
                      />
                      <span className="text-sm font-semibold text-black">
                        مستر بلیط کلاب{" "}
                      </span>
                      <LeftIcon width={18} height={15} color="#000000" />
                    </div>
                    <span className="pr-3 text-xs font-semibold text-black">
                      سطح برنزی |0 امتیاز{" "}
                    </span>
                  </li>
                  {/* لیست گزینه ها */}
                  <li className="space-y-4">
                    {desktopProfileOption.map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-2 p-1 hover:rounded-md hover:bg-blue hover:text-white"
                      >
                        <span
                          className={`${
                            index === desktopProfileOption.length - 1
                              ? "text-red-500"
                              : "text-blue"
                          } group-hover:text-white`}
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`${
                            index === desktopProfileOption.length - 1
                              ? "text-red-500"
                              : "text-black"
                          } text-sm font-semibold group-hover:text-white`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </li>
                </ul>
              )}
            </ul>
          )}
        </div>

        {/* مربوط به اتخاب روت در موبایل */}
        <div className="sticky top-0 z-20 lg:hidden">
          <FirstSecH />
        </div>
      </div>
      {/* مربوط به وسیله نقلیه ی دسکتاپ */}
      <span
        className={`${categoryName === "hotel" ? "hidden" : "block"} ${categoryName === "airPlane" ? "right-4 1350:right-12" : null} ${categoryName === "train" ? "right-2 1120:right-6 1350:right-10" : null} ${categoryName === "bus" ? `1120:right-4 1292:right-8 1510:right-14` : null} ${categoryName === "taxi" ? "right-3 1200:right-7 1400:right-10" : null} absolute z-20 ${isChangeRoute ? "-translate-x-full opacity-0" : "-translate-x-20 opacity-100"} hidden transition-all duration-500 ease-in-out lg:block`}
        style={
          categoryName === "bus"
            ? { top: `${topOffset}px` }
            : categoryName === "taxi"
              ? { top: `${topOffset}px` }
              : categoryName === "train"
                ? { top: `${topOffset}px` }
                : categoryName === "airPlane"
                  ? { top: `${topOffset}px` }
                  : undefined
        }
      >
        <Image
          src={`/image/${device}-desktop.svg`}
          alt="thing"
          width={400}
          height={400}
          priority
          className={` ${categoryName === "taxi" ? "lg:w-[11rem] 1200:w-[13rem] 1400:w-[14rem]" : categoryName === "bus" ? "lg:w-[14rem] 1200:w-[16rem] 1400:w-[20rem]" : categoryName === "train" ? "lg:w-[22rem] 1120:w-[26rem] 1315:w-[30rem]" : categoryName === "airPlane" ? "lg:w-[20rem] 1350:w-[22rem]" : "w-[22rem]"} ${categoryName === "hotel" ? "hidden" : "block"} `}
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
            className={`${categoryName === item.name ? "bg-yellow-300" : "bg-white"} ${isOpenModal ? "hidden" : "flex"} z-30 flex-col items-center justify-center gap-2 rounded-md px-5 py-2`}
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
