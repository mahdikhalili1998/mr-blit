"use client";
import LeftIcon from "../icon/LeftIcon";
import BusyRoutes from "../module/Footer/BusyRoutes";
import MobileApp from "../module/Footer/MobileApp";
import MoreOPtion from "../module/Footer/MoreOPtion";

import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { document } from "@/constant/DataForMap";
import Image from "next/image";
import Twitter from "../icon/Twitter";
import Telegram from "../icon/Telegram";
import Instagram from "../icon/Instagram";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Footer() {
  const [name, setName] = useState<string>("");
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    if (categoryName === "airPlane") {
      setName(" بلیط هواپیما");
    } else if (categoryName === "bus") {
      setName(" بلیط اتوبوس");
    } else if (categoryName === "train") {
      setName(" بلیط قطار ");
    } else if (categoryName === "taxi") {
      setName("رزرو تاکسی");
    } else if (categoryName === "hotel") {
      setName("رزرو هتل");
    } else if (categoryName === "login-modal") {
      setName("صفحه ورود");
    } else if (categoryName === "profile") {
      setName("پروفایل من");
    }
  }, [categoryName]);

  return (
    <div className="pb-10">
      {/* مشیرهای پر تردد */}
      {categoryName === "train" || categoryName === "taxi" ? null : (
        <BusyRoutes />
      )}
      {/* معرفی اپ موبایلی */}
      <div className="bg-gray-200 pb-4 pt-8">
        <MobileApp />
        {/* نشان آدرس  */}
        <p className="mx-6 mt-5 flex items-center gap-2 text-slate-500">
          <span> مستر بلیط</span>
          <span>
            <LeftIcon width={8} height={16} color=" currentColor" />
          </span>
          <span className="text-black">{name}</span>
        </p>
      </div>
      {/* پشتیبانی */}
      <div className="space-y-4 bg-white py-10">
        {/* تلفن پشتیبانی */}
        <div className="mx-5 flex items-center justify-center gap-2 rounded-md bg-gray-200 px-2 py-3 font-semibold text-blue">
          <span>تلفن پشتیبانی ۲۴ ساعته : </span>
          <span>021-61169000</span>
        </div>
        {/* ایمیل پشتیبانی */}
        <div className="mx-5 flex items-center justify-center gap-2 rounded-md bg-gray-200 px-2 py-3 font-semibold text-blue">
          <span>ایمیل پشتیبانی: </span>
          <span>salam@mrbilit.com</span>
        </div>
        <div className="mx-5 border-b-[2px] border-solid border-gray-200"></div>
      </div>
      {/* کنسلی بلیط */}
      <div className="bg-white pb-5">
        <h2 className="text-center font-semibold text-blue">
          پیگیری و کنسلی بلیط
        </h2>
        <div className="mx-3 mt-5 flex flex-col items-center justify-center gap-4 rounded-md bg-slate-200 py-5">
          <h2 className="text-lg font-semibold">راهکارهای سازمانی </h2>
          <p className="text-center font-medium text-gray-500">
            خدمات اختصاصیِ مِستربلیط برای ماموریت‌های کاری و رفاهیاتِ پرسنلِ
            سازمان‌ها
          </p>
          <button className="rounded-md border-[2px] border-solid border-blue px-20 py-3 font-semibold text-blue">
            فعال سازی پنل سازمانی
          </button>
        </div>
        <MoreOPtion />
      </div>
      {/* اسلایدر مجوز ها */}
      <div className="bg-white px-1 pt-10">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {document.map((item, index) => (
            <SwiperSlide key={index} className={styles.customSlidDocs}>
              <Image
                src={item.src}
                alt="logo"
                width={150}
                height={150}
                priority
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* خط جدا کننده */}
        <div className="mx-3 border-b-[2px] border-solid border-slate-200 pt-5"></div>
      </div>
      {/* فوتر اصلی */}
      <div className="bg-white pb-14 pt-5">
        <div className="flex items-center justify-around text-blue">
          <span className="font-semibold">salam@mrbilit.com</span>
          {/* شبکه های اجتماعی */}
          <div className="flex items-center gap-3">
            <span>
              <Twitter width={22} height={22} color="currentColor" />
            </span>
            <span>
              <Telegram width={22} height={22} color="currentColor" />
            </span>
            <span>
              <Instagram width={22} height={22} color="currentColor" />
            </span>
          </div>
        </div>
        <p className="mx-auto w-max pt-4 font-medium text-gray-400">
          {" "}
          تمامی حقوق برای شرکت عتیق گشت اصفهان محفوظ است.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
