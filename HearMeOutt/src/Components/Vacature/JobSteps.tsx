import { Col, Container, Row } from "react-bootstrap";

// Define the type for props to specify expected structure
interface JobStepProps {
  name: string;
  content: string;
}

function JobSteps({ name, content }: JobStepProps) {
  return (
    <>
      <Container fluid style={{ marginTop: "50px" }}>
        <Row className="mt-4">
          <Col
            md={{ span: 1, offset: 1 }}
            style={{
              fontSize: "20px",
              lineHeight: "28px",
              textAlign: "left",
              color: "#505D68",
            }}
          >
            <p>
              {name} {/* Use the name prop */}
            </p>
          </Col>
          <Col
            style={{ textAlign: "left", fontSize: "20px" }}
            md={{ span: 6, offset: 2 }}
          >
            <p>{content}</p> {/* Use the content prop */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobSteps;
