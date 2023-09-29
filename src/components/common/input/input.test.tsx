import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Input } from "./input";

describe("<Input/>", () => {
  const mockOnChange = vi.fn();

  const testName = "test-input-name";

  test("should render button", () => {
    render(<Input name={testName} onChangeInput={mockOnChange} />);

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });
  test("should render with value", () => {});
  test("should render with placeholder", () => {});
  test("should render with type", () => {});
  test("should render with required flag", () => {});
  test("should validate depending in input type", () => {});
});
