import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Textarea } from "./textarea";

describe("<Textarea/>", () => {
  const mockOnChange = vi.fn();

  const testName = "test-input-name";

  test("should render button", () => {
    render(<Textarea name={testName} onChangeText={mockOnChange} />);

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });
});
