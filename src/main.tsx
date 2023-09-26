import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";

import { store } from "./state/store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
