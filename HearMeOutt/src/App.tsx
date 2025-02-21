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
import HoeWerktHet from "./Components/HoeWerktHet/HoeWerktHet";
import NieuweVacature from "./Components/Bedrijf/NieuweVacature";
import VacaturePage from "./Components/Bedrijf/VacaturePage";
import Instellingen from "./Components/Instellingen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/gebruiker/aanmaken" element={<AccountRegistration />} />
        <Route path="/gebruiker/dashboard" element={<KlantDash />} />
        <Route path="/gebruiker/berichten" element={<CompanyMessagePage />} />
        <Route path="/hoe-werkt-het" element={<HoeWerktHet />} />
        <Route path="/instellingen" element={<Instellingen />} />
        <Route path="/vacature/:jobId" element={<JobPostingDescription />} />
        <Route
          path="/vacature/solliciteer/:casusId"
          element={<CasusReaction />}
        />

        <Route path="/bedrijf/aanmaken" element={<RegistrationBus />} />
        <Route path="/bedrijf/dashboard" element={<BusinessDash />} />
        <Route path="/bedrijf/berichten" element={<CompanyMessagePage />} />
        <Route path="/bedrijf/beheer-vacatures" element={<VacaturePage />} />
        <Route path="/bedrijf/nieuwe-vacature" element={<NieuweVacature />} />
      </Routes>
    </Router>
  );
}

export default App;
