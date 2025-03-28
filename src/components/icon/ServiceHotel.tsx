import { IIcon } from "@/types/generalType";
import React from "react";

function ServiceHotel({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bed-front"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M80 160c0-17.6 14.4-32 32-32h96c17.6 0 32 14.4 32 32v32h32V160c0-17.6 14.4-32 32-32h96c17.6 0 32 14.4 32 32v32H480V96c0-35.2-28.8-64-64-64H96C60.8 32 32 60.8 32 96v96h48V160zM448 224H64C28.65 224 0 252.7 0 288v168C0 469.3 10.75 480 23.1 480S48 469.3 48 456V416h416v40C464 469.3 474.7 480 488 480S512 469.3 512 456V288C512 252.7 483.3 224 448 224zM464 368h-416V288c0-8.875 7.125-16 16-16h384c8.875 0 16 7.125 16 16V368z"
      ></path>
    </svg>
  );
}

export default ServiceHotel;
