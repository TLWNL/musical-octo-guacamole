import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReviewsCarousel from "./ReviewsCarousel";
import RegistrationForm from "./RegistrationForm";

function AccountRegistration() {
  return (
    <Container fluid style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Back Button */}
      <Row>
        <Col xs={12} className="d-flex justify-content-start mt-3">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="dark">Back</Button>
          </Link>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          xs={12}
          md={4}
          className="mt-4 p-3 d-flex flex-column"
          style={{
            background: "#424B5A",
            minHeight: "95vh",
            borderRadius: "15px",
            color: "white",
          }}
        >
          <Row>
            <Col xs={12} className="mb-4 mt-1">
              <h2 style={{ fontSize: "25px", textAlign: "left" }}>
                HEAR ME OUT
              </h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={9} className="mt-4 mb-4">
              <h2
                style={{
                  fontSize: "36px",
                  color: "white",
                  textAlign: "left",
                  lineHeight: "46px",
                  fontFamily: "Ubuntu Regular, sans-serif",
                  fontWeight: "400",
                }}
              >
                Begin je zoektocht naar je droombaan nu bij ons
              </h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={11} className="mt-4">
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                Vind je nieuwe baan bij Hear Me Out. Door de goede
                spraakopname’s voorkom je vooroordelen en kom je sneller aan het
                werk bij je nieuwe werkgever!
              </p>
            </Col>
          </Row>

          <Row className="mt-auto">
            <Col>
              <ReviewsCarousel />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={7} className="mt-4">
          <RegistrationForm />
        </Col>
      </Row>
    </Container>
  );
}

export default AccountRegistration;
