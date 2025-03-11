import { IUserInfo } from "@/types/model";
import { model, models, Schema } from "mongoose";

const userSchema = new Schema<IUserInfo>(
  {
    gender: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }, // تاریخ ایجاد به صورت دستی
    updatedAt: { type: Date, default: Date.now() },
  },
  { timestamps: false },
);

const mrBlitUserInfo =
  models.mrBlitUserInfo || model<IUserInfo>("mrBlitUserInfo", userSchema);

export default mrBlitUserInfo;
