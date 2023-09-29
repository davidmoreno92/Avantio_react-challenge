import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/common/button/button";
import { Input } from "../components/common/input/input";

import { ownerValidations } from "../validations/formValidations";
import { saveOwner } from "../state/formSlice";

export const OwnerPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    values,
    isValid,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      name: undefined,
      email: undefined,
      phone: undefined,
    },
    validationSchema: ownerValidations,
    onSubmit: () => {
      dispatch(saveOwner(values)) && navigate("/resume");
    },
  });

  const hasTouchedAnyField = Object.values(touched).some(
    (touched) => !!touched
  );

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Owner</h2>
      <form>
        <fieldset className="flex flex-col  gap-y-4">
          <Input
            name="name"
            label="Name"
            onChangeInput={handleChange}
            onBlur={handleBlur}
            error={errors?.name}
          />
          <Input
            name="email"
            label="Email"
            onChangeInput={handleChange}
            onBlur={handleBlur}
            error={errors?.email}
          />
          <Input
            name="phone"
            label="Phone"
            type="tel"
            onChangeInput={handleChange}
            onBlur={handleBlur}
            error={errors?.phone}
          />
          <Button
            disabled={!isValid || !hasTouchedAnyField}
            extraClasses="mt-5"
            onClickButton={() => handleSubmit()}
          >
            Next
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
