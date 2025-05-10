import "swiper/css";
import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import {
  airLineName,
  trainStation,
  busStation,
  hotelStation,
} from "@/constant/DataForMap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

function StationSlider() {
  const [data, setData] = useState<{ src: string; name: string }[]>([]);
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    if (categoryName === "airPlane") {
      setData(airLineName);
    } else if (categoryName === "train") {
      setData(trainStation);
    } else if (categoryName === "bus") {
      setData(busStation);
    } else if (categoryName === "hotel") {
      setData(hotelStation);
    }
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 4, // برای عرض 768px دو اسلاید نشون بده
            spaceBetween: 35, // فاصله کمتر بین اسلایدها
          },
          768: {
            slidesPerView: 4, // برای عرض 768px دو اسلاید نشون بده
            spaceBetween: 25, // فاصله کمتر بین اسلایدها
          },
        }}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className={`${styles.airLine}`}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={item.src}
                width={100}
                height={100}
                alt={item.name}
                priority
                className={`rounded-m relative`}
              />
              <span className={`w-max text-xs font-medium`}>{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default StationSlider;
