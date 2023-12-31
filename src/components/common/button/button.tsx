import React, { ReactNode } from "react";

type ButtonType = {
  disabled?: boolean;
  onClickButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  extraClasses?: string;
};

export const Button: React.FC<ButtonType> = ({
  disabled = false,
  onClickButton,
  children,
  extraClasses = "",
}) => {
  return (
    <button
      id="button"
      type="button"
      onClick={onClickButton}
      className={`inline-block w-full py-3 px-4 leading-none text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white rounded shadow  ${
        disabled &&
        "bg-grey-400 hover:bg-slate-300 text-slate-900 hover:text-slate-900 border-neutral-600"
      } ${extraClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
