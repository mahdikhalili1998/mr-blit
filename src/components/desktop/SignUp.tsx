"use client";
import { useState } from "react";
import Cancle from "../icon/Cancle";
import RightArrow from "../icon/RightArrow";
import { IDesktopSignUpModal } from "@/types/componentsProps";
import Info from "../icon/Info";
import regexInfo from "@/constant/regex";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp({ setIsOpenModal }: IDesktopSignUpModal) {
  const [usernumber, setUserNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [nextLevel, setNextlevel] = useState<boolean>(false); // رفتن برای وارد کردن رمز
  const [otp, setOtp] = useState<string>(""); // رمز پیامک شده اینجا ذخیره میشود
  const router = useRouter();

  const subHandler = async () => {
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

  return (
    <div>
      {/* فلش بک و کنسل */}
      <div className="flex items-center justify-between">
        <span>
          <RightArrow width={25} height={16} color="#000" />
        </span>
        <span onClick={() => setIsOpenModal(false)}>
          <Cancle width={20} height={20} color="#000" />
        </span>
      </div>
      <h2 className="mt-10 text-xl font-bold">ورود | ثبت نام</h2>
      <p className="mt-2 font-medium text-gray-600">
        برای ادامه شماره موبایل خود را وارد کنید
      </p>
      {/* باکس شماره موبایل */}
      <input
        type="phone"
        value={usernumber}
        placeholder="شماره موبایل"
        onChange={(e) => setUserNumber(e.target.value)}
        className="mt-10 w-full rounded-md border-[1px] border-solid border-slate-400 py-2 pr-3 placeholder:pr-3"
      />
      <div className="mt-10 flex items-center gap-2 text-slate-600">
        <Info width={18} height={18} color="currentColor" />
        <p>
          استفاده از مستر بلیط به معنای پذیرش{" "}
          <span className="font-medium text-blue">شرایط و مقررات </span>آن است
        </p>
      </div>
      <button
        onClick={() => subHandler()}
        disabled={!usernumber}
        className="mt-10 w-full rounded-md bg-blue py-2 text-center font-medium text-white disabled:cursor-not-allowed disabled:opacity-45"
      >
        {loading ? "لطفا صبر کنید..." : "      ادامه و دریافت کد"}
      </button>
      <p className="mt-5 text-center text-slate-600">
        برای ورود با ایمیل یا رمز ثابت{" "}
        <span className="font-medium text-blue">اینجا کلیک کنید !</span>
      </p>
      <Toaster />
    </div>
  );
}

export default SignUp;
