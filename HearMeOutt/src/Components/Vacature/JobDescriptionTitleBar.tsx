import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router";
function JobDescriptionTitleBar() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page in history
  };
  return (
    <>
      {" "}
      <Container
        fluid
        style={{
          marginTop: "50px",
          backgroundColor: "#424B5A",
          height: "auto", // Adjusted to allow more content
          color: "white",
        }}
      >
        <Row className="mt-5 mb-4">
          <Col md={{ span: 2, offset: 0 }} className="mt-4">
            <a
              href="#"
              onClick={handleBackButtonClick}
              style={{
                textAlign: "right",
                color: "white",
                cursor: "pointer",
                display: "flex", // Ensuring the text and icon align horizontally
                alignItems: "center",
              }}
            >
              <FaArrowLeft className="me-2" /> {/* Add left arrow icon */}
              terug naar zoekresultaten
            </a>
          </Col>
        </Row>

        {/* Job Title */}
        <Row className="mt-5 mb-4">
          <Col md={{ span: 5, offset: 0 }}>
            <h2>Assistent manager groenteboer</h2>
          </Col>
        </Row>

        {/* Icons and Button Row */}
        <Row className="mb-4">
          <Col>
            <Row>
              {/* Location Icon */}
              <Col
                md={{ offset: 1 }}
                xs="auto"
                className="d-flex align-items-center"
              >
                <FaMapMarkerAlt className="me-2" />
                <span>Groningen</span>
              </Col>

              {/* Info Icon */}
              <Col xs="auto" className="d-flex align-items-center">
                <FaInfoCircle className="me-2" />
                <span>€2500,- / €3000,- per maand</span>
              </Col>

              {/* Calendar Icon */}
              <Col xs="auto" className="d-flex align-items-center">
                <FaCalendarAlt className="me-2" />
                <span>32 tot 40 uur per maand</span>
              </Col>

              {/* Solliciteer Button */}
              <Col
                xs="auto"
                className="d-flex align-items-center ms-auto mb-4 p-4"
              >
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#424B5A",
                    border: "1px solid #424B5A",
                  }}
                  size="lg"
                  onClick={() => navigate("/vacature/testVacature/casus")} // Navigate on click
                >
                  Solliciteer direct
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobDescriptionTitleBar;
