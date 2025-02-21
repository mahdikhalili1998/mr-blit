import React from "react";
import FirstSecH from "../module/Header/FirstSecH";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-blue pb-4">
      <Link href={"/"} className="mb-4 mr-5 flex flex-col gap-2 pt-1">
        <h1 className="text-2xl font-bold text-white"> مِستر بلیط</h1>
        <p className="text-sd text-white"> بلیط هواپیما و رزرو هتل </p>
      </Link>
      <FirstSecH />
    </div>
  );
}

export default Header;
