import { IIcon } from "@/types/generalType";
import React from "react";

function Wallet({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="wallet"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M456 32C469.3 32 480 42.75 480 56C480 69.25 469.3 80 456 80H88C65.91 80 48 97.91 48 120V392C48 414.1 65.91 432 88 432H424C446.1 432 464 414.1 464 392V216C464 193.9 446.1 176 424 176H120C106.7 176 96 165.3 96 152C96 138.7 106.7 128 120 128H424C472.6 128 512 167.4 512 216V392C512 440.6 472.6 480 424 480H88C39.4 480 0 440.6 0 392V120C0 71.4 39.4 32 88 32H456zM352 304C352 286.3 366.3 272 384 272C401.7 272 416 286.3 416 304C416 321.7 401.7 336 384 336C366.3 336 352 321.7 352 304z"
      ></path>
    </svg>
  );
}

export default Wallet;
