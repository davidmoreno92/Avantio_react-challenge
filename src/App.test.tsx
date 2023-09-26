import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  test("should print title", () => {
    render(<App />);

    expect(screen.getByText(/Hello/i)).toBeDefined();
  });
});
