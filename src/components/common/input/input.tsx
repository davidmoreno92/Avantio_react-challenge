import React from "react";

type InputType = {
  name: string;
  value?: string;
  type?: "text" | "number" | "tel";
  placeHolder?: string;
  required?: boolean;
};

export const Input: React.FC<InputType> = ({
  name,
  value,
  type = "text",
  placeHolder = "",
  required = true,
}) => {
  return (
    <label htmlFor={name}>
      {name}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={name}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        required={required}
        pattern={type === "tel" ? "[+]{1}[0-9]{11,14}" : undefined}
      />
    </label>
  );
};
