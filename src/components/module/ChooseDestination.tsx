"use client";
import { usePathname } from "next/navigation";
import Mabda from "../icon/Mabda";
import { useEffect, useState } from "react";
import SwichKey from "../icon/SwichKey";
import Location from "../icon/Location";
import { ITravelInfo } from "@/types/componentsProps";
import ChooseOrigin from "./ChooseOrigin";
import ChooseTarget from "./ChooseTarget";

function ChooseDestination({ type, way }: ITravelInfo) {
  console.log(type, way);
  const [originName, setOriginName] = useState<string>("");
  const [selectOrigin, setSelectOrigin] = useState<boolean>(false);
  const [destinationName, setDestinationName] = useState<string>("");
  const [selectDestination, setSelectDestination] = useState<boolean>(false);
  const [userOrigin, setUserOrigin] = useState<string>("");
  const [userDestination, setUserDestination] = useState<string>("");
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
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
      {/* مقصد */}
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

      <div
        className={`${
          selectOrigin ? "translate-x-0" : "translate-x-full"
        } absolute right-0 top-0 z-30 h-screen w-screen bg-white transition-transform duration-700 ease-in-out`}
      >
        {step === 1 && selectOrigin ? <ChooseOrigin /> : null}
        {step === 2 && selectDestination ? <ChooseTarget /> : null}
      </div>
    </div>
  );
}

export default ChooseDestination;
