import "./App.css";
import AccountRegistration from "./Components/AccountRegistration";
import LoginPage from "./Components/LoginPage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gebruiker/aanmaken" element={<AccountRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
