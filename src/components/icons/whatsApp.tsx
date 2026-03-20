import * as React from "react";

const WhatsAppIcon: React.FC<React.SVGProps<SVGElement>> = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g stroke="#fff" strokeWidth="1.5" clipPath="url(#clip0_1582_3054)">
      <path
        strokeLinejoin="round"
        d="M7 12.833a5.833 5.833 0 1 0-5.376-3.565c.163.385.244.578.254.723s-.032.306-.118.626l-.593 2.216 2.216-.593c.32-.085.48-.128.626-.118s.338.091.724.254A5.8 5.8 0 0 0 7 12.833Z"
      ></path>
      <path d="m5.01 7.22.507-.63c.215-.267.48-.514.5-.868.005-.09-.058-.491-.184-1.294-.049-.316-.344-.344-.599-.344-.332 0-.499 0-.664.075a.95.95 0 0 0-.47.588c-.037.178-.01.3.046.545a6.04 6.04 0 0 0 1.64 2.922 6.04 6.04 0 0 0 2.922 1.64c.245.055.367.083.545.046a.95.95 0 0 0 .588-.47c.075-.165.075-.332.075-.664 0-.256-.028-.55-.344-.6-.803-.126-1.204-.188-1.294-.183-.354.02-.601.285-.867.5l-.631.507"></path>
    </g>
    <defs>
      <clipPath id="clip0_1582_3054">
        <path fill="#fff" d="M0 0h14v14H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default WhatsAppIcon;
