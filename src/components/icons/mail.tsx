import * as React from "react";

const MailIcon: React.FC<React.SVGProps<SVGElement>> = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#clip0_1582_3059)"
    >
      <path
        strokeLinecap="round"
        d="m4.083 4.959 1.716 1.014c1 .592 1.4.592 2.401 0L9.916 4.96"
      ></path>
      <path d="M1.176 7.86c.038 1.789.057 2.683.717 3.345s1.578.686 3.415.732c1.132.028 2.253.028 3.385 0 1.836-.046 2.755-.07 3.414-.732s.68-1.556.717-3.344q.02-.861 0-1.722c-.038-1.788-.057-2.682-.717-3.345-.66-.662-1.578-.685-3.414-.731a67 67 0 0 0-3.385 0c-1.837.046-2.755.069-3.415.731-.66.663-.679 1.557-.717 3.345a40 40 0 0 0 0 1.722Z"></path>
    </g>
    <defs>
      <clipPath id="clip0_1582_3059">
        <path fill="#fff" d="M0 0h14v14H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default MailIcon;
