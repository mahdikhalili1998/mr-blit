import "swiper/css";
import styles from "@/css/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { airLineName } from "@/constant/DataForMap";
import { usePathname } from "next/navigation";
import Image from "next/image";

function AirLineSlider() {
  // const params = usePathname();
  // const categoryName = params.split("/").pop();
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {airLineName.map((item, index) => (
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
              <span className="w-max text-xs font-medium">{`شرکت هواپیمایی ${item.name}`}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default AirLineSlider;
