import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/common/button/button";
import { Input } from "../components/common/input/input";
import { Select } from "../components/common/select/select";

import { accomodationValidations } from "../validations/stepperValidations";

import { TypeOptions } from "../types/accomodation-type";

export const AccomodationPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [images, setImages] = useState<File[]>();
  const [errorImage, setErrorImage] = useState<string>();

  const { values, isValid, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      address: "",
      description: "",
      type: "",
    },
    validationSchema: accomodationValidations,
    onSubmit: () => {
      dispatch(values) && navigate("owner");
    },
  });

  const typeOptions = Object.values(TypeOptions);

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Accomodation</h2>
      <form>
        <fieldset className="flex flex-col  gap-y-4">
          <Input
            name="name"
            error={errors.name}
            onChangeInput={handleChange}
            required
          />
          <Input
            name="address"
            error={errors.address}
            onChangeInput={handleChange}
            required
          />
          <Input
            name="description"
            error={errors.description}
            onChangeInput={handleChange}
          />
          <Select
            name="type"
            onChangeSelect={handleChange}
            error={errors.type}
            options={typeOptions}
            required
          />
          <Input
            name="images"
            type="file"
            error={errorImage}
            multiple
            onChangeInputFile={(image, error) => {
              if (error) {
                setImages([]);
                return setErrorImage(error);
              }

              setErrorImage(undefined);
              return setImages((oldImages) => [...(oldImages || []), image]);
            }}
          />
          <Button
            disabled={!isValid}
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
