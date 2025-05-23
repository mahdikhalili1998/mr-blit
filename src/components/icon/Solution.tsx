import { IIcon } from "@/types/generalType";
import React from "react";

function Solution({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="user-tie"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill={color}
        d="M96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128zM304 128C304 83.82 268.2 48 224 48C179.8 48 144 83.82 144 128C144 172.2 179.8 208 224 208C268.2 208 304 172.2 304 128zM209.1 359.2L176 304H272L238.9 359.2L254.8 418.4L303.6 320.9C384.7 329.3 448 397.9 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 397.9 63.28 329.3 144.4 320.9L193.2 418.4L209.1 359.2zM329.5 376.3L285.7 464H398.7C392.6 424.2 365.7 391.1 329.5 376.3V376.3zM49.31 464H162.3L118.5 376.3C82.28 391.1 55.41 424.2 49.31 464z"
      ></path>
    </svg>
  );
}

export default Solution;
