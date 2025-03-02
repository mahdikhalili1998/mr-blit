"use client";
import { suggestHotel } from "@/constant/DataForMap";
import Image from "next/image";
import "swiper/css";
import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import Location from "../icon/Location";
import Star from "../icon/Star";

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
            className={`${styles.hotel} rounded-md py-7 mb-5 shadow-xl shadow-slate-300`}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SuggestHotel;
