"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { planeTicket, hotelList } from "@/constant/TicketData";
import { RotateLoader } from "react-spinners";
import Image from "next/image";
import { ISearchResult } from "@/types/componentsProps";
import SmallPlane from "../icon/SmallPlane";
import Bell from "../icon/Bell";
import Saeqe from "../icon/Saeqe";
import PlusBell from "../icon/PlusBell";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// استایل‌های موردنیاز
import "swiper/css";
import "swiper/css/pagination";

function SearchResult({ userDestination, userOrigin }: ISearchResult) {
  const [data, setData] = useState<object[]>([]);
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    if (categoryName === "airPlane") {
      setData(planeTicket);
    } else if (categoryName === "hotel") {
      setData(hotelList);
    }
  }, []);

  return (
    <div className="mb-24 overflow-y-hidden">
      {!data.length ? (
        <div className="mx-auto mt-[7rem] w-max">
          <RotateLoader color="#0f84fa" />
        </div>
      ) : (
        <div className="mx-2 mt-5 space-y-5">
          {categoryName === "hotel" &&
            data.map((item: any, index: number) => (
              <div className="rounded-xl bg-white p-2" key={index}>
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper"
                  >
                    {item.imageSrc.map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={item}
                          alt="photo"
                          width={200}
                          height={200}
                          priority
                          className="w-24"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          {categoryName === "airPlane" &&
            data.map((item: any) => (
              <div className="rounded-xl bg-white p-2" key={item.id}>
                <span className="rounded-xl bg-yellow-200 px-2 text-right text-xs font-bold text-yellow-800">
                  {item.name}
                </span>
                {/* دیو مربوط به لوگو شرکت و ساعات */}
                <div className="mt-5 flex items-center gap-5">
                  {/* لوگو */}
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={100}
                      height={100}
                      priority
                      className="size-[24px]"
                    />
                    <span className="mt-2 w-max text-xs">{item.campony}</span>
                  </div>
                  {/* ساعات */}
                  <ul className="flex items-center gap-9">
                    {/* ساعت رفت */}
                    <li className="flex flex-col items-center justify-center text-xs">
                      <span className="text-lg font-semibold text-black">
                        {item.start}
                      </span>
                      <span className="text-gray-500">{userOrigin}</span>
                    </li>

                    <li className="flex w-max items-center gap-2">
                      <span className="size-[10px] rounded-full bg-gray-600"></span>
                      <span className="font-semibold text-gray-600">
                        - - - -
                      </span>
                      <span className="rotate-180">
                        <SmallPlane width={24} height={24} color=" #4b5563" />
                      </span>
                    </li>
                    {/* ساعت برگشت */}
                    <li className="flex flex-col items-center justify-center text-xs">
                      <span className="text-lg font-semibold text-black">
                        {item.finish}
                      </span>
                      <span className="text-gray-500">{userDestination}</span>
                    </li>
                  </ul>
                </div>
                {/* خط جدا کننده */}
                <div className="mx-3 mt-5 border-[1px] border-solid border-gray-200"></div>
                {/* دیو آیکون زنگوله صاعقه قیمت */}

                {item.available ? (
                  <div className="m-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue">
                      <Bell width={20} height={20} color="currentColor" />
                      <Saeqe width={20} height={20} color="currentColor" />
                      <span
                        className={`${item.capicity < 5 ? "text-red-500" : "text-gray-400"} mr-5 text-sm`}
                      >
                        {item.capicity} صندلی
                      </span>
                    </div>
                    <span className="font-medium text-blue">
                      {item.price.toLocaleString("en-US")} تومان
                    </span>
                  </div>
                ) : (
                  <div className="m-3 flex items-center gap-2 text-blue">
                    <span>
                      <PlusBell width={20} height={20} color="currentColor" />
                    </span>
                    <h2 className="text-sm font-medium">موجود شد خبرم کن</h2>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
