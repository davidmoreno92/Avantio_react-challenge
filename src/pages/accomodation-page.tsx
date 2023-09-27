import { Button } from "../components/common/button/button";
import { Input } from "../components/common/input/input";

export const AccomodationPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Accomodation</h2>
      <form>
        <fieldset className="flex flex-col  gap-y-4">
          <Input name="Name" />
          <Input name="Address" />
          <Input name="Description" />
          <Button
            onClickButton={() => {
              console.log("onClick");
            }}
            extraClasses="mt-5"
          >
            <>Next</>
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
