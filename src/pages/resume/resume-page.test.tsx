import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { ResumePage } from "./resume-page";
import { store } from "../../state/store";

describe("<ResumePage/>", () => {
  test("should render page and print all content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ResumePage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Resume")).toBeTruthy();
    expect(screen.getByText("Accomodation")).toBeTruthy();
    expect(screen.getByText("Owner")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
