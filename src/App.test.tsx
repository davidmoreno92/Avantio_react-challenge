import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { describe, test } from "vitest";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  const initialState = { stepper: { step: 0 } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test("should render App", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    /* 
    expect(screen.getByText(/Hello/i)).toBeDefined(); */
  });
});
