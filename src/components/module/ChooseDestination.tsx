"use client";
import { usePathname, useRouter } from "next/navigation";
import Mabda from "../icon/Mabda";
import { use, useEffect, useState } from "react";
import SwichKey from "../icon/SwichKey";
import Location from "../icon/Location";
import { ITravelInfo } from "@/types/componentsProps";
import ChooseOrigin from "./ChooseOrigin";
import ChooseTarget from "./ChooseTarget";
import Clender from "../icon/Clender";
import { IDate } from "@/types/generalType";
import ChooseDate from "./ChooseDate";

function ChooseDestination({ type, way }: ITravelInfo) {
  // استیت مربوط به مبدا
  const [originName, setOriginName] = useState<string>(""); // اسم مبدا
  const [selectOrigin, setSelectOrigin] = useState<boolean>(false); // رفتن برای اتنخاب مبدا
  const [userOrigin, setUserOrigin] = useState<string>(""); // مبدا انتخاب شده توسط کاربر
  // استیت مربوط به مقصد
  const [destinationName, setDestinationName] = useState<string>(""); // اسم مقصد
  const [selectDestination, setSelectDestination] = useState<boolean>(false); // رفتن ب انتخاب مقصد
  const [userDestination, setUserDestination] = useState<string>(""); //مقصد انتخاب شده کاربر
  // استیت مربوط به تقویم
  const [selectDate, setSelectDate] = useState<boolean>(false); //رفتن برا صفحه تقویم
  const [userDate, setUserDate] = useState<IDate>({ go: "", back: "" });

  const [switchValue, setSwitchValue] = useState<boolean>(false); // سنجش کلیک روی دکمه سوییچ
  const [step, setStep] = useState<number>(0); // مراحل خرید بلیط

  const params = usePathname();
  const categoryName = params.split("/").pop();

  const switchHandler = () => {
    setSwitchValue((e) => !e);
    const tempt = userOrigin;
    setUserOrigin(userDestination);
    setUserDestination(tempt);
  };

  useEffect(() => {
    if (categoryName === "airPlane") {
      setOriginName("فرودگاه مبدا");
      setDestinationName("فرودگاه مقصد");
    } else if (categoryName === "hotel") {
      setOriginName("هتل یا شهر مقصد");
    } else if (categoryName === "train") {
      setOriginName("ایستگاه مبدا");
      setDestinationName("ایستگاه مقصد");
    } else if (categoryName === "bus") {
      setOriginName("پایانه مبدا");
      setDestinationName("پایانه مقصد");
    } else if (categoryName === "taxi") {
      setOriginName("ایستگاه مبدا");
      setDestinationName("ایستگاه مقصد");
    }
  }, [categoryName]);

  useEffect(() => {
    if (type === "inside" && userDestination) {
      setUserDestination("");
    } else if (type === "outside" && userOrigin) {
      setUserOrigin("");
    } else if (type === "outside" && userDestination) {
      setUserDestination("");
    } else if (type === "inside" && userOrigin) {
      setUserOrigin("");
    }
  }, [type]);

  return (
    <div className="mx-5 flex flex-col">
      {/* مبدا */}
      <div
        onClick={() => {
          setSelectOrigin(true);
          setStep(1);
        }}
        className="flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400"
      >
        <span>
          <Mabda width={12} height={18} color="currentColor" />
        </span>
        <input
          type="text"
          value={userOrigin}
          readOnly={true}
          placeholder={originName}
          className="bg-transparent text-black focus:outline-none"
        />
      </div>
      {/* کلید سوییچ */}
      <button
        onClick={switchHandler}
        disabled={!userDestination && !userOrigin}
        className={`${switchValue ? "rotate-[270deg]" : "rotate-90"} ml-3 mr-auto inline-block w-max rotate-90 text-blue transition-transform duration-500 ease-in-out disabled:text-gray-400`}
      >
        <SwichKey width={18} height={16} color="currentColor" />
      </button>
      {/* مقصد*/}
      <div
        onClick={() => {
          setSelectDestination(true);
          setStep(2);
        }}
        className="flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400"
      >
        <span>
          <Location width={13} height={18} color="currentColor" />
        </span>
        <input
          type="text"
          value={userDestination}
          readOnly={true}
          placeholder={destinationName}
          className="bg-transparent text-black focus:outline-none"
        />
      </div>
      {/* تقویم */}
      <div className="mt-3 flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400">
        <span>
          <Clender width={15} height={18} color="currentColor" />
        </span>
        <div className="flex items-center">
          <input
            onClick={() => {
              setSelectDate(true);
              setStep(3);
            }}
            type="text"
            value={userDestination}
            readOnly={true}
            placeholder="رفت"
            className="mr-1 w-1/2 bg-transparent text-black focus:outline-none"
          />
          {way === "یک طرفه" ? (
            <span>{`برگشت (اختیاری)`}</span>
          ) : (
            <input
              onClick={() => {
                setSelectDate(true);
                setStep(3);
              }}
              type="text"
              value={userDestination}
              readOnly={true}
              placeholder="برگشت"
              className="w-1/2 bg-transparent text-black focus:outline-none"
            />
          )}
        </div>
      </div>

      {/* --------- صفحات ----------- */}
      {/*  صفحه انتخاب مبدا*/}
      <div
        className={`${
          selectOrigin ? "translate-x-0" : "translate-x-full"
        } absolute right-0 top-0 z-30 h-screen w-screen bg-white transition-transform duration-700 ease-in-out`}
      >
        {step === 1 && selectOrigin ? (
          <ChooseOrigin
            originName={originName}
            setUserOrigin={setUserOrigin}
            setSelectOrigin={setSelectOrigin}
            type={type}
            step={step}
            setStep={setStep}
          />
        ) : null}
      </div>
      {/* صفحه انتخاب مقصد */}
      <div
        className={`${
          selectDestination || step === 2 ? "translate-x-0" : "translate-x-full"
        } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out`}
      >
        {step === 2 || selectDestination ? (
          <ChooseTarget
            destinationName={destinationName}
            setUserDestination={setUserDestination}
            setSelectDestination={setSelectDestination}
            setSelectOrigin={setSelectOrigin}
            type={type}
            step={step}
            setStep={setStep}
          />
        ) : null}
      </div>
      {/* صفخه انتخاب تاریخ */}
      <div
        className={`${
          selectDate || step === 3 ? "translate-x-0" : "translate-x-full"
        } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out`}
      >
        {step === 3 || selectDate ? (
          <ChooseDate
            go={userDate.go}
            back={userDate.back}
            setUserDate={setUserDate}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ChooseDestination;

//   {/* انتخاب مقصد*/}
//   <div
//   className={`${
//     selectDestination ? "translate-x-0" : "translate-x-full"
//   } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out`}
// >
//   {step === 2 || selectDestination ? (
//     <ChooseOrigin
//       destinationName={destinationName}
//       setUserDestination={setUserDestination}
//       setSelectDestination={setSelectDestination}
//       step={step}
//       setStep={setStep}
//     />
//   ) : null}
// </div>
