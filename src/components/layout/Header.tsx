import Link from "next/link";
import FirstSecH from "../module/Header/FirstSecH";

function Header() {
  return (
    <div className="sticky top-0 z-20 bg-blue pb-4">
      <Link href={"/"} className="mb-4 mr-5 flex flex-col gap-2 pt-1">
        <h1 className="text-2xl font-bold text-white"> مِستر بلیط</h1>
        <p className="text-sd text-white"> بلیط هواپیما و رزرو هتل </p>
      </Link>
      <div className="sticky top-0 z-20">
        <FirstSecH />
      </div>
    </div>
  );
}

export default Header;
