import { RootState } from "./state/store";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "./state/stepperSlice";

const App = () => {
  const step = useSelector((state: RootState) => state.stepper.step);
  const dispatch = useDispatch();

  return (
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
    </div>
  );
};

export default App;
