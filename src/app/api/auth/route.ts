import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/ConnectDB";
import { MESSAGE, STATUS } from "@/enums/enums";
import { hashPassword } from "@/utils/nextPass";
import mrBlitUserInfo from "@/model/userInfo";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { gender, name, lastName, email, password, phoneNumber } =
      await req.json();
    const hashPass = await hashPassword(password);

    await mrBlitUserInfo.create({
      gender,
      name,
      lastName,
      email: email.toLowerCase(),
      password: hashPass,
      phoneNumber,
    });

    const user = await mrBlitUserInfo.findOne({ phoneNumber });
    console.log(user);

    return NextResponse.json(
      { message: MESSAGE.POST, userId: user._id },
      { status: STATUS.POST },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: MESSAGE.SERVER_ERROR },
      { status: STATUS.ERROR },
    );
  }
}
