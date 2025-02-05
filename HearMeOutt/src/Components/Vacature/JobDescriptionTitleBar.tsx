import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router";

// Define the type for props to specify expected structure
interface JobDescriptionTitleBarProps {
  jobTitle: string;
  location: string;
  salary: string;
  hours: string;
  jobId: string;
  onBackButtonClick: () => void;
}

function JobDescriptionTitleBar({
  jobTitle,
  location,
  salary,
  hours,
  jobId,
  onBackButtonClick,
}: JobDescriptionTitleBarProps) {
  const navigate = useNavigate();

  return (
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
        <Col md={{ span: 2, offset: 1 }} className="mt-4">
          <a
            href="#"
            onClick={onBackButtonClick}
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
        <Col
          md={{ span: 3, offset: 1 }}
          style={{
            backgroundColor: "#424B5A", // Keep the blue-grey background
            borderRadius: "8px", // Rounded corners for modern look
            padding: "15px", // Padding around the title
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
          }}
        >
          <h2
            style={{
              fontSize: "36px", // Larger font size for emphasis
              fontWeight: "700", // Bold title
              color: "white", // Make the title text white
              textAlign: "left", // Align text to the left
              margin: "0", // Remove default margin for a clean look
            }}
          >
            {jobTitle}
          </h2>
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
              <span>{location}</span>
            </Col>

            {/* Info Icon */}
            <Col xs="auto" className="d-flex align-items-center">
              <FaInfoCircle className="me-2" />
              <span>{salary}</span>
            </Col>

            {/* Calendar Icon */}
            <Col xs="auto" className="d-flex align-items-center">
              <FaCalendarAlt className="me-2" />
              <span>{hours}</span>
            </Col>

            {/* Solliciteer Button */}
            <Col md={4} className="d-flex align-items-center ms-auto mb-4 p-4">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#424B5A",
                  border: "1px solid #424B5A",
                }}
                size="lg"
                onClick={() => navigate(`/vacature/solliciteer/${jobId}`)} // Navigate on click
              >
                Solliciteer direct
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default JobDescriptionTitleBar;
