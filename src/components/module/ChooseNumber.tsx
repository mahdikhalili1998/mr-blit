"use client";
import React, { useEffect, useState } from "react";
import BackArrow from "../icon/BackArrow";
import Cancle from "../icon/Cancle";
import { IOriginPage } from "@/types/componentsProps";
import Mines from "../icon/Mines";
import Plus from "../icon/Plus";
import { passengerNumData } from "@/constant/passengerNumberDate";
import { IErrorType } from "@/types/generalType";
import { usePathname } from "next/navigation";

function ChooseNumber({
  setSelectDestination,
  setSelectOrigin,
  setSelectDate,
  setSelectNumber,
  setStep,
  selectNumber,
  selectDate,
  selectDestination,
  selectOrigin,
  older12,
  middle12_2,
  baby,
  setpassengerNum,
  calculateNum,
  sum,
}: IOriginPage) {
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

  const submitHandler = () => {
    if (categoryName === "taxi" && sum && sum > 4) {
      setError(() => ({ isError: true, number: 4 }));
    } else {
      if (sum && sum > 9) {
        setError(() => ({ isError: true, number: 9 }));
      } else if (sum === 0) {
        setError(() => ({ isError: true, number: 0 }));
      } else {
        closeHandler();
        setError(() => ({ isError: false, number: 0 }));
      }
    }
  };

  const backHandler = () => {
    if (!selectDestination && !selectOrigin && !selectDate && selectNumber) {
      setSelectNumber(false);
      setStep(0);
    }
    if (selectDestination && selectDate && selectOrigin && selectNumber) {
      setStep(3);
      setSelectNumber(false);
      setSelectDate(true);
    }
    if (selectDate && selectNumber) {
      setStep(3);
      setSelectNumber(false);
      setSelectDate(true);
    }
  };

  const closeHandler = () => {
    setSelectDestination(false);
    setSelectDate(false);
    setSelectOrigin(false);
    setSelectNumber(false);
    setStep(0);
  };
  return (
    <div className="h-screen">
      {/* هدر بالا */}
      <div className="mb-1 flex items-center justify-between bg-blue px-4 py-6 text-white">
        <span onClick={backHandler} className="p-2">
          <BackArrow width={19} height={22} color="currentColor" />
        </span>
        <h1 className="text-xl font-semibold">انتخاب مسافر</h1>
        <span onClick={closeHandler} className="p-2">
          <Cancle width={14} height={22} color="currentColor" />
        </span>
      </div>
      {/* لیست تعداد */}
      <ul className="mx-4 mt-8 space-y-5">
        {passengerNumData.map((item) => (
          <li key={item.id} className="text-sm font-medium">
            <h2 className="mb-3">{item.title}</h2>
            <div className="mx-2 flex items-center justify-between">
              <span
                onClick={() => minesHandler(item.id)}
                className="rounded-xl bg-gray-200 p-4 text-slate-400"
              >
                <Mines width={15} height={18} color="currentColor" />
              </span>
              <span className="text-sm font-medium text-blue">
                {`  ${passengerCounts[item.id] ?? 0} ${item.prefix}`}
              </span>
              <span
                onClick={() => plusHandler(item.id)}
                className="rounded-xl bg-blue p-4 text-white"
              >
                <Plus width={15} height={18} color="currentColor" />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {/* پیام ارور */}
      {error.isError && error.number === 9 ? (
        <span className="mr-6 h-1 mt-6 block text-sm font-medium text-red-500">
          _ تعداد مسافران نباید بیشتر از 9 باشد
        </span>
      ) : null}
      {error.isError && error.number === 0 ? (
        <span className="mr-6 h-1 mt-6 block text-sm font-medium text-red-500">
          _ تعداد مسافران نباید صفر باشد
        </span>
      ) : null}
      {error.isError && error.number === 4 ? (
        <span className="mr-6 mt-6 h-1 block text-sm font-medium text-red-500">
          _ تعداد مسافران تاکسی نباید بیشتر از پنج باشد
        </span>
      ) : null}

      <button
        disabled={error.isError}
        onClick={submitHandler}
        className="w-full mt-9  rounded-xl bg-blue py-3 font-semibold text-white disabled:opacity-50"
      >
        تایید
      </button>
    </div>
  );
}

export default ChooseNumber;
