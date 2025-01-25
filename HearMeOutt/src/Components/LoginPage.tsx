import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";

const LoginPage = () => {
  const steps = [
    {
      target: ".welkom-section",
      content: "Dit is waar de clienten (beide business en consumer) inloggen.",
    },
    {
      target: ".form-email",
      content:
        "Gebruikers kunnen inloggen met een email adres en wachtwoord, of met Google",
    },
  ];

  const [run, setRun] = useState(true);
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <Joyride
        steps={steps}
        continuous
        showProgress
        showSkipButton
        run={run}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
      <Container fluid className="h-100 welkom-section">
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
            <Form
              className="form-email"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Image src="https://picsum.photos/300/200" className="mb-2" />
              <h1>Welkom</h1>

              <p className="text-center">
                Welkom bij HearMeOutt. Log in om verder te gaan.
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
              <Button variant="outline-primary" className="w-100 mb-3 mt-4">
                Login with Google
              </Button>

              <div className="mt-3 text-center">
                <small>
                  Nog geen account? <a href="#">Account aanmaken</a>
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
