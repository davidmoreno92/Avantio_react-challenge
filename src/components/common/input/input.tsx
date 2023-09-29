import React, { useRef } from "react";

type InputType = {
  name: string;
  label?: string;
  value?: string;
  type?: "text" | "number" | "tel" | "file";
  placeHolder?: string;
  required?: boolean;
  error?: string;
  multiple?: boolean;
  customRef?: React.RefObject<HTMLInputElement>;
  ariaLabeled?: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputType> = ({
  name,
  label,
  value,
  type = "text",
  placeHolder = "",
  required = false,
  error,
  multiple,
  customRef,
  ariaLabeled,
  onChangeInput,
  onBlur,
}) => {
  const internalRef = useRef<HTMLInputElement>(null);

  return (
    <label htmlFor={name}>
      {label || name} {required && <span>*</span>}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={name}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChangeInput}
        onBlur={onBlur}
        multiple={multiple}
        ref={customRef || internalRef}
        aria-label={ariaLabeled}
      />
      {error && <span className="text-red-400">{error}</span>}
    </label>
  );
};
