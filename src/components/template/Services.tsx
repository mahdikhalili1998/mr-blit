import { ServicesOption } from "@/constant/DataForMap";
import Link from "next/link";

function Services() {
  return (
    <div>
      <h1 className="pr-3 pt-3 text-right text-lg font-bold">سفر جدید</h1>
      <p className="m-3 font-medium">
        برای جستجو و رزرو جدید یکی از سرویس‌های زیر را انتخاب کنید{" "}
      </p>
      <div className="grid grid-cols-3 gap-y-6 pt-10">
        {ServicesOption.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="flex flex-col items-center justify-center gap-3"
          >
            <span className="rounded-md bg-white p-4 text-blue">
              {item.icon}
            </span>
            <span className="text-sm font-semibold">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
