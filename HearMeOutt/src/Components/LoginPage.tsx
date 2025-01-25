import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

const LoginPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-center align-items-center bg-primary text-white"
          ></Col>

          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Form style={{ width: "100%", maxWidth: "400px" }}>
              <Image src="https://picsum.photos/300/200" />
              <h1>Welkom</h1>

              <p className="text-center">
                Welcome to our platform. Please log in to continue.
              </p>
              <h2 className="mb-4 text-center">Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <div className="mt-3 text-center">
                <small>
                  Don't have an account? <a href="#">Sign up</a>
                </small>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
