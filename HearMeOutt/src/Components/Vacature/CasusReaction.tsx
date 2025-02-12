import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import MyNavbar from "../MyNavBar";
import RecordingComponent from "./RecordingComponent";
import ExplanationModal from "./ExplanationModal"; // Import the modal
import JobDescriptionTitleBar from "./JobDescriptionTitleBar";

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

  const job = {
    jobTitle: "Verzorger",
    location: "Groningen",
    salary: "€2500,- / €3000,- per maand",
    hours: "32 tot 40 uur per maand",
    jobId: "1", // Default to 1 if no jobId is found
  };

  return (
    <>
      {/* Explanation Modal */}
      <ExplanationModal show={showModal} handleClose={handleCloseModal} />

      <MyNavbar chosenRole="Klant" />
      <JobDescriptionTitleBar
        jobTitle={job.jobTitle}
        location={job.location}
        salary={job.salary}
        hours={job.hours}
        jobId={job.jobId}
        onBackButtonClick={handleBackButtonClick}
      />
      <Container className="mt-5">
        <Row className="justify-content-center">
          {/* Casus Info Section */}
          <Col md={6} lg={6} className="mt-4">
            <Card className="shadow-sm border-1 p-4">
              <Card.Body>
                <h4 className="text-primary">{casus.name}</h4>
                <p className="text-muted">{casus.description}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={6}
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card
              className="shadow-lg p-4 w-100"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <Col md={12}>
                  <RecordingComponent />
                </Col>

                <Form.Group controlId="textInput" className="mt-3 w-100">
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

                <Button
                  variant="dark"
                  className="mt-3"
                  onClick={handleBackButtonClick}
                >
                  Verstuur
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CasusReaction;
