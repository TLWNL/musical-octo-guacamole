import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MyNavbar = ({ chosenRole }: { chosenRole: "Klant" | "Bedrijf" }) => {
  const [role, setRole] = useState<"Klant" | "Bedrijf">(chosenRole);
  const navigate = useNavigate();

  const handleRoleChange = (newRole: "Klant" | "Bedrijf") => {
    setRole(newRole);
    navigate(
      newRole === "Klant" ? "/gebruiker/dashboard" : "/bedrijf/dashboard"
    );
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" className="px-3">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Nav.Link
            as={Link}
            to={
              role === "Klant" ? "/gebruiker/dashboard" : "/bedrijf/dashboard"
            }
            className="d-flex align-items-center"
          >
            <Image
              src="/Logo-Geentekst.png"
              alt="Logo"
              style={{ maxHeight: "40px" }}
            />
          </Nav.Link>
          <span className="fw-bold d-none d-md-block">HEAR ME OUT</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="fw-semibold border px-3 py-1"
            >
              {role}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleRoleChange("Bedrijf")}>
                Bedrijf
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleChange("Klant")}>
                Klant
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Toggle aria-controls="navbar-menu" />
        </div>

        <Navbar.Collapse id="navbar-menu" className="mt-2 mt-lg-0">
          <Nav className="mx-auto gap-3">
            <Nav.Link
              as={Link}
              to={
                role === "Klant" ? "/gebruiker/dashboard" : "/bedrijf/dashboard"
              }
            >
              DASHBOARD
            </Nav.Link>
            {role === "Bedrijf" && (
              <Nav.Link as={Link} to="/bedrijf/beheer-vacatures">
                VACATURES
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/instellingen">
              INSTELLINGEN
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={
                role === "Klant" ? "/gebruiker/berichten" : "/bedrijf/berichten"
              }
            >
              BERICHTEN
            </Nav.Link>
            <Nav.Link as={Link} to="/hoe-werkt-het">
              HOE WERKT HET
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center gap-3">
          <FontAwesomeIcon icon={faBell} size="lg" className="text-dark" />
          <FontAwesomeIcon icon={faUser} size="lg" className="text-dark" />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
