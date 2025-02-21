import { shortcutData } from "@/constant/ShortcutData";

function Shortcut() {
  return (
    <ul className="fixed bottom-0 z-50 flex w-full items-center justify-between bg-white px-4 py-4">
      {shortcutData.map((item: any) => (
        <li
          key={item.nameEn}
          className="flex flex-col items-center justify-center gap-2 text-slate-400"
        >
          <span>{item.icon}</span>
          <span className="text-xs font-bold">{item.nameFa}</span>
        </li>
      ))}
    </ul>
  );
}

export default Shortcut;
