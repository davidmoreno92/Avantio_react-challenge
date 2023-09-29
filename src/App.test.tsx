import { describe, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

describe("<App/>", () => {
  test("should render App", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
});
