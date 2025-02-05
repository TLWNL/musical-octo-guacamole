import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MyNavbar from "../MyNavBar";
import JobDescriptionTitleBar from "./JobDescriptionTitleBar";
import RecordingComponent from "./RecordingComponent";

function CasusReaction() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <JobDescriptionTitleBar />

      <Container fluid className="vh-60">
        <Row>
          <Col
            md={{ span: 3, offset: 1 }}
            style={{
              fontSize: "20px",
              lineHeight: "28px",
              textAlign: "left",
              color: "#505D68",
            }}
          >
            <p>casus</p>
          </Col>{" "}
          <Col md={3}>
            <p>
              Jij krijgt een gesprek van een klant die een internet abbonement
              heeft afgesloten bij je. De klant is erg boos en jij moet hierop
              reageren. Hoe doe je dat, en hoe ga je dat doen? Wees bereid om
              rustig te antwoorden, goede oplossingen te geven en luister goed
              naar wat de persoon zegt.
            </p>
          </Col>
          <Col md={5}>
            <Container style={{}}>
              <Col
                md={{ span: 7, offset: 2 }}
                style={{ backgroundColor: "#424B5A", minHeight: "400px" }}
                className="mt-2 mb-2"
              >
                <Row className="align-center mt-4">
                  <Col className="mt-4">
                    <p
                      style={{
                        fontSize: "28px",
                        color: "white",
                        fontWeight: "400",
                        lineHeight: "32px",
                      }}
                    >
                      Reageer op de casus
                    </p>
                  </Col>
                </Row>

                <Row>
                  <RecordingComponent />
                </Row>
                <Row>
                  <Row>
                    <Col
                      style={{ color: "white" }}
                      className="mt-2"
                      md={{ span: 1, offset: 1 }}
                    >
                      <p>Toevoeging</p>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }} className="mb-4">
                    <Form.Group controlId="textInput">
                      <Form.Control
                        as="textarea" // Change to textarea for multiline input
                        style={{
                          minHeight: "200px", // Set the minimum height for the textarea
                          overflowY: "auto", // Enable vertical scrolling when content overflows
                        }}
                        placeholder="Vul hier iets toe wat betrekking heeft tot je spraak memo. Alleen belangrijke informatie die je niet in je spraakmemo kan toevoegen."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={{ span: 10, offset: 1 }}
                    className="d-flex justify-content-center mb-4"
                  >
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#424B5A", // Adjust text color as needed
                        border: "1px solid #424B5A", // Border to match text color
                        width: "100%",
                      }}
                    >
                      Verstuur
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CasusReaction;
