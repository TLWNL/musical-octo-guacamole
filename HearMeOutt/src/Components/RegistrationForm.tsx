import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  ButtonGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import RecordingComponent from "./Vacature/RecordingComponent";
import { FaQuestionCircle } from "react-icons/fa";

const RegistrationForm: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("stage");
  const [showVideo, setShowVideo] = useState(false);
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

  return (
    <Container style={{ minHeight: "100vh", paddingBottom: "20px" }}>
      <Row className="align-items-center mt-5 ">
        <Col md={8}>
          <h2>Registreer je hier</h2>
        </Col>
        <Col md={4} className="text-end">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Bekijk instructievideo</Tooltip>}
          >
            <Button variant="dark" onClick={() => setShowVideo(true)}>
              <FaQuestionCircle size={24} />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>

      <Modal show={showVideo} onHide={() => setShowVideo(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Instructievideo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Instructievideo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: "90%" }}
          ></iframe>
        </Modal.Body>
      </Modal>

      <Row className="mt-4">
        <Col md={3}>
          <p style={{ fontSize: "14px" }}>Waar zoek je naar?</p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="">
          <ButtonGroup className="d-flex w-100">
            <Button
              variant={selectedButton === "stage" ? "dark" : "light"}
              onClick={() => setSelectedButton("stage")}
              className="w-50"
            >
              STAGE
            </Button>
            <Button
              variant={selectedButton === "werk" ? "dark" : "light"}
              onClick={() => setSelectedButton("werk")}
              className="w-50"
            >
              WERK
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-4 ">
        <Col md={6} className="mb-3">
          <Form.Group controlId="firstName">
            <Form.Label>Voornaam</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group controlId="lastName">
            <Form.Label>Achternaam</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col md={6} className="mb-3">
          <Form.Group controlId="email">
            <Form.Label>E-mail adres</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group controlId="password">
            <Form.Label>Wachtwoord</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col md={6} className="mb-3">
          <Form.Group controlId="industry">
            <Form.Label>In welke Branche zit je?</Form.Label>
            <Form.Control
              as="select"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
            >
              <option>-- Kies een branche --</option>
              <option>IT</option>
              <option>Gezondheidszorg</option>
              <option>Onderwijs</option>
              <option>Financiën</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group controlId="age">
            <Form.Label>Leeftijd</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col md={6} className="mb-3">
          <Form.Group controlId="cv">
            <Form.Label>Upload je CV (PDF)</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
            {formData.cv && (
              <small className="text-muted mt-1">
                Geselecteerd: {formData.cv.name}
              </small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <RecordingComponent />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={12}>
          <Link to="/gebruiker/dashboard">
            <Button variant="dark" type="submit" className="w-100">
              Registreren
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
