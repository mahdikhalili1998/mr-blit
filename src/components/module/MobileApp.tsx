import React from "react";
import OfferLogo from "../icon/OfferLogo";
import Magic from "../icon/Magic";
import Dollar from "../icon/Dollar";
import Image from "next/image";

function MobileApp() {
  return (
    <div className="mx-4 rounded-lg bg-white px-6 py-8">
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
      <div className="mt-5"></div>
    </div>
  );
}

export default MobileApp;
