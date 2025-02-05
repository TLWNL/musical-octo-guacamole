import "./App.css";
import AccountRegistration from "./Components/AccountRegistration";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationBus from "./Components/Bedrijf/RegistrationBus";
import KlantDash from "./Components/KlantDash";
import JobPostingDescription from "./Components/JobPostingDescription";
import CasusReaction from "./Components/Vacature/CasusReaction";
import BusinessDash from "./BusinessDash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/gebruiker/aanmaken" element={<AccountRegistration />} />
        <Route path="/gebruiker/dashboard" element={<KlantDash />} />

        <Route path="/bedrijf/aanmaken" element={<RegistrationBus />} />
        <Route path="/bedrijf/dashboard" element={<BusinessDash />} />
        <Route path="/vacature/:jobId" element={<JobPostingDescription />} />
        <Route
          path="/vacature/soliciteer/:casusId"
          element={<CasusReaction />}
        />
      </Routes>
    </Router>
  );
}

export default App;
