import * as React from "react";

const QuoteIcon: React.FC<React.SVGProps<SVGElement>> = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="24"
    fill="none"
    viewBox="0 0 27 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.08"
      d="M5.317 0h5.65l-3.49 12.993H0zM0 24V12.993h11.63V24zM20.686 0h5.65l-3.49 12.993H15.37zM15.37 24V12.993H27V24z"
    ></path>
  </svg>
);

export default QuoteIcon;
