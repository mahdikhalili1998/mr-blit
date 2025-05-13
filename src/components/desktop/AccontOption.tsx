import React from "react";
import DownArrow from "../icon/DownArrow";
import DesktopProfile from "../icon/DesktopProfile";

function AccontOption() {
  return (
    <ul className="flex cursor-pointer items-center gap-1 text-lg font-medium text-white">
      <li>
        <DesktopProfile width={22} height={19} color="currentColor" />
      </li>
      <li>ورود به حساب کاربری</li>
      <li>
        <DownArrow width={16} height={13} color="currentColor" />
      </li>
    </ul>
  );
}

export default AccontOption;
