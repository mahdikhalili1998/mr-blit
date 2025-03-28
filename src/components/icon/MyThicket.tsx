import { IIcon } from "@/types/generalType";
import React from "react";

function MyThicket({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="ticket"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M128 192C128 174.3 142.3 160 160 160H416C433.7 160 448 174.3 448 192V320C448 337.7 433.7 352 416 352H160C142.3 352 128 337.7 128 320V192zM400 208H176V304H400V208zM576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128zM48 172.8C76.69 189.4 96 220.5 96 256C96 291.5 76.69 322.6 48 339.2V384C48 392.8 55.16 400 64 400H512C520.8 400 528 392.8 528 384V339.2C499.3 322.6 480 291.5 480 256C480 220.5 499.3 189.4 528 172.8V128C528 119.2 520.8 112 512 112H64C55.16 112 48 119.2 48 128V172.8z"
      ></path>
    </svg>
  );
}

export default MyThicket;
