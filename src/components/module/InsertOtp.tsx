import { IInsertOtp } from "@/types/componentsProps";
import React, { useState } from "react";
import EditPen from "../icon/EditPen";
import { useRef } from "react";

function InsertOtp({ otp, setNextLevel, userNumber }: IInsertOtp) {
  console.log(otp);
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const sendOtpHandler = () => {
    const enteredOtp = otpValues.join("");
    if (enteredOtp === otp) {
      alert("کد تایید صحیح است ✅");
      setNextLevel(true);
    } else {
      alert("کد تایید اشتباه است ❌");
    }
  };

  return (
    <div>
      <div className="mx-3 mt-5">
        <h1 className="text-lg font-semibold">کد تایید را وارد کنید</h1>
        <p className="mt-1 text-xs font-medium">{`کد تایید برای شماره ${userNumber} ارسال شد `}</p>
      </div>
      {/* متن تغیر شماره */}
      <div
        onClick={() => setNextLevel(false)}
        className="mx-4 mt-4 flex items-center gap-2 text-blue"
      >
        <span>
          <EditPen width={14} height={14} color="currentColor" />
        </span>
        <p className="text-xs font-semibold">ویرایش شماره</p>
      </div>
      {/* باکس وارد کردن کد */}
      <div className="mt-5 flex justify-center gap-4" dir="ltr">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength={1}
            className="focus:border-blue-500 h-12 w-12 rounded-lg border-2 border-gray-300 text-center text-xl focus:outline-none"
            onChange={(e) => handleInput(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            value={otpValues[index]}
          />
        ))}
      </div>
      {/* دکمه اراسال */}
      <div className="mx-3 mt-10">
        <button
          onClick={() => sendOtpHandler()}
          className="w-full rounded-md bg-blue py-3 font-semibold text-white"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}

export default InsertOtp;
