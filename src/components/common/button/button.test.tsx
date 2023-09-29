import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("<Button/>", () => {
  const testName = "test-button-example";

  test("should render button", () => {
    render(<Button>{testName}</Button>);
    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });

  test("should render with extra classes", () => {
    const className = "testClass";
    render(<Button extraClasses={className}>{testName}</Button>);

    const buttonClasses = screen.getByRole("button").getAttribute("class");

    expect(buttonClasses).includes(className);
  });

  test("should render disabled button", () => {
    render(<Button disabled>{testName}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
  });

  test("should not render disabled button", () => {
    render(<Button>{testName}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", false);
  });

  test("should call onClickButton", () => {
    const mockClick = vi.fn();
    render(<Button onClickButton={mockClick}>{testName}</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
