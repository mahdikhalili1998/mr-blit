"use client";
import { suggestHotel } from "@/constant/DataForMap";
import Image from "next/image";
import "swiper/css";
import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import Location from "../icon/Location";
import Star from "../icon/Star";
import LowRate from "../icon/LowRate";
import UpRate from "../icon/UpRate";

function SuggestHotel() {
  return (
    <div className="">
      <h1 className="text-right font-bold">هتل های پیشنهادی</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className={styles.swiperContainer}
      >
        {suggestHotel.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.hotel} mb-5 rounded-md py-7 shadow-xl shadow-slate-300`}
          >
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={250}
              height={250}
              priority
              className="rounded-md"
            />
            <h4 className="mt-3 px-2 text-right text-sm font-bold">
              {item.name}
            </h4>
            {/* دیو مربوط به ستاره و موقعیت */}
            <div className="mt-4 flex items-center px-2 text-yellow-500">
              {Array.from({ length: item.star }, (_, index) => (
                <Star key={index} width={15} height={15} color="currentColor" />
              ))}
              <span className="mr-2 text-xs text-black">{item.star} ستاره</span>
              <div className="mr-5 flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  <Location width={12} height={15} color="currentColor" />
                </span>
                <span className="text-xs font-semibold text-black">
                  {item.location}
                </span>
              </div>
            </div>
            {/* امتیاز */}
            <div className={`mt-2 mr-2 flex items-center gap-1`}>
              <span>
                {item.rate >= 5 ? (
                  <UpRate width={16} height={16} color="#22c55e" />
                ) : (
                  <LowRate width={16} height={16} color="#f97316" />
                )}
              </span>
              <span
                className={`${item.rate >= 5 ? "text-green-500" : "text-orange-500"} mt-[4px] text-xs font-semibold`}
              >
                {item.rate}/10
              </span>
            </div>
            {/* خط جدا کننده */}
            <div className="mx-2 mt-4 border-b-[1.5px] border-solid border-slate-300"></div>
            {/* قیمت */}
            <div className="text-center font-medium mt-5">
              <span className="text-sm">قیمت هر شب از </span>
              <span className="font-semi-bold mx-2 text-xl text-blue">
                {item.price.toLocaleString("en-US")}
              </span>
              <span className="text-sm">تومان</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SuggestHotel;
