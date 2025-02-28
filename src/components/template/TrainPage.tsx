"use client";

import { useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";
import ChooseDestination from "../module/ChooseDestination";
import SearchResult from "../module/SearchResult";
import toast, { Toaster } from "react-hot-toast";
import NineYears from "../module/NineYears";

function TrainPage() {
  const [selectedType, setSelectedType] = useState({
    type: "inside",
    way: "یک طرفه",
  });

  const [checked, setChecked] = useState(true); // مربوط به چک باکس قطار
  const [searchResult, setSearchResult] = useState<boolean>(false); // استیت مربوط به جستجو
  const [userOrigin, setUserOrigin] = useState<string>(""); // مبدا انتخاب شده توسط کاربر
  const [userDestination, setUserDestination] = useState<string>(""); //مقصد انتخاب شده کاربر

  // مربوط به دکمه جستجو
  const searchHandler = () => {
    if (userDestination && userOrigin && userDestination === userOrigin) {
      toast.error("مبدا و مقصد نمیتوانند یکسان باشند");
    }
    if (!userDestination && !userOrigin) {
      toast.error("مبدا و مقصد نباید خالی باشد");
    } else if (!userOrigin) {
      toast.error("لطفا مبدا رو انتخاب کنبد");
    } else if (!userDestination) {
      toast.error("لطفا مقصد رو انتخاب کنبد");
    }
    if (userDestination && userOrigin && userOrigin !== userDestination) {
      setSearchResult(true);
    }
  };

  return searchResult ? (
    <SearchResult userDestination={userDestination} userOrigin={userOrigin} />
  ) : (
    <div className="my-2 bg-white pb-5">
      <Toaster />
      <TypeOfTravel
        checked={checked}
        setChecked={setChecked}
        way={selectedType.way}
        setSelectedType={setSelectedType}
      />
      <ChooseDestination
        way={selectedType.way}
        setSelectedType={setSelectedType}
        userOrigin={userOrigin}
        setUserOrigin={setUserOrigin}
        userDestination={userDestination}
        setUserDestination={setUserDestination}
      />

      <div
        onClick={searchHandler}
        className="mx-5 mt-3 rounded-lg bg-blue p-3 text-center font-semibold text-white"
      >
        جستجو
      </div>
      <NineYears />
    </div>
  );
}

export default TrainPage;
