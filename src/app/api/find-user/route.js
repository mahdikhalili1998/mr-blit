import { MESSAGE, STATUS } from "@/enums/enums";
import mrBlitUserInfo from "@/model/userInfo";
import connectDB from "@/utils/ConnectDB";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb", // تنظیم حداکثر سایز بدنه درخواست
    },
    responseLimit: "8mb", // افزایش حداکثر اندازه پاسخ
    externalResolver: true,
  },
};

export async function POST(req) {
  try {
    await connectDB();
    // تنظیم تایم‌اوت دستی با Promise.race
    const timeoutPromise = new Promise(
      (_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 30000), // 30 ثانیه
    );

    const responsePromise = (async () => {
      const { userId, phone } = await req.json();

      if (userId) {
        const userInfoID = await mrBlitUserInfo.findOne({ _id: userId });
        if (userInfoID) {
          return NextResponse.json(
            { message: MESSAGE.GET, userInfo: userInfoID },
            { status: STATUS.GET },
          );
        } else {
          return NextResponse.json(
            { message: MESSAGE.NOT_FOUND },
            { status: STATUS.NOT_FOUND },
          );
        }
      }

      if (phone) {
        const userInfoNUM = await mrBlitUserInfo.findOne({
          phoneNumber: phone,
        });
        if (userInfoNUM) {
          return NextResponse.json(
            { message: MESSAGE.GET, userInfo: userInfoNUM },
            { status: STATUS.GET },
          );
        } else {
          return NextResponse.json(
            { message: MESSAGE.NOT_FOUND },
            { status: STATUS.NOT_FOUND },
          );
        }
      }
    })();
    // کنترل تایم‌اوت
    return await Promise.race([responsePromise, timeoutPromise]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: MESSAGE.SERVER_ERROR },
      { status: STATUS.ERROR },
    );
  }
}
