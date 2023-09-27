import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("<Button/>", () => {
  const testName = "test-button-example";

  test("should render button", () => {
    render(<Button>{testName}</Button>);

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });

  test("should render with extra classes", () => {});

  test("should render disabled button", () => {});

  test("should call onClickButton", () => {});
});
