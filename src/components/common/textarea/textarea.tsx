import React, { useRef } from "react";

type TextareaType = {
  name: string;
  label?: string;
  value?: string;
  placeHolder?: string;
  required?: boolean;
  error?: string;
  customRef?: React.RefObject<HTMLTextAreaElement>;
  onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: React.FC<TextareaType> = ({
  name,
  label,
  value,
  placeHolder = "",
  required = false,
  error,
  customRef,
  onChangeText,
  onBlur,
}) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);

  return (
    <label htmlFor={name}>
      {label || name} {required && "*"}
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={name}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChangeText}
        onBlur={onBlur}
        ref={customRef || internalRef}
      >
        {value}
      </textarea>
      {error && <span className="text-red-400">{error}</span>}
    </label>
  );
};
