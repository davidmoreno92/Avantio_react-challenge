import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { OwnerPage } from "./owner-page";
import { store } from "../../state/store";

describe("<OwnerPage/>", () => {
  test("should render page and print all content", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OwnerPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Owner")).toBeTruthy();
    const fieldsNumber = (await screen.findAllByRole("textbox")).length;
    const button = (await screen.findAllByRole("button")).length;

    expect(fieldsNumber).toEqual(3);
    expect(button).toEqual(1);
  });

  //TODO: More tests.. mock state, test values are printed when changing, validations are correct..
});
