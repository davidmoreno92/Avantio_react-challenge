import React, { useRef } from "react";

import { MAX_FILE_SIZE } from "../../../../validations/stepperValidations";

import { Input } from "../input";

type InputType = {
  name: string;
  label?: string;
  value?: string;
  type?: "text" | "number" | "tel" | "file";
  placeHolder?: string;
  required?: boolean;
  error?: string;
  multiple?: boolean;
  onChangeInput: (files?: string[], error?: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const InputFile: React.FC<InputType> = ({
  name,
  label,
  value,
  placeHolder = "",
  required = false,
  error,
  multiple,
  onChangeInput,
  onBlur,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (!files || files.length === 0) return;

    if (files.length > 2) {
      onChangeInput(undefined, "You can send a maximum of two files.");
      return fileRef.current && (fileRef.current.value = "");
    }

    const imagesUrl: string[] = [];

    Array.from(files).forEach((file) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > MAX_FILE_SIZE || img.height > MAX_FILE_SIZE) {
          if (files.length > 1) {
            onChangeInput(
              undefined,
              "At least one file is too big. Max w/h 500x500"
            );
          } else {
            onChangeInput(undefined, "File is too big.  Max w/h 500x500");
          }

          return fileRef.current && (fileRef.current.value = "");
        }
      };
      img.src = objectUrl;
      imagesUrl.push(objectUrl);
    });

    return onChangeInput(imagesUrl);
  };

  return (
    <Input
      type="file"
      placeHolder={placeHolder || ""}
      name={name}
      label={label}
      value={value}
      onChangeInput={handleFileChange}
      multiple={multiple}
      customRef={fileRef}
      error={error}
      required={required}
      onBlur={onBlur}
    />
  );
};
