"use client";
import { IUserInfoForm } from "@/types/generalType";
import React, { useEffect, useState } from "react";
import { userInfoFormInput } from "@/constant/DataForMap";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function UserInfoForm() {
  const [userInfo, setUserInfo] = useState<IUserInfoForm>({
    gender: "man",
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const router = useRouter();

  //   گرفتن شماره از لوکال استوریج
  useEffect(() => {
    const storedPhone = localStorage.getItem("userNumber");
    if (storedPhone) {
      setUserInfo((prev) => ({ ...prev, phoneNumber: storedPhone }));
    }
  }, []);

  const sendOtpHandler = async () => {
    const { name, lastName, password, confirmPassword } = userInfo;
    const newErrors: Record<string, boolean> = {};
    if (!name) newErrors.name = true;
    if (!lastName) newErrors.lastName = true;
    if (!password) newErrors.password = true;
    if (!confirmPassword) newErrors.confirmPassword = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("لطفاً فیلدهای قرمز را پر کنید");
    }
    if (password !== confirmPassword) {
      toast.error("رمزها باید یکسان باشند");
    }
    if (
      name &&
      lastName &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      await axios
        .post("/api/auth", userInfo)
        .then((res) => {
          // console.log(res);
          if (res.status === 201) {
            if (typeof window !== "undefined") {
              localStorage.setItem("userId", res.data.userId);
            }
            router.push(`/profile/${res.data.userId}`);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
    // اگر مقدار وارد شد، خطای فیلد را حذف کن
    setErrors((prev) => ({ ...prev, [field]: value.trim() === "" }));
  };

  return (
    <div>
      {/* رادیو باتن ها */}
      <ul className="mt-5 flex items-center justify-around">
        <li
          onClick={() =>
            setUserInfo((other: any) => ({ ...other, gender: "man" }))
          }
          className="flex items-center gap-2 p-2 font-bold text-blue"
        >
          <span
            className={`${
              userInfo.gender === "man"
                ? "bg-blue"
                : "border-2 border-solid border-blue"
            } flex size-4 items-center justify-center rounded-full`}
          >
            <span
              className={`${userInfo.gender === "man" ? "block" : "hidden"} size-2 rounded-full bg-white`}
            ></span>
          </span>
          <span>آقا </span>
        </li>
        <li
          onClick={() =>
            setUserInfo((other: any) => ({ ...other, gender: "woman" }))
          }
          className="flex items-center gap-2 p-2 font-bold text-blue"
        >
          <span
            className={`${
              userInfo.gender === "woman"
                ? "bg-blue"
                : "border-2 border-solid border-blue"
            } flex size-4 items-center justify-center rounded-full`}
          >
            <span
              className={`${userInfo.gender === "woman" ? "block" : "hidden"} size-2 rounded-full bg-white`}
            ></span>
          </span>
          <span>خانم</span>
        </li>
      </ul>

      {/* اینپوت ها */}
      {userInfoFormInput.map((item, index) => (
        <div key={index} className="mx-4">
          <input
            type="text"
            value={userInfo[item.value as keyof IUserInfoForm] || ""}
            onChange={(e) => handleInputChange(item.value, e.target.value)}
            placeholder={item.lab}
            className={`${
              errors[item.value]
                ? "border-red-500 bg-red-100"
                : "border-gray-300"
            } mt-6 w-full rounded-md border-[2px] border-solid px-2 py-3 placeholder:text-right focus:border-blue focus:bg-cyan-50 focus:outline-none`}
          />
        </div>
      ))}

      {/* دکمه ارسال */}
      <div className="mx-4 mt-5">
        <button
          onClick={sendOtpHandler}
          className="w-full rounded-md bg-blue py-3 font-semibold text-white"
        >
          ارسال
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default UserInfoForm;
