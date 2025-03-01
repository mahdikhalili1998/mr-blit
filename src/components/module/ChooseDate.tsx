"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import DateObject from "react-date-object";
import shamsi from "react-date-object/calendars/persian";
import shamsiFa from "react-date-object/locales/persian_fa";
import miladi from "react-date-object/calendars/gregorian";
import miladiFa from "react-date-object/locales/gregorian_fa";
import BackArrow from "../icon/BackArrow";
import Cancle from "../icon/Cancle";
import { Calendar } from "react-multi-date-picker";
import Plus from "../icon/Plus";
import { IOriginPage } from "@/types/componentsProps";
import { usePathname } from "next/navigation";

const ChooseDate: FC<IOriginPage> = ({
  go,
  way,
  back,
  setUserDate,
  setStep,
  dateName,
  setSelectDate,
  setSelectDestination,
  setSelectOrigin,
  selectDestination,
  selectOrigin,
  selectDate,
  setSelectedType,
  setSelectNumber,
}) => {
  const [selectedGo, setSelectedGo] = useState(go);
  const [selectedBack, setSelectedBack] = useState<string | null>(back || null);
  const [calendar, setCalendar] = useState(shamsi); // پیش‌فرض شمسی
  const [locale, setLocale] = useState(shamsiFa); // زبان فارسی در شمسی
  const today = new DateObject({ calendar: calendar, locale: locale });
  const formattedToday = today.format("DD MMMM");
  const [minBackDate, setMinBackDate] = useState<DateObject | null>(null); // تاریخ حداقل برای تقویم برگشت
  const [wayValidation, setWayValidation] = useState<boolean>(false);
  const weekDays = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعه"];
  const sectionRef = useRef<HTMLDivElement>(null);

  const params = usePathname();
  const categoryName = params.split("/").pop();

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //تغیر شمسی /میلادی
  const changeCalenderMood = () => {
    if (calendar === shamsi) {
      setCalendar(miladi);
      setLocale(miladiFa);
    } else {
      setCalendar(shamsi);
      setLocale(shamsiFa);
    }
  };

  useEffect(() => {
    if (!go) {
      setUserDate((userData: any) => ({ ...userData, go: formattedToday }));
    }
  }, []);

  //گرفتن تاریخ رفت
  const handleGoDate = (date: DateObject) => {
    const formattedDate = date.format("DD MMMM");
    setSelectedGo(formattedDate);
    setMinBackDate(date); // تاریخ رفت را به عنوان تاریخ حداقل برای برگشت ذخیره می‌کنیم
    setUserDate({ go: formattedDate, back: selectedBack });
  };

  //گرفتن تاریخ  برگشت
  const handleBackDate = (date: DateObject) => {
    const formattedDate = date.format("DD MMMM");
    setSelectedBack(formattedDate);
    setUserDate({ go: selectedGo, back: formattedDate });
  };

  //برای بررسی اینکه تاریخ برگشت جلو باشد
  useEffect(() => {
    if (selectedGo && selectedBack) {
      const goDate = new DateObject(selectedGo);
      const backDate = new DateObject(selectedBack);

      // بررسی اینکه تاریخ برگشت قبل از تاریخ رفت نباشد
      if (backDate < goDate) {
        console.log("تاریخ برگشت نمی‌تواند قبل از تاریخ رفت باشد.");
        // می‌توانید یک پیام خطا یا تنظیمات دیگری را اضافه کنید
      }
    }
  }, [selectedGo, selectedBack]);

  const backHandler = () => {
    if (categoryName === "hotel") {
      setSelectOrigin(true);
      setStep(1);
    }
    // در صورتی کهکاربر بار اول باکس مربوطه را باز کند
    if (!selectDestination && !selectOrigin && selectDate) {
      setSelectDate(false);
      setStep(0);
    }
    // در صورتی ک کاربر از مبدا مرحله به مرحله پیش امده باشد
    if (selectDestination && selectDate && selectOrigin) {
      setStep(2);
      setSelectDate(false);
      setSelectDestination(true);
    }
    if (selectDestination && selectDate) {
      setStep(2);
      setSelectDate(false);
      setSelectDestination(true);
    }
  };

  const closeHandler = () => {
    setSelectDestination(false);
    setSelectDate(false);
    setSelectOrigin(false);
    setStep(0);
  };

  const submitHandler = () => {
    if (way === "رفت و برگشت" && !back) {
      setWayValidation(true);
    }
    if (back) {
      setSelectedType((e: any) => ({ ...e, way: "رفت و برگشت" }));
    }
    if (go || (go && back)) {
      setStep(4);
      setSelectNumber(true);
    }
  };

  return (
    <div className=" bg-white pb-40">
      {/* هدر بالا */}
      <div className="flex items-center justify-around bg-blue px-4 py-6 text-white">
        <span onClick={backHandler} className="p-2">
          <BackArrow width={19} height={22} color="currentColor" />
        </span>
        <h1 className="text-xl font-semibold">{`انتخاب تاریخ ${dateName}`}</h1>
        <span onClick={closeHandler} className="p-2">
          <Cancle width={14} height={22} color="currentColor" />
        </span>
      </div>
      {/* نمایش تارریخ های انتخاب شده */}
      <ul className="mt-5 flex w-screen items-center justify-around overflow-x-hidden">
        {/* رفت */}
        <li className="mx-3 flex w-1/2 items-center justify-center rounded-lg bg-gray-100 px-3 py-3 font-semibold">
          {!go ? formattedToday : go}
        </li>
        {/* برگشت */}
        <li
          onClick={handleScroll}
          className={` ${wayValidation ? "border-2 border-solid border-red-500" : "border-none"} mx-3 flex w-1/2 items-center gap-2 rounded-lg bg-gray-100 px-3 py-3`}
        >
          <span className={`${back ? "hidden" : "block"} text-slate-400`}>
            <Plus width={15} height={18} color="currentColor" />
          </span>
          <input
            type="text"
            value={back || ""}
            readOnly
            placeholder={way === "یک طرفه" ? "برگشت (اختیاری)" : "برگشت"}
            className={`w-28 bg-transparent text-center font-semibold placeholder:text-sm placeholder:text-slate-400 focus:outline-none`}
          />
        </li>
      </ul>
      {/* دکمه تایید نهایی  و تغیر مود تقویم*/}
      <div className="mx-2 mt-5 flex items-center justify-around">
        <button
          onClick={submitHandler}
          className="mx-6 mt-5 w-1/2 rounded-md bg-blue px-4 py-2 font-semibold text-white"
        >
          تایید
        </button>
        <button
          onClick={changeCalenderMood}
          className="mx-6 mt-5 w-1/2 rounded-md border-2 border-solid border-blue bg-white px-3 py-2 font-semibold text-blue"
        >
          {calendar === shamsi ? "تقویم میلادی" : " تقویم شمسی"}
        </button>
      </div>

      {/* تقویم */}
      <div className="mt-6 space-y-14 pb-20">
        <div className="mt-4 flex w-full items-center px-4">
          <h2 className="font-medium">تاریخ رفت</h2>
          <div className="mx-4 mt-[3px] flex-1 border-t-[1px] border-solid border-slate-200"></div>
        </div>
        <div className="mx-auto w-max">
          <Calendar
            calendar={calendar}
            weekDays={weekDays}
            locale={locale}
            minDate={new Date()}
            onChange={handleGoDate}
            className="calendar"
          />
        </div>
        <div className="flex w-full items-center px-4">
          <h2 className="font-medium">تاریخ برگشت</h2>
          <div className="mx-4 mt-[3px] flex-1 border-t-[1px] border-solid border-slate-200"></div>
        </div>
        <div ref={sectionRef} className="mx-auto w-max">
          <Calendar
            calendar={calendar}
            weekDays={weekDays}
            locale={locale}
            minDate={minBackDate || new Date()}
            onChange={handleBackDate}
            className="calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseDate;
