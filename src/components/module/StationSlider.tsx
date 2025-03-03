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
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className={`${styles.airLine}`}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={item.src}
                width={200}
                height={200}
                alt={item.name}
                priority
                className="relative rounded-md"
              />
              <span className="w-max text-xs font-medium">{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default StationSlider;
