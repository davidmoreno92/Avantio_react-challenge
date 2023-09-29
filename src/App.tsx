import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { AccomodationPage } from "./pages/accomodation/accomodation-page";
import { OwnerPage } from "./pages/owner/owner-page";
import { ResumePage } from "./pages/resume/resume-page";

import "./assets/index.css";

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AccomodationPage />} />
        <Route path="owner" element={<OwnerPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};
