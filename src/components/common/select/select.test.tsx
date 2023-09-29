import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Select } from "./select";

describe("<Select/>", () => {
  const mockOnChangeSelect = vi.fn();

  const mockedOptions = ["option1", "option2", "option3"];
  const testName = "test-select-name";

  test("should render button", () => {
    render(
      <Select
        name={testName}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    expect(screen.getByText(new RegExp(testName, "i"))).toBeDefined();
  });
});
