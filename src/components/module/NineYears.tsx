"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";
import "swiper/css";
import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { ourSite, cityPhoto } from "@/constant/DataForMap";
import Text from "./Text";

function NineYears() {
  const [imageSrc, setImageSrc] = useState({
    first: "",
    second: "",
    title: "",
  });

  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    // عکس ها ست میشوند
    setImageSrc((img) => ({
      ...img,
      first: `/image/9year-${categoryName}.jpg`,
      second: `/image/9year-${categoryName}2.png`,
    }));
    // تایتل ست میشود
    if (categoryName === "airPlane") {
      setImageSrc((img) => ({
        ...img,
        title: "بلیط هواپیما",
      }));
    } else if (categoryName === "train") {
      setImageSrc((img) => ({
        ...img,
        title: "بلیط قطار",
      }));
    } else if (categoryName === "bus") {
      setImageSrc((img) => ({
        ...img,
        title: "بلیط اتوبوس",
      }));
    } else if (categoryName === "taxi") {
      setImageSrc((img) => ({
        ...img,
        title: "تاکسی بین شهری و دربستی",
      }));
    }
  }, [categoryName]);

  return (
    <div className="mb-20 mt-6 bg-white">
      <h1 className="py-6 text-center text-lg font-semibold text-slate-500">
        {imageSrc.title}
      </h1>
      {/* اسلایدر مربوط به 9 سال سابقه */}
      {!imageSrc.first && !imageSrc.second ? (
        <div className="mx-auto mt-[7rem] w-max">
          <RotateLoader color="#0f84fa" />
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src={imageSrc.first}
              alt="photo"
              width={200}
              height={200}
              priority
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              src={imageSrc.second}
              alt="photo"
              width={200}
              height={200}
              priority
              className="rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      )}
      {/* اسلایدر شهر ها به جز هتل */}
      {categoryName === "hotel" ? null : (
        <div className="py-10">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {cityPhoto.map((item, index) => (
              <SwiperSlide key={index} className={`${styles.citySlid}`}>
                <div className="">
                  <Image
                    src={item.src}
                    width={150}
                    height={150}
                    alt="citi photo"
                    objectFit="cover"
                    priority
                    className="relative rounded-md"
                  />
                  {/* لایه رنگی */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-blue/70 to-blue/100 opacity-60"></div>
                </div>
                <span className="absolute bottom-2 left-12 text-xs font-medium text-white">{`بیلط ${item.cityName}`}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {/* اسلایدر مربوط به ویژگی های سایت */}
      <div className="py-10">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {ourSite.map((item, index) => (
            <SwiperSlide key={index} className={styles.customSlid}>
              <div className="flex flex-col items-center justify-center gap-3">
                <span>{item.icon}</span>
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="w-40 text-xs font-medium text-slate-500">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* متن ها */}
      <Text />
    </div>
  );
}

export default NineYears;
