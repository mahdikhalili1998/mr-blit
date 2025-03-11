"use client";
import { useRouter } from "next/navigation";
import BackArrow from "../icon/BackArrow";
import Image from "next/image";
import { useState } from "react";
import Info from "../icon/Info";
import Link from "next/link";
import regexInfo from "@/constant/regex";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import InsertOtp from "../module/InsertOtp";

function LoginModal() {
  const [usernumber, setUserNumber] = useState<string>(""); // ذخیره شماره کاربر
  const [nextLevel, setNextlevel] = useState<boolean>(false); // رفتن برای وارد کردن رمز
  const [otp, setOtp] = useState<string>(""); // رمز پیامک شده اینجا ذخیره میشود
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const sendNumberHandler = async () => {
    const num = { to: usernumber };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer your_auth_token",
    };
    if (!regexInfo.phoneNumber.test(usernumber)) {
      toast.error("شماره با فرمت صحیح وارد کنید ");
      return;
    }
    setLoading(true);
    await axios
      .post("/api/find-user", { phone: usernumber })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("userNumber", res.data.userInfo.phoneNumber);
          localStorage.setItem("userId", res.data.userInfo._id);
          router.push(`/profile/${res.data.userInfo._id}`);
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

  return (
    <div className="pr-3 pt-4">
      {/* فلش بک */}
      <span onClick={() => router.back()} className="text-blue">
        <BackArrow width={20} height={22} color="currentColor" />
      </span>
      {/* عکس لوگو */}
      {nextLevel ? null : (
        <div className="my-5 flex flex-col items-center justify-center gap-3">
          <Image
            src="/image/mainLogo.png"
            alt="logo"
            width={150}
            height={150}
            priority
            className="size-[3rem]"
          />
          <span className="font-semibold text-blue"> مِستربلیط </span>
        </div>
      )}
      {nextLevel ? (
        // قسمت وارد کردن رمز
        <InsertOtp
          otp={otp}
          setNextLevel={setNextlevel}
          userNumber={usernumber}
        />
      ) : (
        // قسمت وارد کردن شماره
        <>
          <div className="mx-3 text-black">
            <h1 className="text-lg font-semibold"> ورود | ثبت‌ نام</h1>
            <p className="mt-1 text-sm font-medium">
              برای ادامه، شماره موبایل خود را وارد کنید.
            </p>
          </div>
          {/* اینپوت شماره */}
          <div className="mx-3">
            <input
              type="number"
              value={usernumber}
              onChange={(e) => setUserNumber(e.target.value)}
              placeholder="شماره موبایل"
              className="mt-6 w-full rounded-md px-2 py-3 placeholder:text-right focus:outline-none"
            />
          </div>
          {/* قوانین و مقررات */}
          <div className="mx-3 mt-3 flex items-start gap-2">
            <span className="text-blue">
              <Info width={18} height={18} color="currentColor" />
            </span>
            <p>
              <span> استفاده از مستربلیط به معنای پذیرش </span>
              <Link className="px-[3px] text-blue" href={"/"}>
                شرایط و مقررات
              </Link>
              <span> میباشد</span>
            </p>
          </div>
          {/* دکمه دریافت کد */}
          <div className="mx-3 mt-5">
            {loading ? (
              <button
                className={`w-full rounded-md bg-blue py-3 font-semibold text-white`}
              >
                <BeatLoader size={10} color="#fff" />
              </button>
            ) : (
              <button
                onClick={() => sendNumberHandler()}
                disabled={!regexInfo.phoneNumber.test(usernumber)}
                className={`w-full rounded-md bg-blue py-3 font-semibold text-white disabled:opacity-45`}
              >
                ادامه و دریافت کد
              </button>
            )}
          </div>
        </>
      )}

      <Toaster />
    </div>
  );
}

export default LoginModal;
