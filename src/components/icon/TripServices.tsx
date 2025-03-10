import { IIcon } from "@/types/generalType";
import React from "react";

function TripServices({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      focusable="false"
      data-prefix="far"
      data-icon="suitcase-rolling"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill={color}
        d="M296.2 336h-144c-13.2 0-24 10.8-24 24c0 13.2 10.8 24 24 24h144c13.2 0 24-10.8 24-24C320.2 346.8 309.4 336 296.2 336zM296.2 224h-144c-13.2 0-24 10.8-24 24c0 13.2 10.8 24 24 24h144c13.2 0 24-10.8 24-24C320.2 234.8 309.4 224 296.2 224zM352.1 128h-32.07l.0123-80c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48L128 128H96.12c-35.35 0-64 28.65-64 64v224c0 35.35 28.58 64 63.93 64c0 17.67 14.4 32 32.07 32s31.94-14.33 31.94-32h128c0 17.67 14.39 32 32.06 32s31.93-14.33 31.93-32c35.35 0 64.07-28.65 64.07-64V192C416.1 156.7 387.5 128 352.1 128zM176.1 48h96V128h-96V48zM368.2 416c0 8.836-7.164 16-16 16h-256c-8.836 0-16-7.164-16-16V192c0-8.838 7.164-16 16-16h256c8.836 0 16 7.162 16 16V416z"
      ></path>
    </svg>
  );
}

export default TripServices;
