"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function MyTicket() {
  const [userId, setUserId] = useState<string>("");
  console.log(userId);
  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login-modal");
    } else {
      setUserId(userId);
    }
  }, []);

  return (
    <div className="flex flex-col py-5 pt-10 items-center justify-center gap-3">
      {/* عکسه چیزی نیست */}
      <div className="mx-auto mt-6 w-max">
        <Image
          src="/image/notFound.svg"
          width={100}
          height={100}
          alt="nothing"
          priority
          className="size-[6rem]"
        />
      </div>
      <p className="font-semibold">سفری موجود نیست</p>
    </div>
  );
}

export default MyTicket;
