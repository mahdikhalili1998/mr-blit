import { IIcon } from "@/types/generalType";
import React from "react";

function Moshavereh({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 45 41"
    >
      <path
        fill="#CDF2B6"
        d="M40 5c2.734 0 5 2.266 5 5v20c0 2.813-2.266 5-5 5H5c-2.812 0-5-2.187-5-5V10c0-2.734 2.188-5 5-5zm-5 5H10c0 2.813-2.266 5-5 5v10c2.734 0 5 2.266 5 5h25c0-2.734 2.188-5 5-5V15c-2.812 0-5-2.187-5-5"
      ></path>
      <path
        fill="#60BD26"
        d="M40 15v10c-2.812 0-5 2.266-5 5H10c0-2.734-2.266-5-5-5V15c2.734 0 5-2.187 5-5h25c0 2.813 2.188 5 5 5M22.5 27.5c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5c-4.219 0-7.5 3.36-7.5 7.5s3.281 7.5 7.5 7.5"
      ></path>
    </svg>
  );
}

export default Moshavereh;
