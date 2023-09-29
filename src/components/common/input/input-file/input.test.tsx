import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "./input";

describe("<Input/>", () => {
  const mockOnChange = vi.fn();
  const mockOnBlur = vi.fn();

  const testName = "test-input-name";
  const error = "Test error";

  test("should render input", () => {
    render(<Input name={testName} onChangeInput={mockOnChange} />);

    expect(screen.getByText(testName)).toBeDefined();
  });

  test("should render with label", () => {
    const label = "differentTestName";
    render(
      <Input name={testName} label={label} onChangeInput={mockOnChange} />
    );

    expect(screen.getByText(label)).toBeTruthy();
  });

  test("should render with placeholder", () => {
    const placeHolder = "placeHolder-test";
    render(
      <Input
        name={testName}
        placeHolder={placeHolder}
        onChangeInput={mockOnChange}
      />
    );

    expect(screen.queryByPlaceholderText(placeHolder)).toBeTruthy();
  });

  test("should render with type", () => {
    const type: "text" | "number" | "tel" | "file" = "number";
    render(<Input name={testName} type={type} onChangeInput={mockOnChange} />);

    expect(screen.getByLabelText(testName).getAttribute("type")).toBe(type);
  });

  test("should render with error", () => {
    render(
      <Input name={testName} error={error} onChangeInput={mockOnChange} />
    );

    expect(screen.getByText(error)).toBeTruthy();
  });

  test("should call onChange", () => {
    render(
      <Input name={testName} error={error} onChangeInput={mockOnChange} />
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "testValue" } });

    expect(mockOnChange).toBeCalledTimes(1);
  });

  test("should call onBlur", () => {
    render(
      <Input
        name={testName}
        error={error}
        onChangeInput={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(mockOnBlur).toBeCalledTimes(1);
  });
});
