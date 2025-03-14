import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const BedrijfRegistratieForm: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("small");
  const [formData, setFormData] = useState({
    bedrijfsnaam: "",
    email: "",
    wachtwoord: "",
    bedrijfstype: "",
    branche: "",
    locatie: "",
    functiecategorieen: "",
    website: "",
  });

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Container
        style={{
          minHeight: "100vh", // Zorgt ervoor dat de container de volledige hoogte van de pagina in beslag neemt
          paddingBottom: "20px", // Voegt onderaan ruimte toe voor wat afstand
        }}
      >
        <Row>
          <Col xs={12} className="mt-5 text-start">
            <h2>Registreer je bedrijf hier</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} className="mt-4">
            <p style={{ fontSize: "14px" }}>Wat voor type bedrijf ben je?</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="">
            <ButtonGroup
              aria-label="Bedrijfstype"
              size="lg"
              className="p-1 w-100"
            >
              <Button
                variant={selectedButton === "small" ? "dark" : "white"}
                onClick={() => handleButtonClick("small")}
                className="border w-100"
                size="lg"
              >
                Klein Bedrijf
              </Button>
              <Button
                variant={selectedButton === "medium" ? "dark" : "white"}
                onClick={() => handleButtonClick("medium")}
                className="border w-100"
                size="lg"
              >
                Midsize Bedrijf
              </Button>
              <Button
                variant={selectedButton === "large" ? "dark" : "white"}
                onClick={() => handleButtonClick("large")}
                className="border w-100"
                size="lg"
              >
                Groot Bedrijf
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          {/* Bedrijfsnaam */}
          <Col xs={12}>
            <Form.Group controlId="bedrijfsnaam">
              <Form.Label>Bedrijfsnaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bedrijfsnaam"
                name="bedrijfsnaam"
                value={formData.bedrijfsnaam}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          {/* E-mail en Wachtwoord */}
          <Col xs={12} md={6}>
            <Form.Group controlId="email">
              <Form.Label>E-mail adres</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail adres"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="wachtwoord">
              <Form.Label>Wachtwoord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Wachtwoord"
                name="wachtwoord"
                value={formData.wachtwoord}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          {/* Bedrijf Branche */}
          <Col xs={12} md={6}>
            <Form.Group controlId="branche">
              <Form.Label>In welke Branche zit je?</Form.Label>
              <Form.Control
                as="select"
                name="branche"
                value={formData.branche}
                onChange={(e) =>
                  handleDropdownChange("branche", e.target.value)
                }
                size="lg"
              >
                <option>-- Kies een branche --</option>
                <option>IT</option>
                <option>Gezondheidszorg</option>
                <option>Onderwijs</option>
                <option>Financiën</option>
                <option>Marketing</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Locatie */}
          <Col xs={12} md={6}>
            <Form.Group controlId="locatie">
              <Form.Label>Waar is je bedrijf gevestigd?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Locatie"
                name="locatie"
                value={formData.locatie}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          {/* Functiecategorieën */}
          <Col xs={12} md={6}>
            <Form.Group controlId="functiecategorieen">
              <Form.Label>Welke functiecategorieën bied je aan?</Form.Label>
              <Form.Control
                as="select"
                name="functiecategorieen"
                value={formData.functiecategorieen}
                onChange={(e) =>
                  handleDropdownChange("functiecategorieen", e.target.value)
                }
                size="lg"
              >
                <option>-- Kies functiecategorieën --</option>
                <option>Software Engineer</option>
                <option>Data Scientist</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>Verkoop</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Website */}
          <Col xs={12} md={6}>
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                placeholder="Website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4" style={{ paddingTop: "120px" }}>
          <Col xs={12} className="mb-4">
            <Link to="/bedrijf/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="dark" type="submit" className="w-100" size="lg">
                Registreren
              </Button>
            </Link>
          </Col>
          <Col xs={12}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="dark" type="submit" className="w-100" size="lg">
                Terug
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BedrijfRegistratieForm;
