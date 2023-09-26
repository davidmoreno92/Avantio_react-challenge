import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

describe("<App/>", () => {
  const initialState = { stepper: { step: 0 } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test("should print title", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Hello/i)).toBeDefined();
  });
});
