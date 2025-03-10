import { IIcon } from "@/types/generalType";
import React from "react";

function LeftIcon({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="angle-left"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
    >
      <path
        fill={color}
        d="M166.5 424.5l-143.1-152c-4.375-4.625-6.562-10.56-6.562-16.5c0-5.938 2.188-11.88 6.562-16.5l143.1-152c9.125-9.625 24.31-10.03 33.93-.9375c9.688 9.125 10.03 24.38 .9375 33.94l-128.4 135.5l128.4 135.5c9.094 9.562 8.75 24.75-.9375 33.94C190.9 434.5 175.7 434.1 166.5 424.5z"
      ></path>
    </svg>
  );
}

export default LeftIcon;
