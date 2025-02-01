import { Card, Row, Col, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

interface JobPostingProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  hours: string;
  isNew?: boolean;
}

function JobPosting({
  title,
  company,
  location,
  salary,
  hours,
  isNew,
}: JobPostingProps) {
  return (
    <Card
      className="p-4 shadow-sm border rounded"
      style={{ borderLeft: "5px solid #3E4756" }}
    >
      <Row className="align-items-center">
        <Col xs="auto">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#3E4756",
              borderRadius: "10px",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {company.charAt(0).toUpperCase()}
          </div>
        </Col>
        <Col>
          <h6 className="mb-0">{title}</h6>
          <strong>{company}</strong>
        </Col>
        {isNew && (
          <Col xs="auto">
            <Badge
              bg="dark"
              style={{ borderRadius: "15px", padding: "5px 10px" }}
            >
              NIEUW
            </Badge>
          </Col>
        )}
      </Row>

      <Row className="mt-2">
        <Col xs="auto">
          <FaMapMarkerAlt className="text-secondary me-2" />
          {location}
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <FaInfoCircle className="text-secondary me-2" />
          {salary}
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <FaCalendarAlt className="text-secondary me-2" />
          {hours}
        </Col>
      </Row>
    </Card>
  );
}

export default JobPosting;
