"use client";

import { useEffect, useState } from "react";
import TypeOfTravel from "../module/TypeOfTravel";
import ChooseDestination from "../module/ChooseDestination";
import SearchResult from "../module/SearchResult";
import toast, { Toaster } from "react-hot-toast";
import NineYears from "../module/NineYears";
import { useRouter } from "next/navigation";

function AirPlanePage() {
  const [selectedType, setSelectedType] = useState({
    type: "inside",
    way: "یک طرفه",
  });
  // استیت مربوط به جستجو
  const [searchResult, setSearchResult] = useState<boolean>(false);
  const [userOrigin, setUserOrigin] = useState<string>(""); // مبدا انتخاب شده توسط کاربر
  const [userDestination, setUserDestination] = useState<string>(""); //مقصد انتخاب شده کاربر
  const router = useRouter();
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

  useEffect(() => {
    setTimeout(() => {
      router.refresh();
    }, 1000);
  }, []);

  return searchResult ? (
    <SearchResult userDestination={userDestination} userOrigin={userOrigin} />
  ) : (
    <div>
      <div className="my-2 bg-white pb-5">
        <Toaster />
        <TypeOfTravel
          type={selectedType.type}
          way={selectedType.way}
          setSelectedType={setSelectedType}
        />
        <ChooseDestination
          type={selectedType.type}
          way={selectedType.way}
          setSelectedType={setSelectedType}
          userOrigin={userOrigin}
          setUserOrigin={setUserOrigin}
          userDestination={userDestination}
          setUserDestination={setUserDestination}
        />
        <div className="mt-4 flex justify-center">
          <div
            onClick={searchHandler}
            className="mx-5 mt-3 w-1/4 rounded-lg bg-blue py-3 text-center font-semibold text-white"
          >
            جستجو
          </div>
        </div>
      </div>
      <NineYears />
    </div>
  );
}

export default AirPlanePage;
