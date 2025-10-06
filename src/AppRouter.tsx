import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-condiciones" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}
