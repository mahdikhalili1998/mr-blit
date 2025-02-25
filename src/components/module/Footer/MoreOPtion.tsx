"use client";

import { useState } from "react";
import DownArrow from "../../icon/DownArrow";
import { motion, AnimatePresence } from "framer-motion";

function MoreOPtion() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");

  const openModalHandler = (value: string) => {
    setOpenModal((e) => !e);
    setModalValue(value);
  };

  return (
    <ul className="mt-5">
      <li className="mx-5 border-b-[1px] border-solid border-slate-200 py-3">
        {/* خدمات سفر */}
        <div
          onClick={() => openModalHandler("tripOptions")}
          className="flex items-center justify-between"
        >
          <h1 className="text-lg font-semibold">خدمات سفر</h1>
          <span
            className={`${openModal && modalValue === "tripOptions" ? "rotate-180" : "rotate-360"} transition-all duration-100`}
          >
            <DownArrow width={16} height={18} color="currentColor" />
          </span>
        </div>
        <AnimatePresence>
          {openModal && modalValue === "tripOptions" && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2"
            >
              <li className="font-semibold text-blue">بلیط هواپیما</li>
              <li className="font-semibold text-blue">رزرو هتل</li>
              <li className="font-semibold text-blue">بسته سفر </li>
              <li className="font-semibold text-blue">بلیط اتوبوس</li>
              <li className="font-semibold text-blue">بلیط قطار </li>
              <li className="font-semibold text-blue">بلیط سواری</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li className="mx-5 border-b-[1px] border-solid border-slate-200 py-3">
        {/* راهنمایی و پشتیبانی*/}
        <div
          onClick={() => openModalHandler("about-us")}
          className="flex items-center justify-between"
        >
          <h1 className="text-lg font-semibold">راهنمایی و پشتیبانی</h1>
          <span
            className={`${openModal && modalValue === "about-us" ? "rotate-180" : "rotate-360"} transition-all duration-100`}
          >
            <DownArrow width={16} height={18} color="currentColor" />
          </span>
        </div>
        <AnimatePresence>
          {openModal && modalValue === "about-us" && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2"
            >
              <li className="font-semibold text-blue">پرسش های متداول</li>
              <li className="font-semibold text-blue">شرایط و مقررات</li>
              <li className="font-semibold text-blue">راهکار سازمانی</li>
              <li className="font-semibold text-blue">پیشنهاد و شکایات</li>
              <li className="font-semibold text-blue">مجله مستر بلیط</li>
              <li className="font-semibold text-blue">در باره ما</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li className="mx-5 py-3">
        <h2 className="text-lg font-semibold">لبخند بزن و سفر کن!</h2>
        <p className="font-mediumv mt-5 text-sm/8 text-slate-500">
          مِستربلیط سامانه آنلاین خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس،
          بلیط هواپیما چارتری و رزرو هتل است؛ راهی سریع و آسان برای برنامه ریزی
          سفرهایتان! تنها با چند کلیک می توانید بلیط خود را به هر مقصدی که
          بخواهید تهیه کرده، صورتحسابتان را آنلاین پرداخت کنید و بی دغدغه آماده
          سفر خود باشید
        </p>
      </li>
    </ul>
  );
}

export default MoreOPtion;
