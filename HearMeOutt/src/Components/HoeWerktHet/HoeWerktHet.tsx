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
              Welkom bij HearMeOutt
              <br />
              Met ons platform kan je gemakkelijk solliciteren met gebruik van
              spraakmemos
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
                description="Gebruik onze site on vacatures te vinden."
              />
              <Step
                title="Meld je aan met je stem"
                description="Lees en beantwoord een casus, waarna je antwoord naar de werkgever gestuurd wordt.."
              />
              <Step
                title="Ga op uitnodiging"
                description="De werkgever neemt contact met je op."
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
