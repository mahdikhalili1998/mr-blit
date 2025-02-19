"use client";

import { useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";
import ChooseDestination from "../module/ChooseDestination";
import SearchResult from "../module/SearchResult";
import toast, { Toaster } from "react-hot-toast";

function HotelPage() {
  const [selectedType, setSelectedType] = useState({
    type: "inside",
  });

  // استیت مربوط به جستجو
  const [searchResult, setSearchResult] = useState<boolean>(false);
  const [userOrigin, setUserOrigin] = useState<string>(""); // مبدا انتخاب شده توسط کاربر
  const [userDestination, setUserDestination] = useState<string>(""); //مقصد انتخاب شده کاربر

  // مربوط به دکمه جستجو
  const searchHandler = () => {
    if (!userOrigin) {
      toast.error("شهر یا هتل مقصد نباید خالی باشد");
    } else if (userOrigin) {
      setSearchResult(true);
    }
  };

  return searchResult ? (
    <SearchResult userDestination={userDestination} userOrigin={userOrigin} />
  ) : (
    <div className="my-2 bg-white pb-5">
      <Toaster />
      <TypeOfTravel type={selectedType.type} />
      <ChooseDestination
        type={selectedType.type}
        setSelectedType={setSelectedType}
        userOrigin={userOrigin}
        setUserOrigin={setUserOrigin}
      />

      <div
        onClick={searchHandler}
        className="mx-5 mt-3 rounded-lg bg-blue p-3 text-center font-semibold text-white"
      >
        جستجو
      </div>
    </div>
  );
}

export default HotelPage;
