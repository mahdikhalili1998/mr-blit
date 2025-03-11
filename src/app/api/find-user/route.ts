import { MESSAGE, STATUS } from "@/enums/enums";
import mrBlitUserInfo from "@/model/userInfo";
import connectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, phone } = await req.json();

    // اگر کاربر با ایدی موجود بود
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
    // اگر کاربر با شماره موبایل موجود بود
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
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: MESSAGE.SERVER_ERROR },
      { status: STATUS.ERROR },
    );
  }
}
