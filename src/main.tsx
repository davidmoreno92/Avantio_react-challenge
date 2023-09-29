import { createRoot } from "react-dom/client";
import r2wc from "@r2wc/react-to-web-component";

import { App } from "./App";

const WizardMF = r2wc(App);

customElements.define("wizard-mf", WizardMF);

createRoot(document.getElementById("root")!).render(<App />);
