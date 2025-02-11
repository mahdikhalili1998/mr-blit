import { IIcon } from "@/types/generalType";
import React from "react";

function Cancle({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      data-v-a0a6a819=""
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="xmark"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill={color}
        d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
      ></path>
    </svg>
  );
}

export default Cancle;
