"use client";
import { useRef, useState } from "react";
import { Calendar } from "react-multi-date-picker";
import DateObject from "react-date-object";
import shamsi from "react-date-object/calendars/persian";
import shamsiFa from "react-date-object/locales/persian_fa";
import miladi from "react-date-object/calendars/gregorian";
import miladiFa from "react-date-object/locales/gregorian_fa";
import { IOriginPage } from "@/types/componentsProps";

function DatePage({ go, setUserDate, back }: IOriginPage) {
  const [calendar, setCalendar] = useState(shamsi); // پیش‌فرض شمسی
  const [locale, setLocale] = useState(shamsiFa); // زبان فارسی در شمسی
  const [selectedBack, setSelectedBack] = useState<string | null>(back || null);
  const [selectedGo, setSelectedGo] = useState(go);
  const [minBackDate, setMinBackDate] = useState<DateObject | null>(null); // تاریخ حداقل برای تقویم برگشت

  const weekDays = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعه"];
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
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
  );
}

export default DatePage;
