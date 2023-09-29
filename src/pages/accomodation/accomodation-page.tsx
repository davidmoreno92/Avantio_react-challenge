import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/common/button/button";
import { Input } from "../../components/common/input/input";
import { InputFile } from "../../components/common/input/input-file/input-file";
import { Select } from "../../components/common/select/select";
import { Textarea } from "../../components/common/textarea/textarea";

import { TypeOptions } from "../../types/form-type";

import { accomodationValidations } from "../../validations/formValidations";
import { saveAccomodation } from "../../state/formSlice";

export const AccomodationPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorImage, setErrorImage] = useState<string>();

  const {
    values,
    isValid,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      name: undefined,
      address: undefined,
      description: undefined,
      type: undefined,
      files: [],
    },
    validationSchema: accomodationValidations,
    onSubmit: () => {
      console.log(values);
      dispatch(saveAccomodation(values)) && navigate("owner");
    },
  });

  const typeOptions = Object.values(TypeOptions);

  const hasTouchedAnyField = Object.values(touched).some(
    (touched) => !!touched
  );

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Accomodation</h2>
      <form>
        <fieldset className="flex flex-col  gap-y-4">
          <Input
            name="name"
            label="Name"
            error={errors.name}
            onChangeInput={handleChange}
            onBlur={handleBlur}
            required
          />
          <Input
            name="address"
            label="Address"
            error={errors.address}
            onChangeInput={handleChange}
            onBlur={handleBlur}
            required
          />
          <Textarea
            name="description"
            label="Description"
            error={errors.description}
            onChangeText={handleChange}
            onBlur={handleBlur}
          />
          <Select
            name="type"
            label="Type"
            onChangeSelect={handleChange}
            onBlur={handleBlur}
            error={errors.type}
            options={typeOptions}
            required
          />
          <InputFile
            name="files"
            label="Files"
            type="file"
            error={errorImage}
            multiple
            onChangeInput={(files, error) => {
              if (error) return setErrorImage(error);

              errorImage && setErrorImage(undefined);
              return setFieldValue("files", files);
            }}
            onBlur={handleBlur}
          />
          <Button
            disabled={!isValid || !!errorImage || !hasTouchedAnyField}
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
