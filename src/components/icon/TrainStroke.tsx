import { IIcon } from "@/types/generalType";
import React from "react";

function TrainStroke({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="train"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M184 320C184 297.9 201.9 280 224 280C246.1 280 264 297.9 264 320C264 342.1 246.1 360 224 360C201.9 360 184 342.1 184 320zM352 0C405 0 448 42.98 448 96V352C448 394.8 420 431 381.4 443.4L408.1 471C418.3 480.4 418.3 495.6 408.1 504.1C399.6 514.3 384.4 514.3 375 504.1L318.1 448H129.9L72.97 504.1C63.6 514.3 48.4 514.3 39.03 504.1C29.66 495.6 29.66 480.4 39.03 471L66.63 443.4C27.98 431 0 394.8 0 352V96C0 42.98 42.98 0 96 0H352zM352 48H96C69.49 48 48 69.49 48 96V192H400V96C400 69.49 378.5 48 352 48zM96 400H352C378.5 400 400 378.5 400 352V240H48V352C48 378.5 69.49 400 96 400z"
      ></path>
    </svg>
  );
}

export default TrainStroke;
