import { IIcon } from "@/types/generalType";
import React from "react";

function SmaillTrain({ width, height, color, className }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      focusable="false"
      data-prefix="fa-mrbilit"
      data-icon="trainSide"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M487.3,359.5h-387c-13.5,0-26.4-6.3-34.6-16.9c-11.1-14.2-16.7-30.4-16.7-48c0-33.8,8.9-54.7,14.7-64.9H302  c46.6,0,84.5-38,84.5-84.5v-31.5c0-18.8-15.2-34.1-34.1-34.1h-96.7l0.9-0.7c23.5-18,52.8-27.9,82.5-27.9h148.3  c13.6,0,24.6-10.9,24.6-24.6c0-13.6-10.9-24.6-24.6-24.6H339.2c-40.4,0-80.3,13.5-112.3,38.1L35.5,186.7c-1.1,0.8-2.1,1.7-3.1,2.8  C29.1,193.1,0,226.4,0,294.6C0,323,9.3,350,26.9,372.7c17.4,22.5,44.9,35.9,73.5,35.9h20.1c-3.1,8.2-4.8,17.1-4.8,26.3  c0,41.4,33.8,75.2,75.2,75.2c32,0,59.4-20.2,70.3-48.5c10.8,28.3,38.3,48.5,70.3,48.5c41.4,0,75.2-33.8,75.2-75.2  c0-9.2-1.7-18.1-4.8-26.3h85.5c13.6,0,24.6-10.9,24.6-24.6C511.9,370.4,500.9,359.5,487.3,359.5z M337.4,128.8v16.5  c0,19.5-15.9,35.4-35.4,35.4H124l67.6-51.9H337.4z M190.8,461c-14.4,0-26.1-11.7-26.1-26.1s11.7-26.1,26.1-26.1  c14.4,0,26.1,11.7,26.1,26.1S205.1,461,190.8,461z M331.4,461c-14.4,0-26.1-11.7-26.1-26.1s11.7-26.1,26.1-26.1  c14.4,0,26.1,11.7,26.1,26.1S345.7,461,331.4,461z"
      ></path>
    </svg>
  );
}

export default SmaillTrain;
