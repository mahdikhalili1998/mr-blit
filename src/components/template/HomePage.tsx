import React from "react";
import { redirect } from "next/navigation";

function MainPage() {
  redirect("/airPlane");
  return <div>MainPage</div>;
}

export default MainPage;
