import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { AccomodationPage } from "./accomodation-page";
import { store } from "../../state/store";

describe("<AccomodationPage/>", () => {
  test("should render page and print all content", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AccomodationPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Accomodation")).toBeTruthy();
    const fieldsNumber = (await screen.findAllByRole("textbox")).length;
    const comboboxNumber = screen.getByRole("combobox");
    const files = screen.getByLabelText("files");
    const button = screen.getByRole("button");

    expect(fieldsNumber).toEqual(3);
    expect(comboboxNumber).toBeTruthy();
    expect(files).toBeTruthy();
    expect(button).toBeTruthy();
  });

  //TODO: More tests.. mock state, test values are printed when changing, validations are correct..
});
