import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import MyNavbar from "../MyNavBar";
import RecordingComponent from "./RecordingComponent";
import ExplanationModal from "./ExplanationModal";
import JobDescriptionTitleBar from "./JobDescriptionTitleBar";

interface Casus {
  name: string;
  description: string;
}

const casusData: Record<string, Casus[]> = {
  "1": [
    {
      name: "Eenzaamheid",
      description: `Hoe zou jij ervoor kunnen zorgen dat ze zich niet meer eenzaam voelt? Daarnaast, hoe kan je het beste omgaan met iemand die vaak stemmingswisselingen heeft, die soms zelfs heel heftig kunnen zijn.`,
    },
  ],
  "2": [
    {
      name: "Probleem met autoriteit",
      description: `A. is een 17-jarige cliënt die vanuit een gesloten inrichting is doorgestroomd
naar een open woongroep, namelijk bij Accuraat Begeleid Wonen. A. heeft in
het verleden meerdere malen in detentie gezeten. A. kan getriggerd worden als
er sprake is van autoritair gedrag bij de begeleiding. A. is met goede
voornemens bij Accuraat Begeleid Wonen gestart, maar begint al vrij snel met
het overtreden van de huisregels. De situaties escaleren dagelijks en A. wordt
steeds brutaler/opstandiger naar de begeleiding. A. wordt dan boos, begint te
dreigen en stelt zich opstandig op.
Hoe zou je, tijdens het draaien van een dienst, met cliënt A. omgaan om te
voorkomen dat het traject verder stagneert en de grensoverschrijdende
situaties blijven escaleren?`,
    },
    {
      name: "Onvoorspelbaar gedrag",
      description: `K. is een 23-jarige cliënt met een GGZ-achtergrond. K. heeft de afgelopen jaren
bij verschillende familieleden gewoond, maar overal liepen de spanningen na
verloop van tijd dusdanig op dat het niet meer veilig was voor K. om daar te
blijven wonen. K. wisselt bij Accuraat Begeleid Wonen rustige momenten af
met onrustige momenten. Hierin schommelt hij in zijn gedrag. K. laat, in de
momenten dat hij onrustig is, afwijkend gedrag zien. Zijn manier van
communiceren wordt dan onduidelijk en hij lijkt angstig te worden van alle
bewegingen om zich heen.
Er ontstaat tijdens een avonddienst een situatie waarin K. op het balkon besluit
te plassen. Alle cliënten beginnen te lachen en K. schrikt hiervan.
Hoe zou je, tijdens het draaien van een dienst, met cliënt K. omgaan en de
bovenstaande omschreven situatie afhandelen?`,
    },
  ],
};

function CasusReaction() {
  const { casusId } = useParams<{ casusId: string }>();
  const navigate = useNavigate();

  const casusList = casusData[casusId ?? "1"] ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const currentCasus = casusList[currentIndex];

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextCasus = () => {
    if (currentIndex < casusList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowCompletionModal(true);
    }
  };

  const handleCloseCompletionModal = () => {
    setShowCompletionModal(false);
    navigate(-1);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  const job = {
    jobTitle: "Verzorger",
    location: "Groningen",
    salary: "€2500,- / €3000,- per maand",
    hours: "32 tot 40 uur per maand",
    jobId: "1",
  };

  return (
    <>
      <ExplanationModal show={showModal} handleClose={handleCloseModal} />

      {/* Completion Modal */}
      <Modal
        show={showCompletionModal}
        onHide={handleCloseCompletionModal}
        centered
      >
        <Modal.Body className="text-center">
          <h4 className="text-success">Je hebt succesvol gesolliciteerd!</h4>
          <p>
            Bedankt voor je sollicitatie. We nemen binnenkort contact met je op.
          </p>
          <Button variant="dark" onClick={handleCloseCompletionModal}>
            Sluiten
          </Button>
        </Modal.Body>
      </Modal>

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
          <Col md={6} lg={6} className="mt-4">
            <Card className="shadow-sm border-1 p-4">
              <Card.Body>
                <h4 className="text-primary">{currentCasus.name}</h4>
                <p className="text-muted">{currentCasus.description}</p>
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
                  onClick={handleNextCasus}
                >
                  {currentIndex < casusList.length - 1
                    ? "Volgende"
                    : "Afronden"}
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
