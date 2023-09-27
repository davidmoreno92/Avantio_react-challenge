import { AccomodationType } from "../types/accomodation-type";
import { PictureType } from "../types/picture-type";

export const ResumePage: React.FC = () => {
  const resume: AccomodationType = {
    name: "Accomodation name",
    address: "Address 123, 456, Spain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat nunc id tempus luctus. Fusce sed massa posuere dui finibus finibus sagittis vel ante. Pellentesque eget accumsan augue. Suspendisse tincidunt sollicitudin neque, nec ornare justo sodales in. Donec in erat posuere, blandit libero sit amet, scelerisque ante. Pellentesque in congue quam. Etiam cursus elit nisi, at efficitur velit commodo at. Ut libero sem, euismod sed sagittis a, scelerisque a massa. Curabitur rhoncus ligula dolor, nec dictum dui elementum eget. Etiam non augue velit. Donec venenatis quis sem at interdum.",
    type: "Accomodation type",
    photos: [{ url: "assets/pic.jpg" }, { url: "assets/pic.jpg" }],
  };

  const owner = {
    name: "Name Surname",
    email: "email@email.com",
    phone: "123456789",
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Resume</h2>
      <div className="flex flex-col gap-y-2">
        <h3>Accomodation</h3>
        {generateResume(resume)}
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Owner</h3>
        {generateResume(owner)}
      </div>
    </div>
  );
};

const generateResume = (object: object) => {
  return Object.entries(object).map((field) => {
    const fieldIsArray = field[1] instanceof Array;

    const isPrintableValue =
      typeof field[1] === "string" || typeof field[1] === "number";

    return (
      <span key={field[0]}>
        <b className="capitalize">{field[0]}:</b>

        {fieldIsArray
          ? Object.entries(
              (field[1] as PictureType[]).map((subField) => {
                return <img key={subField.url} src={subField.url} />;
              })
            )
          : isPrintableValue
          ? (field[1] as string)
          : ""}
      </span>
    );
  });
};
