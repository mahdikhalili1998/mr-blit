"use client";
import LeftIcon from "../icon/LeftIcon";
import BusyRoutes from "../module/Footer/BusyRoutes";
import MobileApp from "../module/Footer/MobileApp";
import MoreOPtion from "../module/Footer/MoreOPtion";

import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { document } from "@/constant/DataForMap";
import Image from "next/image";

function Footer() {
  return (
    <div className="pb-10">
      {/* مشیرهای پر تردد */}
      <div className="bg-[#e8f1fa] py-5">
        <h1 className="text-center text-xl font-semibold">مسیر های پر تردد</h1>
        <p className="mt-2 w-max text-xs text-slate-500">
          ارزان ترین و سریعترین مسیرها را با بیش از 500 شریک رسمی انتخاب کنید
        </p>
        <BusyRoutes />
      </div>
      {/* معرفی اپ موبایلی */}
      <div className="bg-gray-200 pb-4 pt-8">
        <MobileApp />
        {/* نشان آدرس  */}
        <p className="mx-6 mt-5 flex items-center gap-2 text-slate-500">
          <span> مستر بلیط</span>
          <span>
            <LeftIcon width={8} height={16} color=" currentColor" />
          </span>
          <span className="text-black">بلیط هواپیما</span>
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
      <div className="bg-white py-10 px-1">
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
      </div>
    </div>
  );
}

export default Footer;
