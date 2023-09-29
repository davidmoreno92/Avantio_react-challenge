import { useSelector } from "react-redux";

import { Button } from "../../components/common/button/button";

import { RootState } from "../../state/store";

export const ResumePage: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);

  const { owner: _, ...accomodationResume } = formData;
  _;

  const handleSubmit = () => {
    console.log("Form data", formData);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Resume</h2>
      <div className="flex flex-col gap-y-2">
        <h3>Accomodation</h3>
        {generateResume(accomodationResume)}
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Owner</h3>
        {generateResume(formData.owner)}
      </div>
      <Button extraClasses="mt-5" onClickButton={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

//TODO: Create a component to display generateResume if reused.
const generateResume = (object: object) => {
  return Object.entries(object).map((field) => {
    const key = field[0];
    const value = field[1];
    const fieldIsArray = value instanceof Array;

    const isPrintableValue =
      typeof field[1] === "string" || typeof field[1] === "number";

    return (
      value && (
        <span key={key}>
          <b className="capitalize">{key}: </b>

          {fieldIsArray
            ? value.map((image: string) => {
                return <img key={image} src={image} />;
              })
            : isPrintableValue
            ? (value as string)
            : ""}
        </span>
      )
    );
  });
};
