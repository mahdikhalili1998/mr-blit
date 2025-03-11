import UserProfile from "@/components/template/UserProfile";
import mrBlitUserInfo from "@/model/userInfo";
import connectDB from "@/utils/ConnectDB";

async function ProfilePage(params) {
  const { userId } = await params;
  if (!userId) {
    return <div>شناسه کاربر یافت نشد!</div>;
  }
  await connectDB();
  const fineUser = await mrBlitUserInfo.findOne({ _id: userId });
  const { name, lastName, phoneNumber } = fineUser;

  return (
    <UserProfile name={name} lastName={lastName} phoneNumber={phoneNumber} />
  );
}

export default ProfilePage;
