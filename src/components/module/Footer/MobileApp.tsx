import React from "react";

import Image from "next/image";
import OfferLogo from "@/components/icon/OfferLogo";
import Magic from "@/components/icon/Magic";
import Dollar from "@/components/icon/Dollar";

function MobileApp() {
  return (
    <div className="mx-4 rounded-lg bg-white px-6 pt-8">
      <h1 className="text-center text-xl font-bold">
        ساده‌تر با اپلیکیشن مِستربلیط
      </h1>
      <div className="mt-5 flex flex-col items-center justify-center gap-3">
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
      <div className="relative mt-5 w-max">
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
  );
}

export default MobileApp;
