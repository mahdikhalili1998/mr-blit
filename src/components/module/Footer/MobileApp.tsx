"use client";
import Image from "next/image";
import OfferLogo from "@/components/icon/OfferLogo";
import Magic from "@/components/icon/Magic";
import Dollar from "@/components/icon/Dollar";
import { useState } from "react";
import PhoneLogo from "@/components/icon/PhoneLogo";

function MobileApp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="mx-4 rounded-lg bg-white px-6 pt-8">
      <h1 className="text-center text-xl font-bold">
        ساده‌تر با اپلیکیشن مِستربلیط
      </h1>
      <div className="lg:flex lg:items-center lg:justify-between">
        {/* عکس در حالت دستکتاپ */}
        <div className="hidden lg:block">
          <Image
            src={"/image/iphonx.png"}
            width={400}
            height={400}
            priority
            alt="iPhone_X.svg"
            className="w-[11rem]"
          />
        </div>
        {/* اینپوت وارد کردن شماره و دکمه ارسال لینک و ... */}
        <div>
          {/* تگ اینپوت برای وارد کردن شماره */}
          <div className="hidden gap-2 lg:flex">
            <div className="flex gap-4 rounded-md bg-slate-200 px-3 py-2">
              <PhoneLogo width={14} height={18} color="#6b7280" />
              <input
                type="number"
                value={phoneNumber}
                placeholder="شماره موبایل"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-transparent placeholder:bg-transparent focus:outline-none"
              />
            </div>
            <button className="rounded-md bg-blue px-2 py-1 font-semibold text-white">
              ارسال لینک دانلود
            </button>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 lg:grid lg:grid-cols-2">
            {/* تخفیف */}
            <div className="flex items-center gap-2 font-medium text-blue">
              <span className="-mt-1">
                <OfferLogo width={16} height={18} color="currentColor" />
              </span>
              <span>تخفیف های استثنایی اپلیکیشن</span>
            </div>
            {/* جادو */}
            <div className="flex items-center gap-2 font-medium text-blue">
              <span className="-mt-1">
                <Magic width={16} height={18} color="currentColor" />
              </span>
              <span>راحت تر برای پر سفر ها</span>
            </div>
            {/* امکانات بیشتر */}
            <div className="flex items-center gap-2 font-medium text-blue">
              <span className="-mt-1">
                <Dollar width={16} height={18} color="currentColor" />
              </span>
              <span>امکانات بیشتر برای سفر به صرفه</span>
            </div>
          </div>
        </div>
        {/* عکس QR code  */}
        <div className="hidden lg:block">
          <Image
            src={"/image/qr-code.png"}
            alt="qr-code"
            width={400}
            height={400}
            priority
            className="w-[7rem]"
          />
        </div>
        {/* عکس در حالت موبایل */}
        <div className="relative mt-5 w-max md:mx-auto lg:hidden">
          <Image
            src="/image/phone.png"
            alt="phone"
            width={500}
            height={300}
            priority
            className="w-[17rem]"
          />
          {/* لوگوی مایکت و بازار */}
          <div className="absolute right-[75px] top-24 flex flex-col items-center justify-center gap-10">
            <Image
              src="/image/myket.png"
              alt="phone"
              width={120}
              height={300}
              priority
              className="w-[8rem]"
            />
            <Image
              src="/image/bazar.png"
              alt="phone"
              width={120}
              height={300}
              priority
              className="w-[8rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
