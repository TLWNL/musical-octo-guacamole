import { Container, Row, Col } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

function RegistrationBus() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={{ span: 4 }}
            className="mt-4 ms-4 p-3 d-flex flex-column"
            style={{
              background: "#424B5A",
              height: "95vh",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <Row style={{ height: "280px" }}>
              <Col md={12} className="mb-4 mt-1">
                <h2
                  className="mb-4"
                  style={{ fontSize: "25px", textAlign: "left" }}
                >
                  HEAR ME OUT
                </h2>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 9 }} className="mt-4 mb-4">
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
              <Col md={11} className="mt-4">
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
          <Col md="7">
            <RegistrationForm></RegistrationForm>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegistrationBus;
