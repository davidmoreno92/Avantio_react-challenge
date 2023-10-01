import { describe, test } from "vitest";

import { render } from "@testing-library/react";

import { App } from "./App";

describe("<App/>", () => {
  test("should render App", () => {
    render(<App />);
  });
});
