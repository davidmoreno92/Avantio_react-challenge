import { Routes, Route } from "react-router-dom";

import { AccomodationPage } from "./pages/accomodation-page";
import { OwnerPage } from "./pages/owner-page";
import { ResumePage } from "./pages/resume-page";

const App = () => {
  /*  const step = useSelector((state: RootState) => state.stepper.step);
  const dispatch = useDispatch();

  {
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{step}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>;
  } */

  return (
    <Routes>
      <Route path="accomodation" element={<AccomodationPage />} />
      <Route path="owner" element={<OwnerPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="*" element={<AccomodationPage />} />
    </Routes>
  );
};

export default App;
