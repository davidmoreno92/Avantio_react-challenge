import r2wc from "@r2wc/react-to-web-component";
import { App } from "./App";

// eslint-disable-next-line react-refresh/only-export-components
const WizardMF = r2wc(App);

customElements.define("wizard-mf", WizardMF);
