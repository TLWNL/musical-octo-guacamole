import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">HEAR ME OUT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="#dashboard">DASHBOARD</Nav.Link>
            <Nav.Link href="#instellingen">INSTELLINGEN</Nav.Link>
            <Nav.Link href="#berichten">BERICHTEN</Nav.Link>
            <Nav.Link href="#hoe-werkt-het">HOE WERKT HET</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faBell} size="lg" className="text-white" />
          <FontAwesomeIcon icon={faUser} size="lg" className="text-white" />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
