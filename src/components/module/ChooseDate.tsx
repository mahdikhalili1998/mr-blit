"use client";
import React, { FC, useEffect, useState } from "react";
import DateObject from "react-date-object";
import shamsi from "react-date-object/calendars/persian";
import shamsiFa from "react-date-object/locales/persian_fa";
import miladi from "react-date-object/calendars/gregorian";
import miladiFa from "react-date-object/locales/gregorian_fa";
import BackArrow from "../icon/BackArrow";
import Cancle from "../icon/Cancle";
import { Calendar } from "react-multi-date-picker";
import Plus from "../icon/Plus";
import { IChooseDate } from "@/types/componentsProps";

const ChooseDate: FC<IChooseDate> = ({ go, back, setUserDate }) => {
  const [selectedGo, setSelectedGo] = useState(go);
  const [selectedBack, setSelectedBack] = useState<string | null>(back);
  const [calendar, setCalendar] = useState(shamsi); // پیش‌فرض شمسی
  const [locale, setLocale] = useState(shamsiFa); // زبان فارسی در شمسی
  const today = new DateObject({ calendar: calendar, locale: locale });
  const formattedToday = today.format("DD MMMM");
  const [minBackDate, setMinBackDate] = useState<DateObject | null>(null); // تاریخ حداقل برای تقویم برگشت

  const weekDays = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعه"];
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

  return (
    <div>
      {/* هدر بالا */}
      <div className="flex items-center justify-around bg-blue py-5 text-white">
        <span className="p-2">
          <BackArrow width={19} height={22} color="currentColor" />
        </span>
        <h1 className="text-xl font-semibold">انتخاب تاریخ رفت</h1>
        <span className="p-2">
          <Cancle width={14} height={22} color="currentColor" />
        </span>
      </div>
      {/* نمایش تارریخ های انتخاب شده */}
      <ul className="mt-5 flex w-screen items-center justify-around overflow-x-hidden">
        <li className="mx-3 flex w-1/2 items-center justify-center rounded-lg bg-gray-100 px-3 py-3 font-semibold">
          {!go ? formattedToday : go}
        </li>
        <li className="mx-3 flex w-1/2 items-center gap-2 rounded-lg bg-gray-100 px-3 py-3">
          <span className={`${back ? "hidden" : "block"} text-slate-400`}>
            <Plus width={15} height={18} color="currentColor" />
          </span>
          <input
            type="text"
            value={selectedBack || ""}
            readOnly
            placeholder={`برگشت (اختیاری)`}
            className="w-28 bg-transparent text-center font-semibold placeholder:text-sm placeholder:text-slate-400 focus:outline-none"
          />
        </li>
      </ul>
      {/* تقویم */}
      <div className="mx-auto mt-8 w-max">
        <h2>تاریخ رفت</h2>
        <Calendar
          calendar={calendar}
          weekDays={weekDays}
          locale={locale}
          minDate={new Date()}
          onChange={handleGoDate}
        />
        <h2>تاریخ برگشت</h2>
        <Calendar
          calendar={calendar}
          weekDays={weekDays}
          locale={locale}
          minDate={minBackDate || new Date()}
          onChange={handleBackDate}
        />
        <button onClick={changeCalenderMood} className="bg-blue p-3">
          {calendar === shamsi ? "تقویم میلادی" : " تقویم شمسی"}
        </button>
      </div>
    </div>
  );
};

export default ChooseDate;
