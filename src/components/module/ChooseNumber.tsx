"use client";
import React, { useState } from "react";
import BackArrow from "../icon/BackArrow";
import Cancle from "../icon/Cancle";
import { IOriginPage } from "@/types/componentsProps";
import Mines from "../icon/Mines";
import Plus from "../icon/Plus";
import { passengerNumData } from "@/constant/passengerNumberDate";

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
}: IOriginPage) {
  const [error, setError] = useState<boolean>(false);
  const passengerCounts: Record<string, number> = {
    older12: older12 ?? 0,
    middle12_2: middle12_2 ?? 0,
    baby: baby ?? 0,
  };

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
    // if (finall > 9) {
    //   setError(true);
    // } else {
    //   setpassengerNum((e: any) => ({ ...e, total: finall }));
    //   closeHandler();
    // }
  };

  const backHandler = () => {
    if (!selectDestination && !selectOrigin && !selectDate && selectNumber) {
      setSelectNumber(false);
      setStep(0);
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
    <div>
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
      {error && (
        <span className="mr-6 mt-6 block text-sm font-medium text-red-500">
          _ تعداد مسافران نباید بیشتر از 9 باشد
        </span>
      )}

      <button
        onClick={submitHandler}
        className="fixed bottom-5 left-0 w-full rounded-xl bg-blue py-3 font-semibold text-white"
      >
        تایید
      </button>
    </div>
  );
}

export default ChooseNumber;
