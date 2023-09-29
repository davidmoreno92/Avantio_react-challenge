import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { InputFile } from "./input-file";

describe("<InputFile/>", () => {
  const mockOnChange = vi.fn();

  const testName = "test-input-name";

  test("should render button", () => {
    render(<InputFile name={testName} onChangeInput={mockOnChange} />);

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });
});
