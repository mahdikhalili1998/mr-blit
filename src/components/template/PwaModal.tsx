import React from "react";

function PwaModal({ show, closeHandler, instalHandler }: any) {
  const blurBackground = show ? "backdrop-blur" : "";
  return (
    show && (
      <div className="absolute right-8 top-48 z-50 flex items-center justify-center rounded-md bg-blue p-2 px-2 py-8">
        <div className="">
          <h2 className="font-semibold text-white">
            برای نصب این برنام روی دکمه ی نصب کلیک کنید
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
        <div
          className={`fixed inset-0 -z-40 bg-gray-900 opacity-80 ${blurBackground}`}
        ></div>
      </div>
    )
  );
}

export default PwaModal;
