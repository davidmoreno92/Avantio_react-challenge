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

    const sendButton = screen.getByRole("button", { name: "Submit" });

    expect(screen.getByText("Resume")).toBeTruthy();
    expect(screen.getByText("Accomodation")).toBeTruthy();
    expect(screen.getByText("Owner")).toBeTruthy();
    expect(sendButton).toBeTruthy();
  });

  //TODO: More tests.. mock state, test values are printed, send form and recieve log.
});
