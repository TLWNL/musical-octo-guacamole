import "./App.css";
import AccountRegistration from "./Components/AccountRegistration";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationBus from "./Components/RegistrationBus";
import KlantDash from "./Components/KlantDash";
import JobPostingDescription from "./Components/JobPostingDescription";
import CasusReaction from "./Components/Vacature/CasusReaction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gebruiker/aanmaken" element={<AccountRegistration />} />
        <Route path="/bedrijf/aanmaken" element={<RegistrationBus />} />
        <Route path="/gebruiker/dashboard" element={<KlantDash />} />
        <Route
          path="/vacature/testVacature"
          element={<JobPostingDescription />}
        />
        <Route
          path="/vacature/testVacature/casus"
          element={<CasusReaction />}
        />
      </Routes>
    </Router>
  );
}

export default App;
