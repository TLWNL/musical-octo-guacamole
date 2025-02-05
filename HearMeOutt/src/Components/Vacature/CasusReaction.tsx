import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import MyNavbar from "../MyNavBar";
import RecordingComponent from "./RecordingComponent";
import ExplanationModal from "./ExplanationModal"; // Import the modal

// Define the structure for a case (casus)
interface Casus {
  name: string;
  description: string;
}

// Data for different cases
const casusData: Record<string, Casus> = {
  "1": {
    name: "Eenzaamheid",
    description: `Hoe zou jij ervoor kunnen zorgen dat ze zich niet meer eenzaam voelt? Daarnaast, hoe kan je het beste omgaan met iemand die vaak stemmingswisselingen heeft, die soms zelfs heel heftig kunnen zijn.`,
  },
  "2": {
    name: "Probleem met mobiele telefoonrekening",
    description: `Een klant belt over een onterechte kostenpost op zijn telefoonrekening. 
    Hoe los je dit professioneel op?`,
  },
};

function CasusReaction() {
  const { casusId } = useParams<{ casusId: string }>(); // Get casusId from URL
  const navigate = useNavigate(); // Navigation hook

  const casus = casusData[casusId ?? "1"]; // Default to casus 1 if not found

  const [showModal, setShowModal] = useState(true); // Show modal on load

  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal after viewing
  };

  useEffect(() => {
    // Ensure modal is shown only once when the component is loaded
    setShowModal(true);
  }, []);

  return (
    <>
      {/* Explanation Modal */}
      <ExplanationModal show={showModal} handleClose={handleCloseModal} />

      <MyNavbar chosenRole="Klant" />
      <Container className="mt-5">
        <Row className="justify-content-center">
          {/* Casus Info Section */}
          <Col md={8} lg={6} className="mt-4">
            <Card className="shadow-sm border-1 p-4">
              <Card.Body>
                <h4 className="text-primary">{casus.name}</h4>
                <p className="text-muted">{casus.description}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          {/* Response Section */}
          <Col md={10} lg={8}>
            <Card
              className="shadow-lg p-4"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
            >
              <Card.Body>
                <h5 className="text-dark mb-4">Reageer op de casus</h5>
                <RecordingComponent />

                <Form.Group controlId="textInput" className="mt-3">
                  <Form.Label className="text-muted">
                    Extra opmerkingen
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Vul hier iets toe wat betrekking heeft tot je spraakmemo."
                    style={{ resize: "none" }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end mt-4">
                  <Button variant="dark" onClick={handleBackButtonClick}>
                    Verstuur
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CasusReaction;
