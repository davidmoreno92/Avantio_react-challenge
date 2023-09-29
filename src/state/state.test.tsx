import { describe, expect, test } from "vitest";

import { FormType } from "../types/form-type";
import { store } from "./store";
import { saveAccomodation, saveOwner } from "./formSlice";

describe("Redux state", () => {
  const testState: FormType = {
    name: "",
    address: "",
    description: "",
    type: "",
    files: [],
    owner: {
      email: "",
      name: "",
      phone: undefined,
    },
  };

  test("should show empty store", () => {
    const state = store.getState().form;
    expect(state).toEqual(testState);
  });

  test("should change store by saveAccomodation", () => {
    const newValues = {
      ...testState,
      name: "testName",
      description: "test description",
    };

    const result = store.dispatch(saveAccomodation(newValues));

    expect(result.payload).toEqual(newValues);
    expect(store.getState().form).toEqual(newValues);
  });

  test("should change store by saveOwner", () => {
    const newValues = {
      ...testState,
      owner: {
        email: "test@test.com",
      },
    };

    const result = store.dispatch(saveOwner(newValues));

    expect(result.payload).toEqual(newValues);
  });
});
