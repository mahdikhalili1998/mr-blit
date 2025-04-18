"use client";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-multi-date-picker";
import DateObject from "react-date-object";
import shamsi from "react-date-object/calendars/persian";
import shamsiFa from "react-date-object/locales/persian_fa";
import miladi from "react-date-object/calendars/gregorian";
import miladiFa from "react-date-object/locales/gregorian_fa";
import { IOriginPage } from "@/types/componentsProps";

function DatePage({
  go,
  setUserDate,
  back,
  way,
  setSelectedType,
}: IOriginPage) {
  const [nextLevel, setNextLevel] = useState<number>(0);
  const [calendar, setCalendar] = useState(shamsi); // پیش‌فرض شمسی
  const [locale, setLocale] = useState(shamsiFa); // زبان فارسی در شمسی
  const [selectedBack, setSelectedBack] = useState<string | null>(back || null);
  const [selectedGo, setSelectedGo] = useState(go);
  const [minBackDate, setMinBackDate] = useState<DateObject | null>(null); // تاریخ حداقل برای تقویم برگشت
  const [wayValidation, setWayValidation] = useState<boolean>(false);
  const today = new DateObject({ calendar: calendar, locale: locale });
  const formattedToday = today.format("DD MMMM");
  const weekDays = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعه"];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!go) {
      setUserDate((userData: any) => ({ ...userData, go: formattedToday }));
    }

    // اسکرول خودکار صفحه به بالا
    if (window.innerWidth < 1024) {
      window.scrollTo(0, 0);
    }
  }, []);

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

  // دکمه ی رفتن برای تاریخ برگشت
  const dateLevelHandler = () => {
    if (nextLevel === 0) {
      setNextLevel(1);
    } else if (nextLevel === 1) {
      setNextLevel(0);
    }
  };

  const closeHandler = () => {
    if (way === "رفت و برگشت" && !back) {
      setWayValidation(true);
    }
    if (back) {
      setSelectedType((e: any) => ({ ...e, way: "رفت و برگشت" }));
    }
  };

  return (
    <div className="flex w-max flex-col items-center justify-center gap-6 rounded-md bg-transparent bg-white px-5 py-3 shadow-lg shadow-gray-400">
      {/* تیتر */}
      <div className="mt-2 flex w-full items-end gap-2">
        <span className="w-1/4 border-t-[1px] border-solid border-blue pb-2"></span>
        <h2 className="w-3/4 text-lg font-semibold text-blue">
          {nextLevel === 0 ? "انتخاب تاریخ رفت" : "انتخاب تاریخ برگشت"}
        </h2>
      </div>
      {/* تاریخ انتخاب شده و دکمه تغیر مود تقویم */}
      <div className="flex justify-between gap-4">
        <ul className="flex items-center justify-around overflow-x-hidden">
          {/* رفت */}
          <li
            className={`${nextLevel === 1 ? "hidden" : "block"} justify-center rounded-lg bg-gray-100 px-3 py-2 font-semibold`}
          >
            {!go ? formattedToday : go}
          </li>
          {/* برگشت */}
          <li
            className={` ${wayValidation ? "border-2 border-solid border-red-500" : "border-none"} ${nextLevel === 0 ? "hidden" : "block"} rounded-lg bg-gray-100 px-3 py-2`}
          >
            {/* <span className={`${back ? "hidden" : "block"} text-slate-400`}>
              <Plus width={15} height={18} color="currentColor" />
            </span> */}
            <input
              type="text"
              value={back || ""}
              readOnly
              placeholder={way === "یک طرفه" ? "برگشت (اختیاری)" : "برگشت"}
              className={`w-28 bg-transparent text-center font-semibold placeholder:text-sm placeholder:text-slate-400 focus:outline-none`}
            />
          </li>
        </ul>
        {/* دکمه تغیر مود تقویم*/}
        <button
          onClick={changeCalenderMood}
          className={`${nextLevel === 0 ? "block" : "hidden"} rounded-md bg-blue px-2 py-2 font-semibold text-white`}
        >
          {calendar === shamsi ? "تقویم میلادی" : " تقویم شمسی"}
        </button>
      </div>
      {/* تاریح رفت */}
      <div className={`${nextLevel === 1 ? "hidden" : "block"} w-max`}>
        <Calendar
          calendar={calendar}
          weekDays={weekDays}
          locale={locale}
          minDate={new Date()}
          onChange={handleGoDate}
          className="calendarDesktop"
        />
      </div>
      {/* تاریخ برگشت */}
      <div
        ref={sectionRef}
        className={`${nextLevel === 0 ? "hidden" : "block"} mx-auto w-max`}
      >
        <Calendar
          calendar={calendar}
          weekDays={weekDays}
          locale={locale}
          minDate={minBackDate || new Date()}
          onChange={handleBackDate}
          className="calendarDesktop"
        />
      </div>
      {/* دکمه ها */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dateLevelHandler()}
          className={`${nextLevel === 1 ? "bg-red-500" : "bg-blue"} rounded-md px-3 py-1 font-medium text-white`}
        >
          {nextLevel === 0 ? "تایید تاریخ رفت" : "اصلاح تاریخ رفت"}
        </button>
        <button
          onClick={() => closeHandler()}
          className={`${nextLevel === 0 ? "hidden" : "inline-block"} rounded-md bg-blue px-3 py-1 font-medium text-white`}
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default DatePage;
