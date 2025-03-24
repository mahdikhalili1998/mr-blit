"use client";
import { usePathname } from "next/navigation";
import Mabda from "../icon/Mabda";
import { useEffect, useRef, useState } from "react";
import SwichKey from "../icon/SwichKey";
import Location from "../icon/Location";
import { ITravelInfo } from "@/types/componentsProps";
import ChooseOrigin from "./ChooseOrigin";
import ChooseTarget from "./ChooseTarget";
import Clender from "../icon/Clender";
import { IDate, IOpenBox, IPassengerNum } from "@/types/generalType";
import ChooseDate from "./ChooseDate";
import DownArrow from "../icon/DownArrow";
import ChooseNumber from "./ChooseNumber";
import OriginPage from "../desktop/OriginPage";
import TargetPage from "../desktop/TargetPage";

function ChooseDestination({
  type,
  way,
  setSelectedType,
  setUserDestination,
  setUserOrigin,
  userDestination,
  userOrigin,
}: ITravelInfo) {
  // استیت مربوط به باز کردن باکس در حالت دسکتاپ
  const [openBox, setOpenBox] = useState<IOpenBox>({
    isOpen: false,
    boxName: "",
  });
  const { isOpen, boxName } = openBox;

  // مربوط به باز و بسته شدن باکس های دستکتاپ وقتی بیرون محدوده باکس کلیک می‌شود
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpenBox({ isOpen: false, boxName: "" });
      }
    };
    if (isOpen && boxName === "origin") {
      document.addEventListener("mousedown", handleClickOutside);
    } else if (isOpen && boxName === "target") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, boxName]);

  // استیت مربوط به مبدا
  const [originName, setOriginName] = useState<string>(""); // اسم مبدا
  const [selectOrigin, setSelectOrigin] = useState<boolean>(false); // رفتن برای اتنخاب مبدا

  // استیت مربوط به مقصد
  const [destinationName, setDestinationName] = useState<string>(""); // اسم مقصد
  const [selectDestination, setSelectDestination] = useState<boolean>(false); // رفتن ب انتخاب مقصد

  // استیت مربوط به تقویم
  const [selectDate, setSelectDate] = useState<boolean>(false); //رفتن برا صفحه تقویم
  const [userDate, setUserDate] = useState<IDate>({ go: "", back: "" });
  const [dateName, setDateName] = useState<string>("");
  //استیت مربوط به انتخاب مسافر
  const [selectNumber, setSelectNumber] = useState<boolean>(false);
  const [passengerNum, setpassengerNum] = useState<IPassengerNum>({
    older12: 1,
    middle12_2: 0,
    baby: 0,
  });
  const { older12, middle12_2, baby } = passengerNum;
  const [sum, setSum] = useState<number>(1); //تعداد نهایی مسافرین
  const calculateNum = () => {
    setSum(older12 + middle12_2 + baby);
  };

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

  //  مربوط به اسکرول عمودی صفحات absolute
  useEffect(() => {
    const handleScrollLock = () => {
      if (window.innerWidth < 1024) {
        if (selectOrigin || selectDestination) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      } else {
        document.body.style.overflow = "auto"; // اطمینان از اینکه اسکرول در دسکتاپ فعال می‌ماند
      }
    };

    handleScrollLock(); // اجرا هنگام اولین رندر

    window.addEventListener("resize", handleScrollLock); // بررسی هنگام تغییر اندازه صفحه

    return () => {
      window.removeEventListener("resize", handleScrollLock);
      document.body.style.overflow = "auto"; // اطمینان از ریست هنگام آنمونت شدن
    };
  }, [selectOrigin, selectDestination]);

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

  // مربوط به تقویم
  const showDateHandler = (name: string) => {
    setSelectDate(true);
    setDateName(name);
    setStep(3);
  };

  return (
    <div className="mx-5">
      <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:gap-2">
        {/* مبدا */}
        <div
          onClick={() => {
            setSelectOrigin(true);
            setStep(1);
            setOpenBox({ isOpen: true, boxName: "origin" });
          }}
          className="flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400 lg:relative lg:w-1/4 lg:py-3"
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
          {/* صفحه انتخاب مبدا برای دسکتاپ */}
          {isOpen && boxName === "origin" ? (
            <div
              ref={boxRef}
              className="absolute right-0 top-12 z-20 hidden w-full lg:block"
            >
              <OriginPage
                setUserOrigin={setUserOrigin}
                type={type}
                originName={originName}
              />
            </div>
          ) : null}
        </div>
        {/* کلید سوییچ */}
        {categoryName === "hotel" ? null : (
          <button
            onClick={switchHandler}
            disabled={!userDestination && !userOrigin}
            className={`${switchValue ? "rotate-[270deg] lg:rotate-[360deg]" : "rotate-90 lg:rotate-[180deg]"} ml-3 mr-auto inline-block w-max rotate-90 text-blue transition-transform duration-500 ease-in-out disabled:text-gray-400 lg:ml-0 lg:mr-0 lg:px-[2px]`}
          >
            <SwichKey width={18} height={16} color="currentColor" />
          </button>
        )}
        {/* مقصد*/}
        {categoryName === "hotel" ? null : (
          <div
            onClick={() => {
              setSelectDestination(true);
              setStep(2);
              setOpenBox({ isOpen: true, boxName: "target" });
            }}
            className="relative flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400 lg:w-1/4"
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
            {/* صفحه انتخاب مقصد برای دسکتاپ */}
            {isOpen && boxName === "target" ? (
              <div
                ref={boxRef}
                className="absolute right-0 top-12 z-20 hidden w-full lg:block"
              >
                <TargetPage
                  setUserDestination={setUserDestination}
                  type={type}
                  destinationName={destinationName}
                />
              </div>
            ) : null}
          </div>
        )}
        {/* تقویم */}
        <div className="mt-3 flex items-center gap-4 rounded-lg bg-slate-200 p-3 text-gray-400 lg:mt-0 lg:w-1/4">
          <span>
            <Clender width={15} height={18} color="currentColor" />
          </span>
          <div className="flex items-center">
            <input
              onClick={() => showDateHandler("رفت")}
              type="text"
              value={userDate.go}
              readOnly={true}
              placeholder="رفت"
              className="mr-1 w-1/2 bg-transparent text-black focus:outline-none"
            />
            {way === "یک طرفه" ? (
              <span
                onClick={() => showDateHandler("برگشت")}
              >{`برگشت(اختیاری)`}</span>
            ) : (
              <input
                onClick={() => showDateHandler("برگشت")}
                type="text"
                value={userDate.back}
                readOnly={true}
                placeholder="برگشت"
                className="w-1/2 bg-transparent text-black focus:outline-none"
              />
            )}
          </div>
        </div>
        {/* تعداد مسافر */}
        {categoryName === "hotel" ? null : (
          <div
            onClick={() => {
              setSelectNumber(true);
              setStep(4);
            }}
            className="mt-3 flex items-center justify-between rounded-lg bg-slate-200 p-3 px-4 font-semibold text-black lg:mt-0 lg:w-1/4 lg:gap-1"
          >
            <div className="flex items-center">
              <input
                type="text"
                value={sum}
                className="w-5 bg-transparent focus:outline-none"
                readOnly
              />
              <span className="font-medium">مسافر</span>
            </div>
            <span>
              <DownArrow width={16} height={22} color="currentColor" />
            </span>
          </div>
        )}

        {/* --------- صفحات ----------- */}
        {/*  صفحه انتخاب مبدا*/}
        <div
          className={`${
            selectOrigin ? "translate-x-0" : "translate-x-full"
          } absolute right-0 top-0 z-30 h-screen w-screen bg-white transition-transform duration-700 ease-in-out lg:hidden`}
        >
          {step === 1 || selectOrigin ? (
            <ChooseOrigin
              setSelectDate={setSelectDate}
              originName={originName}
              setUserOrigin={setUserOrigin}
              selectOrigin={selectOrigin}
              setSelectOrigin={setSelectOrigin}
              type={type}
              step={step}
              selectDestination={selectDestination}
              setSelectDestination={setSelectDestination}
              setStep={setStep}
            />
          ) : null}
        </div>
        {/* صفحه انتخاب مقصد */}
        {categoryName === "hotel" ? null : (
          <div
            className={`${
              selectDestination || step === 2
                ? "translate-x-0"
                : "translate-x-full"
            } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out lg:hidden`}
          >
            {step === 2 || selectDestination ? (
              <ChooseTarget
                destinationName={destinationName}
                setUserDestination={setUserDestination}
                selectDestination={selectDestination}
                setSelectDestination={setSelectDestination}
                selectOrigin={selectOrigin}
                setSelectOrigin={setSelectOrigin}
                type={type}
                step={step}
                setStep={setStep}
                setSelectDate={setSelectDate}
              />
            ) : null}
          </div>
        )}
        {/* صفخه انتخاب تاریخ */}
        <div
          className={`${
            selectDate || step === 3 ? "translate-x-0" : "translate-x-full"
          } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out lg:hidden`}
        >
          {step === 3 || selectDate ? (
            <ChooseDate
              setSelectDate={setSelectDate}
              dateName={dateName}
              setSelectDestination={setSelectDestination}
              setSelectOrigin={setSelectOrigin}
              step={step}
              setStep={setStep}
              go={userDate.go}
              back={userDate.back}
              setUserDate={setUserDate}
              selectDestination={selectDestination}
              selectOrigin={selectOrigin}
              selectDate={selectDate}
              way={way}
              setSelectedType={setSelectedType}
              setSelectNumber={setSelectNumber}
            />
          ) : null}
        </div>
        {/* صفحه انتخاب مسافر */}
        <div
          className={`${
            selectNumber || step === 4 ? "translate-x-0" : "translate-x-full"
          } absolute right-0 top-0 z-40 h-screen w-screen bg-white transition-transform duration-700 ease-in-out lg:hidden`}
        >
          {step === 4 || selectNumber ? (
            <ChooseNumber
              setSelectDate={setSelectDate}
              setSelectDestination={setSelectDestination}
              setSelectOrigin={setSelectOrigin}
              setSelectNumber={setSelectNumber}
              middle12_2={middle12_2}
              baby={baby}
              older12={older12}
              setStep={setStep}
              selectDate={selectDate}
              selectDestination={selectDestination}
              selectOrigin={selectOrigin}
              selectNumber={selectNumber}
              setpassengerNum={setpassengerNum}
              calculateNum={calculateNum}
              sum={sum}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ChooseDestination;
