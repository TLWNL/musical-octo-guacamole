import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function RegistrationBus() {
  return (
    <>
      <Container
        fluid
        style={{
          maxWidth: "1200px", // Maximum width for large screens
          margin: "0 auto", // Center the container
        }}
      >
        <Row>
          <Col
            xs={12}
            md={{ span: 4 }}
            className="mt-4 p-3 d-flex flex-column"
            style={{
              background: "#424B5A",
              height: "95vh",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <Row style={{ height: "280px" }}>
              <Col xs={12} className="mb-4 mt-1">
                <h2
                  className="mb-4"
                  style={{ fontSize: "25px", textAlign: "left" }}
                >
                  HEAR ME OUT
                </h2>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={9} className="mt-4 mb-4">
                <h2
                  style={{
                    fontSize: "40px",
                    color: "white",
                    textAlign: "left",
                    marginLeft: "53px",
                    lineHeight: "54px",
                    fontFamily: "Ubuntu Regular, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Begin je zoektocht naar je ideale werknemer nu bij ons
                </h2>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={11} className="mt-4">
                <p
                  style={{
                    fontSize: "18px",
                    textAlign: "left",
                    marginLeft: "53px",
                  }}
                >
                  Vind je nieuwe werknemer bij Hear Me Out. Door de goede
                  spraakopname’s voorkom je vooroordelen en kom je sneller aan
                  nieuwe werknemers!
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={7} className="mt-4">
            <RegistrationForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegistrationBus;
