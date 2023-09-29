import { createSlice } from "@reduxjs/toolkit";
import { OwnerType } from "../types/owner-type";

export type FormState = {
  name: string;
  address: string;
  description: string;
  type: string;
  files: string[];
  owner: OwnerType;
};

const initialState: FormState = {
  name: "",
  address: "",
  description: "",
  type: "",
  files: [],
  owner: {
    name: "",
    email: "",
    phone: undefined,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveAccomodation: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.description = action.payload.description;
      state.type = action.payload.type;
      state.files = action.payload.files;
    },
    saveOwner: (state, action) => {
      state.owner.email = action.payload.email;
      state.owner.name = action.payload.name;
      state.owner.phone = action.payload.phone;
    },
  },
});

export const { saveAccomodation, saveOwner } = formSlice.actions;

export default formSlice.reducer;
