import LoginModal from "@/components/template/LoginModal";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "صفحه ورود",
  description: "Generated by create next app",
};
function page() {
  return <LoginModal />;
}

export default page;
