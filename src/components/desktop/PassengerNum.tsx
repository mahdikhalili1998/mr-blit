"use client";
import { IOriginPage } from "@/types/componentsProps";
import React, { FC, useEffect, useState } from "react";
import Mines from "../icon/Mines";
import Plus from "../icon/Plus";
import { passengerNumData } from "@/constant/passengerNumberDate";
import { usePathname } from "next/navigation";
import { IErrorType } from "@/types/generalType";

const PassengerNum: FC<IOriginPage> = ({
  setpassengerNum,
  older12,
  middle12_2,
  baby,
  calculateNum,
  sum,
}) => {
  const [error, setError] = useState<IErrorType>({
    isError: false,
    number: 0,
  });

  const passengerCounts: Record<string, number> = {
    older12: older12 ?? 0,
    middle12_2: middle12_2 ?? 0,
    baby: baby ?? 0,
  };
  const params = usePathname();
  const categoryName = params.split("/").pop();

  //   برای چککردن اینکه تعداد مسافرین مجاز باشد
  useEffect(() => {
    calculateNum();
    if (categoryName === "taxi" && sum && sum <= 4) {
      setError(() => ({ isError: false, number: 0 }));
    } else {
      if (sum && sum < 9) {
        setError(() => ({ isError: false, number: 0 }));
      }
    }
  }, [older12, middle12_2, baby, sum]);
  //   برای چک کردن مجموع تعداد مسافرین
  useEffect(() => {
    if (categoryName === "taxi" && sum && sum > 4) {
      setError(() => ({ isError: true, number: 4 }));
    } else {
      if (sum && sum > 9) {
        setError(() => ({ isError: true, number: 9 }));
      }
    }
  }, [sum]);

  const minesHandler = (id: string) => {
    setpassengerNum((prevState: any) => ({
      ...prevState,
      [id]: Math.max((prevState[id] || 0) - 1, 0),
    }));
  };

  const plusHandler = (id: string) => {
    setpassengerNum((prevState: any) => ({
      ...prevState,
      [id]: Math.max((prevState[id] || 0) + 1, 0),
    }));
  };
  return (
    <div className="rounded-md bg-white px-4 pb-4 pt-3">
      {/* انتخاب تعداد */}
      <ul className="space-y-5">
        {passengerNumData.map((item) => (
          <li key={item.id} className="text-sm font-medium">
            <h2 className="mb-4">{item.title}</h2>
            <div className="flex items-center justify-between gap-10">
              <span
                onClick={() => minesHandler(item.id)}
                className="rounded-xl bg-gray-200 p-3 text-slate-400"
              >
                <Mines width={15} height={18} color="currentColor" />
              </span>
              <span className="text-sm font-medium text-blue">
                {`  ${passengerCounts[item.id] ?? 0} ${item.prefix}`}
              </span>
              <span
                onClick={() => plusHandler(item.id)}
                className="rounded-xl bg-blue p-3 text-white"
              >
                <Plus width={15} height={18} color="currentColor" />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {/* پیام ارور */}
      {error.isError && error.number === 9 ? (
        <span className="mt-5 pb-5 block h-1 text-sm font-medium text-red-500">
          _ تعداد مسافران نباید بیشتر از 9 باشد
        </span>
      ) : null}
      {error.isError && error.number === 0 ? (
        <span className="mt-5 pb-5 block h-1 text-sm font-medium text-red-500">
          _ تعداد مسافران نباید صفر باشد
        </span>
      ) : null}
      {error.isError && error.number === 4 ? (
        <span className="mt-5 pb-5 block h-1 text-sm font-medium text-red-500">
          _ تعداد مسافران تاکسی نباید بیشتر از پنج باشد
        </span>
      ) : null}
    </div>
  );
};

export default PassengerNum;
