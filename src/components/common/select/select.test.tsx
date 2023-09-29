import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Select } from "./select";

describe("<Select/>", () => {
  const mockOnChangeSelect = vi.fn();
  const mockOnBlur = vi.fn();

  const mockedOptions = ["option1", "option2", "option3"];
  const testName = "test-select-name";
  const error = "Test error";

  test("should render select", () => {
    render(
      <Select
        name={testName}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    expect(screen.getByText(testName)).toBeDefined();
  });

  test("should render with label", () => {
    const label = "differentTestName";
    render(
      <Select
        name={testName}
        label={label}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    expect(screen.getByText(label)).toBeTruthy();
  });

  test("should render with all options", () => {
    render(
      <Select
        name={testName}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );
    mockedOptions.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeTruthy();
    });
  });

  test("should render with error", () => {
    render(
      <Select
        name={testName}
        error={error}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    expect(screen.getByText(error)).toBeTruthy();
  });

  test("should call onChange", () => {
    render(
      <Select
        name={testName}
        error={error}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: mockedOptions[2] } });

    expect(mockOnChangeSelect).toBeCalledTimes(1);
  });

  test("should call onBlur", () => {
    render(
      <Select
        name={testName}
        error={error}
        onChangeSelect={mockOnChangeSelect}
        onBlur={mockOnBlur}
        options={mockedOptions}
      />
    );

    const input = screen.getByRole("combobox");
    fireEvent.blur(input);

    expect(mockOnBlur).toBeCalledTimes(1);
  });

  test("should print * if required is passed", () => {
    render(
      <Select
        name={testName}
        error={error}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
        required
      />
    );
    expect(screen.queryByText("*")).toBeTruthy();
  });

  test("should not print * by default", async () => {
    render(
      <Select
        name={testName}
        error={error}
        onChangeSelect={mockOnChangeSelect}
        options={mockedOptions}
      />
    );

    expect(screen.queryByText("*")).toBeFalsy();
  });
});
