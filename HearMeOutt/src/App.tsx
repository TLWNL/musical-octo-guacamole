import "./App.css";
import AccountRegistration from "./Components/AccountRegistration";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationBus from "./Components/Bedrijf/RegistrationBus";
import KlantDash from "./Components/KlantDash";
import JobPostingDescription from "./Components/JobPostingDescription";
import CasusReaction from "./Components/Vacature/CasusReaction";
import BusinessDash from "./BusinessDash";
import CompanyMessagePage from "./Components/Bedrijf/CompanyMessagePage";
import ClientMessagePage from "./Components/Klant/ClientMessagePage";

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
          path="/vacature/solliciteer/:casusId"
          element={<CasusReaction />}
        />
        <Route path="/bedrijf/berichten" element={<CompanyMessagePage />} />
        <Route path="/klant/berichten" element={<ClientMessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
