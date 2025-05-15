"use client";
import { useRef, useState } from "react";
import Cancle from "../icon/Cancle";
import RightArrow from "../icon/RightArrow";
import { IDesktopSignUpModal } from "@/types/componentsProps";
import Info from "../icon/Info";
import regexInfo from "@/constant/regex";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import EditPen from "../icon/EditPen";

function SignUp({ setIsOpenModal }: IDesktopSignUpModal) {
  const [goToInfoForm, setGoToInfoForm] = useState<boolean>(false); // رفتن ب فرم اطلاعات
  const [userNumber, setUserNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [nextLevel, setNextlevel] = useState<boolean>(true); // رفتن برای وارد کردن رمز
  const [otp, setOtp] = useState<string>(""); // رمز پیامک شده اینجا ذخیره میشود
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]); // کد وارد شده کاربر
  const router = useRouter();
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

  const subHandler = async () => {
    const num = { to: userNumber };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer your_auth_token",
    };
    if (!regexInfo.phoneNumber.test(userNumber)) {
      toast.error("شماره با فرمت صحیح وارد کنید ");
      return;
    }
    setLoading(true);
    await axios
      .post("/api/find-user", { phone: userNumber })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("userNumber", res.data.userInfo.phoneNumber);
          localStorage.setItem("userId", res.data.userInfo._id);
          router.push(`/`);
        }
      })
      .catch(async (error) => {
        if (error.status === 404) {
          await axios
            .post("/api/proxy", JSON.stringify(num), { headers })
            .then((res) => {
              // console.log(`لاگ ملی پیامک : ${res}`);
              if (res.status === 200) {
                toast.success("کد ارسال شد");
                setOtp(res.data.code);
                setNextlevel(true);
              }
            })
            .catch((error) => console.log(error));
        }
      });
  };

  const sendOtpHandler = () => {
    const enteredOtp = otpValues.join("");
    if (enteredOtp === otp) {
      // ذخیره شماره در Local Storage
      if (typeof window !== "undefined") {
        localStorage.setItem("userNumber", userNumber);
      }
      setGoToInfoForm(true);
    } else {
      alert("کد تایید اشتباه است ❌");
    }
  };

  return (
    <div>
      {/* فلش بک و کنسل */}
      <div className="flex items-center justify-between">
        {/* دکمه برگشت */}
        <span
          onClick={() => {
            nextLevel ? setNextlevel(false) : setIsOpenModal(false);
          }}
          className="text-blue"
        >
          <RightArrow width={25} height={16} color="#000" />
        </span>
        {/* دکمه کنسل */}
        <span onClick={() => setIsOpenModal(false)}>
          <Cancle width={20} height={20} color="#000" />
        </span>
      </div>
      <h2 className="mt-10 text-xl font-bold">ورود | ثبت نام</h2>
      <p className="mt-2 font-medium text-gray-600">
        {nextLevel
          ? "رمز پیامک شده را وارد کنید"
          : "  برای ادامه شماره موبایل خود را وارد کنید"}
      </p>
      {nextLevel /* باکس وارد کردن کد */ ? (
        <div className="mt-5 flex justify-center gap-4" dir="ltr">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              type="text"
              maxLength={1}
              className="focus:border-blue-500 h-12 w-12 rounded-lg border-2 border-gray-300 text-center text-xl focus:border-[2px] focus:border-solid focus:border-blue focus:bg-cyan-100 focus:outline-none"
              onChange={(e) => handleInput(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              value={otpValues[index]}
            />
          ))}
        </div> /* باکس شماره موبایل */
      ) : (
        <input
          type={"number"}
          value={userNumber}
          placeholder="شماره موبایل"
          onChange={(e) => setUserNumber(e.target.value)}
          className="mt-10 w-full rounded-md border-[1px] border-solid border-slate-400 py-2 pr-3 placeholder:pr-3"
        />
      )}
      {nextLevel ? (
        <div
          onClick={() => setNextlevel(false)}
          className="mt-10 flex items-center gap-2 text-slate-600"
        >
          <EditPen width={16} height={15} color="#0f84fa " />
          <p className="pt-[2px]">
            برای اصلاح شماره
            <span className="text-blue">اینجا کلیک کنید !</span>
          </p>
        </div>
      ) : (
        <div className="mt-10 flex items-center gap-2 text-slate-600">
          <Info width={18} height={18} color="currentColor" />
          <p>
            استفاده از مستر بلیط به معنای پذیرش{" "}
            <span className="font-medium text-blue">شرایط و مقررات </span>آن است
          </p>
        </div>
      )}
      {nextLevel /* دکمه ی مخصوص برای تایید کد وارد شده */ ? (
        <button
          disabled={otpValues.some((val) => val === "")}
          onClick={() => sendOtpHandler()}
          className="mt-10 w-full rounded-md bg-blue py-2 text-center font-medium text-white disabled:cursor-not-allowed disabled:opacity-45"
        >
          ارسال
        </button> /* دکمه ی مخصوص برای ارسال کد */
      ) : (
        <button
          onClick={() => subHandler()}
          disabled={!userNumber}
          className="mt-10 w-full rounded-md bg-blue py-2 text-center font-medium text-white disabled:cursor-not-allowed disabled:opacity-45"
        >
          {loading ? "لطفا صبر کنید..." : "      ادامه و دریافت کد"}
        </button>
      )}

      <p className="mt-5 text-center text-slate-600">
        برای ورود با ایمیل یا رمز ثابت{" "}
        <span className="font-medium text-blue">اینجا کلیک کنید !</span>
      </p>
      <Toaster />
    </div>
  );
}

export default SignUp;
