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
      buttonStyle = "bg-indigo-600 text-white";
      break;
    case "secondary":
      buttonStyle =
        "border-indigo-600 text-indigo-600 border hover:text-white dark:text-slate-200";
    default:
      break;
  }

  return (
    <button
      className={`w-full rounded-md px-3.5 py-1.5 text-sm font-semibold leading-7 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-base ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
