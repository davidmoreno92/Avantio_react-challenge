import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AccomodationPage } from "./pages/accomodation/accomodation-page";
import { OwnerPage } from "./pages/owner/owner-page";
import { ResumePage } from "./pages/resume/resume-page";

import { store } from "./state/store";

import "./assets/index.css";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<AccomodationPage />} />
            <Route path="owner" element={<OwnerPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </Provider>
  );
};
