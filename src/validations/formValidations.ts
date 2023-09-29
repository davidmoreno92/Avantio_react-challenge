import * as Yup from "yup";

export const MAX_FILE_SIZE = 500;

export const accomodationValidations = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/)
    .min(4)
    .max(128)
    .required(),
  address: Yup.string().min(3).max(45).required(),
  description: Yup.string()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .matches(
      /^[a-zA-Z]{128,2048}$/,
      "Field must be either empty or have between 128 and 2048 characters"
    ),
  type: Yup.string().required("You must select an option"),
});

export const ownerValidations = Yup.object().shape({
  name: Yup.string().min(4).max(64).required(),
  email: Yup.string().email().required(),
  phone: Yup.string()
    .nullable()
    .matches(/^\d{0,9}$/, "Field must be a number and up to 9 digits"),
});
