import { Routes, Route, Navigate } from "react-router-dom";

import { AccomodationPage } from "./pages/accomodation/accomodation-page";
import { OwnerPage } from "./pages/owner/owner-page";
import { ResumePage } from "./pages/resume/resume-page";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AccomodationPage />} />
      <Route path="owner" element={<OwnerPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
