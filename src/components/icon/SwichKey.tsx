import { IIcon } from "@/types/generalType";
import React from "react";

function SwichKey({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrows-repeat"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M488 232c-13.25 0-24 10.75-24 24c0 57.34-46.66 104-104 104H145.9l63.03-63.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-104 104c-9.375 9.375-9.375 24.56 0 33.94l104 104C179.7 509.7 185.8 512 192 512s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L145.9 408H360c83.81 0 152-68.19 152-152C512 242.7 501.3 232 488 232zM152 152h214.1l-63.03 63.03c-9.375 9.375-9.375 24.56 0 33.94C307.7 253.7 313.8 256 320 256s12.28-2.344 16.97-7.031l104-104c9.375-9.375 9.375-24.56 0-33.94l-104-104c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L366.1 104H152C68.19 104 0 172.2 0 255.1C0 269.2 10.75 280 24 280S48 269.3 48 256C48 198.7 94.66 152 152 152z"
      ></path>
    </svg>
  );
}

export default SwichKey;
