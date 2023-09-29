import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Textarea } from "./textarea";

describe("<Textarea/>", () => {
  const mockOnChange = vi.fn();
  const mockOnBlur = vi.fn();

  const testName = "test-input-name";
  const testError = "test-error";

  test("should render textarea", () => {
    render(<Textarea name={testName} onChangeText={mockOnChange} />);

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });

  test("should render with label", () => {
    const label = "differentTestName";
    render(
      <Textarea name={testName} label={label} onChangeText={mockOnChange} />
    );

    expect(screen.getByText(label)).toBeTruthy();
  });

  test("should render with placeholder", () => {
    const placeHolder = "placeHolder-test";
    render(
      <Textarea
        name={testName}
        onChangeText={mockOnChange}
        placeHolder={placeHolder}
      />
    );

    expect(screen.queryByPlaceholderText(placeHolder)).toBeTruthy();
  });

  test("should render with error", () => {
    render(
      <Textarea name={testName} onChangeText={mockOnChange} error={testError} />
    );

    expect(screen.getByText(testError)).toBeTruthy();
  });

  test("should call onChange", () => {
    render(<Textarea name={testName} onChangeText={mockOnChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "testValue" } });

    expect(mockOnChange).toBeCalledTimes(1);
  });

  test("should call onBlur", () => {
    render(
      <Textarea
        name={testName}
        onChangeText={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(mockOnBlur).toBeCalledTimes(1);
  });

  test("should print * if required is passed", () => {
    render(<Textarea name={testName} onChangeText={mockOnChange} required />);
    expect(screen.queryByText("*")).toBeTruthy();
  });

  test("should not print * by default", async () => {
    render(<Textarea name={testName} onChangeText={mockOnChange} />);

    expect(screen.queryByText("*")).toBeFalsy();
  });
});
