import { Col, Container, Row } from "react-bootstrap";

function AccountRegistration() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={{ span: 5 }}
            className="mt-2 ms-4 p-3"
            style={{
              background: "#424B5A",
              height: "100vh",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ fontSize: "25px", color: "white" }}>HEAR ME OUTT!</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AccountRegistration;
