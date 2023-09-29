import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { AnimatedPage } from "./animated-page";

describe("<AnimatedPage/>", () => {
  const content = "content";

  test("should render with children", () => {
    render(<AnimatedPage>{content}</AnimatedPage>);
    expect(screen.getByText(content)).toBeTruthy();
  });
});
