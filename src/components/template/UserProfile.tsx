import { IUserProfile } from "@/types/componentsProps";
import React from "react";
import EditIcon from "../icon/EditIcon";
import Image from "next/image";
import LeftIcon from "../icon/LeftIcon";
import Link from "next/link";
import {
  profileOption,
  profileOptionSecondSec,
  profileOptionThirdSec,
} from "@/constant/DataForMap";

function UserProfile({ name, lastName, phoneNumber }: IUserProfile) {
  return (
    <div className="bg-white">
      <h1 className="mb-5 pr-3 pt-3 text-right text-lg font-bold">
        حساب کاربری
      </h1>
      {/* اطلاعات حساب */}
      <div className="mx-3 rounded-md border-[1px] border-solid border-slate-400 py-3">
        <div className="flex items-center justify-between px-3">
          {/* اسم و شماره */}
          <div className="flex flex-col items-start justify-start gap-2 p-2">
            <h1 className="text-lg font-semibold">{`${!name ? "در حال بارگذاری" : name} ${lastName}`}</h1>
            <span className="text-sm font-semibold text-slate-400">
              {!phoneNumber ? "در حال بارگذاری..." : phoneNumber}
            </span>
          </div>
          <span className="text-slate-400">
            <EditIcon width={16} height={16} color="currentColor" />
          </span>
        </div>
        {/* خط جداکننده */}
        <div className="mx-3 border-[1px] border-solid border-slate-300"></div>
        <div className="flex items-center justify-between px-3 py-2">
          <Image
            src="/image/level1.png"
            width={100}
            height={100}
            alt="level 1"
            priority
            className="size-[1.5rem]"
          />
          <span className="font-bold">مستر بلیط کلاب</span>
          <span className="text-slate-400">سطح برنزی | 0 امتیاز</span>
          <span className="text-slate-700">
            <LeftIcon width={22} height={22} color="currentColor" />
          </span>
        </div>
      </div>
      {/* بقیه ی موارد */}
      <div className="mx-5 mt-7 space-y-4 font-semibold">
        {profileOption.map((item, index) => (
          <Link
            key={index}
            className="flex items-center gap-3 font-semibold"
            href="/"
          >
            <span className="rounded-md bg-slate-300 p-3 text-black">
              {item.icon}
            </span>
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
      {/* خط جدا کننده */}
      <div className="mx-5 mt-4 border-[1px] border-solid border-slate-300"></div>
      {/* قسمت آپشن ها پارت دوم */}
      <div className="mx-5 mt-7 space-y-4 font-semibold">
        {profileOptionSecondSec.map((item, index) => (
          <Link
            key={index}
            className="flex items-center justify-between gap-3 font-semibold"
            href="/"
          >
            {/* ایکون */}
            <div className="flex items-center gap-3 font-semibold">
              <span className="rounded-md bg-slate-300 p-3 text-black">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
            <span className="text-black">
              <LeftIcon width={16} height={22} color="currentColor" />
            </span>
          </Link>
        ))}
      </div>
      {/* خط جدا کننده */}
      <div className="mx-5 mt-4 border-[1px] border-solid border-slate-300"></div>
      {/* قسمت آپشن ها پارت سوم */}
      <div className="mx-5 mt-7 space-y-4 pb-6 font-semibold">
        {profileOptionThirdSec.map((item, index) => (
          <Link
            key={index}
            className="flex items-center gap-3 font-semibold"
            href="/"
          >
            <span className="rounded-md bg-slate-300 p-3 text-black">
              {item.icon}
            </span>
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
