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

const RegistrationForm: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("stage");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    industry: "",
    age: "",
    region: "",
    travelDistance: "",
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
          minHeight: "100vh", // Ensures the container takes full height of the page
          paddingBottom: "20px", // Adds bottom padding for some space
        }}
      >
        <Row>
          <Col md={12} className="mt-5 ms-5 text-start">
            <h2>Registreer je hier</h2>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mt-4">
            <p style={{ fontSize: "14px" }}>Waar zoek je naar?</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="ms-5">
            <ButtonGroup
              aria-label="StageWerk"
              size="lg"
              className="border p-1 w-100"
            >
              <Button
                variant={selectedButton === "stage" ? "dark" : "white"}
                onClick={() => handleButtonClick("stage")}
                className="border w-100"
                size="lg"
              >
                STAGE
              </Button>
              <Button
                variant={selectedButton === "werk" ? "dark" : "white"}
                onClick={() => handleButtonClick("werk")}
                className="border w-100"
                size="lg"
              >
                WERK
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-4 mb-3 ms-5">
          {/* Voornaam and Achternaam */}
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>Voornaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Voornaam"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Achternaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Achternaam"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4  mb-3 ms-5">
          {/* Email and Wachtwoord */}
          <Col md={6}>
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
          <Col md={6}>
            <Form.Group controlId="password">
              <Form.Label>Wachtwoord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Wachtwoord"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4  mb-3 ms-5">
          {/* Industry Dropdown */}
          <Col md={6}>
            <Form.Group controlId="industry">
              <Form.Label>In welke Branche zit je?</Form.Label>
              <Form.Control
                as="select"
                name="industry"
                value={formData.industry}
                onChange={(e) =>
                  handleDropdownChange("industry", e.target.value)
                }
                size="lg"
              >
                <option>-- Kies een branche --</option>
                <option>IT</option>
                <option>Gezondheidszorg</option>
                <option>Onderwijs</option>
                <option>Financiën</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Age */}
          <Col md={6}>
            <Form.Group controlId="age">
              <Form.Label>Leeftijd</Form.Label>
              <Form.Control
                type="number"
                placeholder="Leeftijd"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                size="lg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4  mb-3 ms-5">
          {/* Region Dropdown */}
          <Col md={6} className="mt-2">
            <Form.Group controlId="region">
              <Form.Label>In welke regio woon je?</Form.Label>
              <Form.Control
                as="select"
                name="region"
                value={formData.region}
                onChange={(e) => handleDropdownChange("region", e.target.value)}
                size="lg"
              >
                <option>-- Kies een regio --</option>
                <option>Amsterdam</option>
                <option>Rotterdam</option>
                <option>Utrecht</option>
                <option>Den Haag</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Travel Distance Dropdown */}
          <Col md={6}>
            <Form.Group controlId="travelDistance">
              <Form.Label>Hoe ver ben je bereid te reizen?</Form.Label>
              <Form.Control
                as="select"
                name="travelDistance"
                value={formData.travelDistance}
                onChange={(e) =>
                  handleDropdownChange("travelDistance", e.target.value)
                }
                size="lg"
              >
                <option>-- Kies een afstand --</option>
                <option>5 km</option>
                <option>10 km</option>
                <option>20 km</option>
                <option>50 km</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 ms-5" style={{ paddingTop: "120px" }}>
          <Col md={12}>
            <Link to="/gebruiker/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="dark" type="submit" className="w-100" size="lg">
                Registreren
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegistrationForm;
