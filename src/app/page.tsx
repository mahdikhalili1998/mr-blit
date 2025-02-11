import { redirect } from "next/navigation";

function HomePage() {
  redirect("/airPlane");
  return <h1>تست فونت 1234</h1>;
}

export default HomePage;
