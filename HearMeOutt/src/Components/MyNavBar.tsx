import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useState } from "react";

const MyNavbar = () => {
  // State for toggle between "Bedrijf" and "Klant"
  const [role, setRole] = useState("Klant");

  // Determine the correct path based on selected role
  const dashboardLink =
    role === "Klant" ? "/gebruiker/dashboard" : "/bedrijf/dashboard";

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      style={{ width: "100%" }}
    >
      <Container fluid>
        {/* Brand with Role Toggle */}
        <Navbar.Brand href="#" className="d-flex align-items-center gap-3">
          HEAR ME OUT
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="role-dropdown"
              style={{
                padding: "0.5rem",
                fontWeight: "600",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              {role}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setRole("Bedrijf")}>
                Bedrijf
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setRole("Klant")}>
                Klant
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Brand>

        {/* Navbar Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center" // Center the links
        >
          <Nav className="d-flex gap-5">
            <Nav.Link href={dashboardLink} style={{ fontSize: "18px" }}>
              DASHBOARD
            </Nav.Link>
            <Nav.Link href="#instellingen" style={{ fontSize: "18px" }}>
              INSTELLINGEN
            </Nav.Link>
            <Nav.Link href="#berichten" style={{ fontSize: "18px" }}>
              BERICHTEN
            </Nav.Link>
            <Nav.Link href="#hoe-werkt-het" style={{ fontSize: "18px" }}>
              HOE WERKT HET
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right Icons */}
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faBell} size="lg" className="text-dark" />
          <FontAwesomeIcon icon={faUser} size="lg" className="text-dark" />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
