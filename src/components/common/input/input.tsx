import React, { useRef } from "react";

import { MAX_FILE_SIZE } from "../../../validations/stepperValidations";

type InputType = {
  name: string;
  value?: string;
  type?: "text" | "number" | "tel" | "file";
  placeHolder?: string;
  required?: boolean;
  error?: string;
  multiple?: boolean;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInputFile?: (newFile: File, error?: string) => void;
};

export const Input: React.FC<InputType> = ({
  name,
  value,
  type = "text",
  placeHolder = "",
  required = false,
  error,
  onChangeInput,
  onChangeInputFile,
  multiple,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("handlefilechange");

    if (
      !e.currentTarget.files ||
      e.currentTarget.files.length === 0 ||
      !onChangeInputFile
    )
      return;

    Array.from(e.currentTarget.files).forEach((file) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = function () {
        if (img.width > MAX_FILE_SIZE || img.height > MAX_FILE_SIZE) {
          if (
            e.currentTarget &&
            e.currentTarget.files &&
            e.currentTarget.files.length > 1
          ) {
            return onChangeInputFile(
              file,
              "At least one file is too big. Max w/h 500x500"
            );
          }
          onChangeInputFile(file, "file is too big");
          return ref.current && (ref.current.value = "");
        }

        return onChangeInputFile(file);
      };
      img.src = objectUrl;
    });
  };

  return (
    <label htmlFor={name}>
      {name} {required && "*"}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={name}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={
          onChangeInputFile ? (e) => handleFileChange(e) : () => onChangeInput
        }
        multiple={multiple}
        ref={ref}
      />
      {error && <span className="text-red-400">{error}</span>}
    </label>
  );
};
