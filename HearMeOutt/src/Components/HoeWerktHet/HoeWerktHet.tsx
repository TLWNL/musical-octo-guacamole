import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyNavbar from "../MyNavBar";

const HoeWerktHet: React.FC = () => {
  return (
    <>
      <MyNavbar chosenRole="Klant" />
      <Container
        className="py-5"
        style={{ marginTop: "150px", maxWidth: "1200px", textAlign: "center" }}
      >
        <Row className="align-items-center mt-4">
          {/* Left Section */}
          <Col md={6} className="text-start mt-4 mb-4">
            <h2 className="fw-bold mt-4 mb-4" style={{ fontSize: "2.5rem" }}>
              Hoe werkt het
            </h2>
            <p className="text-muted" style={{ fontSize: "1.25rem" }}>
              Lorem ipsum dolet sit amet.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="d-flex justify-content-left mt-4">
              <Button variant="dark" className="me-3" size="lg">
                Zoek Vacatures
              </Button>
              <Button
                variant="link"
                className="text-dark d-flex align-items-center"
                style={{ fontSize: "1.25rem" }}
              >
                Bekijk Onze Video
                <i className="ms-2 bi bi-arrow-right-circle"></i>
              </Button>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <div className="d-flex flex-column gap-4">
              <Step
                title="Zoek een vacature"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              />
              <Step
                title="Meld je aan met je stem"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              />
              <Step
                title="Ga op uitnodiging"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Helper component for each step
const Step: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="d-flex align-items-start justify-content-center">
      <div className="ms-3 mt-3 mb-3">
        <h5 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
          {title}
        </h5>
        <p className="text-muted mb-0" style={{ fontSize: "1.25rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoeWerktHet;
