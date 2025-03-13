import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Joyride from "react-joyride"; // Import Joyride

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
    cv: null as File | null,
  });

  // Define one step for react-joyride
  const steps = [
    {
      target: ".step1",
      content: "Vul je gegevens in.",
    },
  ];

  const [runTour, setRunTour] = useState(false);

  // Start the tour and fill in the form data incrementally when the component mounts
  useEffect(() => {
    setRunTour(true); // Set runTour to true to trigger the tour

    // Incrementally fill the form data with delays
    const timeoutIds: NodeJS.Timeout[] = [];

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          firstName: "John",
        }));
      }, 1000)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          lastName: "Doe",
        }));
      }, 1500)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          email: "john.doe@example.com",
        }));
      }, 2000)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          password: "password123",
        }));
      }, 2500)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          industry: "IT",
        }));
      }, 3000)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          age: "30",
        }));
      }, 3500)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          region: "Amsterdam",
        }));
      }, 4000)
    );

    timeoutIds.push(
      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          travelDistance: "20",
        }));
      }, 4500)
    );

    return () => {
      // Clean up timeouts when the component is unmounted
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Alleen PDF bestanden zijn toegestaan.");
        return;
      }
      setFormData((prevState) => ({
        ...prevState,
        cv: file,
      }));
    }
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <Container style={{ minHeight: "100vh", paddingBottom: "20px" }}>
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        scrollToFirstStep={true}
      />

      <Row>
        <Col xs={12} className="mt-5 text-start">
          <h2 className="step1">Registreer je hier</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6} className="step2">
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

      <Row className="mt-4 mb-3">
        <Col xs={12} md={6} className="step3">
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
        <Col xs={12} md={6} className="step4">
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

      <Row className="mt-4 mb-3">
        <Col xs={12} md={6} className="step5">
          <Form.Group controlId="industry">
            <Form.Label>In welke Branche zit je?</Form.Label>
            <Form.Control
              as="select"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
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
        <Col xs={12} md={6} className="step6">
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

      <Row className="mt-4 mb-3">
        <Col xs={12} md={6} className="step7">
          <Form.Group controlId="cv">
            <Form.Label>Upload je CV (PDF)</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              size="lg"
            />
            {formData.cv && (
              <small className="text-muted mt-1">
                Geselecteerd: {formData.cv.name}
              </small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12} className="mb-4">
          <Link to="/gebruiker/dashboard">
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
  );
};

export default RegistrationForm;
