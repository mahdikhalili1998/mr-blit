"use client";

import { useEffect, useState } from "react";

function PwaModal({ show, closeHandler, instalHandler }: any) {
  const [topOffset, setTopOffset] = useState(20); // مقدار اولیه top
  console.log(topOffset);
  // برای گوس دادن ب اندازه صفحه کاربر
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 355;
     const baseTop = 20;
      const extra = screenWidth > baseWidth ? screenWidth - baseWidth : 0;
      const steps = Math.floor(extra / 36);
     const newTop = baseTop + steps * 20;
      setTopOffset(newTop);
    };
    handleResize(); // مقدار اولیه
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    show && (
      <>
        {/* بک‌دراپ */}
        <div className="fixed inset-0 z-40 bg-gray-900 opacity-80 backdrop-blur"></div>

        {/* مدال با هاله متحرک */}
        <div
          style={{ right: `${topOffset}px` }}
          className="fixed top-48 z-50 flex items-center justify-center"
        >
          <div className="animate-glow rounded-xl bg-blue p-6">
            <h2 className="font-semibold text-white">
              برای نصب این برنامه روی دکمه نصب کلیک کنید
            </h2>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                onClick={instalHandler}
                className="rounded-md bg-white px-2 py-1 font-medium text-blue"
              >
                نصب
              </button>
              <button
                onClick={closeHandler}
                className="rounded-md bg-slate-400 px-2 py-1 font-medium text-white"
              >
                لغو
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default PwaModal;
