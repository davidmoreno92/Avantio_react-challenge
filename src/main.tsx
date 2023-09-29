import { createRoot } from "react-dom/client";
import r2wc from "@r2wc/react-to-web-component";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Provider } from "react-redux";

import { store } from "./state/store";

const WizardMF = r2wc(App);

customElements.define("wizard-mf", WizardMF);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
