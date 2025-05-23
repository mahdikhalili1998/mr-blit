import { IIcon } from "@/types/generalType";
import React from "react";

function Location({ width, height, color, className }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="location-dot"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
      ></path>
    </svg>
  );
}

export default Location;
