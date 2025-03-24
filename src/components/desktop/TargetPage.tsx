"use client";
import React, { useEffect, useState } from "react";
import Search from "../icon/Search";
import Cancle from "../icon/Cancle";
import { IOriginPage, ISearch } from "@/types/componentsProps";
import { usePathname } from "next/navigation";
import {
  airportNameFa,
  airportNameEn,
  hotelName,
  trainName,
  busNameFa,
  busNameEn,
  taxiName,
} from "../../constant/AirportName";
import LocationStroke from "../icon/LocationStroke";

function TargetPage({
  destinationName,
  type,
  setUserDestination,
}: IOriginPage) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredLocations, setFilteredLocations] = useState<ISearch[]>([]);
  const [country, setCountry] = useState<ISearch[]>([]);
  const params = usePathname();
  const categoryName = params.split("/").pop();

  // یوزافکت اطلاعات نام اییستگاها
  useEffect(() => {
    if (categoryName === "taxi") {
      setCountry(taxiName);
    }
    if (categoryName === "bus" && type === "inside") {
      setCountry(busNameFa);
    } else if (categoryName === "bus" && type === "outside") {
      setCountry(busNameEn);
    }
    if (categoryName === "hotel") {
      setCountry(hotelName);
    }
    if (categoryName === "train") {
      setCountry(trainName);
    }

    if (categoryName === "airPlane" && type === "inside") {
      setCountry(airportNameFa);
    } else if (categoryName === "airPlane" && type === "outside") {
      setCountry(airportNameEn);
    }
  }, [categoryName]);

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
  const originValueHandler = (location: string, name: string) => {
    setUserDestination(`${location}/${name}`);
  };

  return (
    <div className="max-h-[200px] overflow-y-auto rounded-md border-2 border-solid border-blue bg-white pb-8 pt-1">
      {/* باکس سرچ */}
      <div className="sticky top-0 mx-1 flex items-center gap-2 rounded-md bg-[#e8f1fa] px-2 py-4 text-slate-400">
        {searchValue ? (
          <span
            onClick={() => setSearchValue("")}
            className="mr-auto text-blue"
          >
            <Cancle width={14} height={22} color="currentColor" />
          </span>
        ) : (
          <span>
            <Search width={18} height={18} color="currentColor" />
          </span>
        )}

        <input
          type="text"
          value={searchValue}
          placeholder={`جستجوی ${destinationName}`}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-transparent text-black placeholder:text-sm focus:outline-none"
        />
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
          ? filteredLocations.map((item, index) => (
              <div
                key={index}
                onClick={() => originValueHandler(item.location, item.name)}
                className="mt-5 flex items-center gap-2 space-y-2 pr-5 text-15"
              >
                <span className="text-blue">
                  <LocationStroke width={14} height={18} color="currentColor" />
                </span>
                <span className="font-medium text-black">{item.location}</span>
                <span className="text-xs text-slate-400">{item.name}</span>
              </div>
            ))
          : null}
        {/* اگر سرچ نتیجه نداشت */}
        {searchValue && filteredLocations.length === 0 ? (
          <p className="p-5 font-semibold text-black">نتیجه ای یافت نشد</p>
        ) : null}
        {/* اصلا سرچ نکرده */}
        {!searchValue &&
          country.map((item, index) => (
            <div
              key={index}
              onClick={() => originValueHandler(item.location, item.name)}
              className="mt-5 flex items-center gap-2 space-y-2 pr-5 text-15"
            >
              <span className="mt-1 text-blue">
                <LocationStroke width={14} height={18} color="currentColor" />
              </span>
              <span className="font-medium text-black">{item.location}</span>
              <span className="text-xs text-slate-400">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TargetPage;
