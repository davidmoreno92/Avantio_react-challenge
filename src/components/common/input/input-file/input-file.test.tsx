import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { InputFile } from "./input-file";

describe("<InputFile/>", () => {
  const mockOnChange = vi.fn();
  const mockOnBlur = vi.fn();

  const testName = "test-input-name";
  const error = "Test error";

  test("should render input", () => {
    render(<InputFile name={testName} onChangeInput={mockOnChange} />);

    expect(screen.getByText(testName)).toBeDefined();
  });

  test("should render with label", () => {
    const label = "differentTestName";
    render(
      <InputFile name={testName} label={label} onChangeInput={mockOnChange} />
    );

    expect(screen.getByText(label)).toBeTruthy();
  });

  test("should render with placeholder", () => {
    const placeHolder = "placeHolder-test";
    render(
      <InputFile
        name={testName}
        placeHolder={placeHolder}
        onChangeInput={mockOnChange}
      />
    );

    expect(screen.queryByPlaceholderText(placeHolder)).toBeTruthy();
  });

  test("should render with error", () => {
    render(
      <InputFile name={testName} error={error} onChangeInput={mockOnChange} />
    );

    expect(screen.getByText(error)).toBeTruthy();
  });

  test("should call onBlur", () => {
    render(
      <InputFile
        name={testName}
        error={error}
        onChangeInput={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const input = screen.getByLabelText(testName);
    fireEvent.blur(input);

    expect(mockOnBlur).toBeCalledTimes(1);
  });

  test("should call onChange", () => {
    render(
      <InputFile
        name={testName}
        error={error}
        onChangeInput={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const input = screen.getByLabelText(testName);
    fireEvent.change(input, { target: { files: file } });

    expect(mockOnChange).toBeCalledTimes(1);
  });
});
