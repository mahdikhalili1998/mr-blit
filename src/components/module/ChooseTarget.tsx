"use client";
import { IOriginPage, ISearch } from "@/types/componentsProps";
import BackArrow from "../icon/BackArrow";
import Cancle from "../icon/Cancle";
import Search from "../icon/Search";
import { useEffect, useState } from "react";
import { airportNameFa, airportNameEn } from "../../constant/AirportName";
import LocationStroke from "../icon/LocationStroke";

function ChooseTarget({
  type,
  step,
  setStep,
  destinationName,
  setUserDestination,
  setSelectDestination,
  setSelectOrigin,
}: IOriginPage) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredLocations, setFilteredLocations] = useState<ISearch[]>([]);
  const [country, setCountry] = useState<ISearch[]>([]);

  useEffect(() => {
    if (type === "inside") {
      setCountry(airportNameFa);
    } else if (type === "outside") {
      setCountry(airportNameEn);
    }
  }, []);

  useEffect(() => {
    filterLocation();
  }, [searchValue]);

  const filterLocation = () => {
    const result = country.filter((item) => {
      return (
        item.location.includes(searchValue) || item.name.includes(searchValue)
      );
    });
    setFilteredLocations(result);
  };

  const backHandler = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const closeHandler = () => {
    setSelectDestination(false);
    setSelectOrigin(false);
    setStep(0);
  };

  const originValueHandler = (location: string) => {
    setUserDestination(location);
    closeHandler();
  };

  return (
    <div>
      {/* هدر بالا */}
      <div className="bg-blue pb-4">
        <div className="mb-1 flex items-center justify-between p-6 text-white">
          <span onClick={backHandler}>
            <BackArrow width={19} height={22} color="currentColor" />
          </span>
          <h1 className="text-lg font-extrabold">{`انتخاب ${destinationName}`}</h1>
          <span onClick={closeHandler}>
            <Cancle width={14} height={22} color="currentColor" />
          </span>
        </div>
        {/* باکس سرچ */}
        <div className="mx-3 flex items-center gap-3 rounded-md bg-[#e8f1fa] px-3 py-4 text-slate-400">
          <span>
            <Search width={18} height={18} color="currentColor" />
          </span>
          <input
            type="text"
            value={searchValue}
            placeholder={`جستجوی ${destinationName}`}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent text-black placeholder:text-sm focus:outline-none"
          />
          {searchValue ? (
            <span
              onClick={() => setSearchValue("")}
              className="mr-auto text-blue"
            >
              <Cancle width={14} height={22} color="currentColor" />
            </span>
          ) : null}
        </div>
      </div>
      {/* شهرهای پر تردد */}
      <div className="mt-4 flex w-full items-center px-4">
        <span className="px-1 pl-2 text-15 font-medium text-black">
          {searchValue && filteredLocations.length > 0
            ? "نتایج  جستجو "
            : "   شهرهای پر تردد"}
        </span>
        <div className="flex-1 border-t-[1px] border-solid border-slate-200"></div>
      </div>
      {/* لیست فرودگاها */}
      <div>
        {/* //اگر سرچ نتیجه داشت */}
        {searchValue && filteredLocations.length > 0
          ? filteredLocations.map((item) => (
              <div
                key={item.name}
                onClick={() => originValueHandler(item.location)}
                className="mt-5 flex items-center gap-3 space-y-2 pr-5 text-15"
              >
                <span className="text-blue">
                  <LocationStroke width={14} height={18} color="currentColor" />
                </span>
                <span className="font-medium text-black">{item.location}</span>
                <span className="text-slate-400">{item.name}</span>
              </div>
            ))
          : null}
        {/* اگر سرچ نتیجه نداشت */}
        {searchValue && filteredLocations.length === 0 ? (
          <p className="p-5 font-semibold text-black">نتیجه ای یافت نشد</p>
        ) : null}
        {/* اصلا سرچ نکرده */}
        {!searchValue &&
          country.map((item) => (
            <div
              key={item.name}
              onClick={() => originValueHandler(item.location)}
              className="mt-5 flex items-center gap-3 space-y-2 pr-5 text-15"
            >
              <span className="text-blue">
                <LocationStroke width={14} height={18} color="currentColor" />
              </span>
              <span className="font-medium text-black">{item.location}</span>
              <span className="text-slate-400">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChooseTarget;
