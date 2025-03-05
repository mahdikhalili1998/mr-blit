import React from "react";
import ProfileUSer from "../icon/ProfileUSer";
import Wallet from "../icon/Wallet";
import LeftIcon from "../icon/LeftIcon";
import {
  profileOption,
  profileOptionSecondSec,
  profileOptionThirdSec,
} from "@/constant/DataForMap";
import Link from "next/link";

function ProfilrPage() {
  return (
    <div className="bg-white">
      <h1 className="mb-5 pr-3 pt-3 text-right text-lg font-bold">
        حساب کاربری
      </h1>
      {/* ورود به حشاب کاربری */}
      <div className="mx-3 rounded-md border-[1px] border-solid border-slate-400">
        <div className="flex items-center justify-start gap-4 p-2">
          <span className="rounded-md bg-blue p-2 text-white">
            <ProfileUSer width={15} height={18} color="currentColor" />
          </span>
          <h4 className="text-sm font-medium"> ورود به حساب کاربری </h4>
        </div>
        <p className="p-2 text-xs/6 text-slate-400">
          برای استفاده از تمام امکانات مِستربلیط، وارد حساب کاربری خود شوید.
        </p>
      </div>
      {/* اعنبار کاربری */}
      <div className="mx-5 mt-7 flex items-center justify-between">
        <p className="flex items-center gap-3 font-semibold">
          <span className="rounded-md bg-slate-300 p-3 text-black">
            <Wallet width={16} height={16} color="currentColor" />
          </span>
          اعتبار کاربری
        </p>
        <span className="text-black">
          <LeftIcon width={16} height={22} color="currentColor" />
        </span>
      </div>
      {/* خط جدا کننده */}
      <div className="mx-5 mt-4 border-[1px] border-solid border-slate-300"></div>
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

export default ProfilrPage;
