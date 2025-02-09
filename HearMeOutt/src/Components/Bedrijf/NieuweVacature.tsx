import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import MyNavbar from "../MyNavBar";

const NieuweVacature: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("stage");
  const [formData, setFormData] = useState({
    industry: "",
    ageCategory: "",
    vacancyIntroduction: "",
    whatWeOffer: "",
    whoAreYou: "",
  });

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

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

  return (
    <>
      <MyNavbar chosenRole="Bedrijf" />
      <Container fluid style={{ marginTop: "50px" }}>
        <Row>
          <Col md={4} className="bg-dark text-white py-5 px-4">
            <h2>Zet een nieuwe vacature op</h2>
            <p className="mt-4">
              Plaats hier een nieuwe vacature en maak je bedrijf zichtbaar voor
              de juiste kandidaten.
            </p>
          </Col>

          <Col md={8}>
            <Card className="shadow-sm mt-4">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <p>Wat voor type functie is het?</p>
                    <ButtonGroup
                      aria-label="StageWerk"
                      size="lg"
                      className="w-100"
                    >
                      <Button
                        variant={selectedButton === "stage" ? "dark" : "light"}
                        onClick={() => handleButtonClick("stage")}
                        className="w-100"
                        size="lg"
                      >
                        STAGE
                      </Button>
                      <Button
                        variant={selectedButton === "werk" ? "dark" : "light"}
                        onClick={() => handleButtonClick("werk")}
                        className="w-100"
                        size="lg"
                      >
                        WERK
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={6}>
                    <Form.Group controlId="industry">
                      <Form.Label>In welke Branche zit de vacature?</Form.Label>
                      <Form.Control
                        as="select"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange} // Works for both input and select
                        size="lg"
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <option>-- Kies een branche --</option>
                        <option>IT</option>
                        <option>Gezondheidszorg</option>
                        <option>Onderwijs</option>
                        <option>Financiën</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="ageCategory">
                      <Form.Label>Leeftijdscategorie</Form.Label>
                      <Form.Control
                        as="select"
                        name="ageCategory"
                        value={formData.ageCategory}
                        onChange={handleInputChange} // Works for both input and select
                        size="lg"
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <option>-- Kies leeftijdscategorie --</option>
                        <option>18-24</option>
                        <option>25-34</option>
                        <option>35-44</option>
                        <option>45+</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={12}>
                    <Form.Group controlId="vacancyIntroduction">
                      <Form.Label>Vacature Introductie</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="vacancyIntroduction"
                        value={formData.vacancyIntroduction}
                        onChange={handleInputChange} // Works for both input and textarea
                        placeholder="Geef een korte introductie van de vacature"
                        size="lg"
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          width: "100%",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={12}>
                    <Form.Group controlId="whatWeOffer">
                      <Form.Label>Wat bieden wij jou?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="whatWeOffer"
                        value={formData.whatWeOffer}
                        onChange={handleInputChange} // Works for both input and textarea
                        placeholder="Beschrijf wat je biedt"
                        size="lg"
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          width: "100%",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={12}>
                    <Form.Group controlId="whoAreYou">
                      <Form.Label>Wie ben jij?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="whoAreYou"
                        value={formData.whoAreYou}
                        onChange={handleInputChange} // Works for both input and textarea
                        placeholder="Beschrijf wie je zoekt voor deze functie"
                        size="lg"
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          width: "100%",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={12}>
                    <Button
                      variant="dark"
                      size="lg"
                      className="w-100"
                      style={{
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Vacature Plaatsen
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NieuweVacature;
