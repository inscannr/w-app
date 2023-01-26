import React from "react";

type Props = {
  children: React.ReactNode;
  buttonType: "primary" | "secondary";
  onClick?: () => void;
};

function Button({ children, buttonType, onClick }: Props) {
  let buttonStyle;

  switch (buttonType) {
    case "primary":
      buttonStyle =
        "w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      break;
    case "secondary":
      buttonStyle =
        "w-full rounded-md border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 border shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    default:
      "w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
