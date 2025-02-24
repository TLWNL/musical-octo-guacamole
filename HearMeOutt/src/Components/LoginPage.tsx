import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [run, setRun] = useState(true);

  const handleLogin = () => {
    navigate("/gebruiker/dashboard");
  };

  const steps = [
    {
      target: ".welkom-section",
      content: "Dit is waar de clienten inloggen. We lopen door het proces.",
    },
    {
      target: ".form-email",
      content: "Gebruikers kunnen inloggen met email en wachtwoord, of Google.",
    },
    {
      target: ".form-registration-person",
      content: "Als je geen account hebt, kun je hier registreren.",
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };

  return (
    <Container fluid className="welkom-section">
      <Joyride
        steps={steps}
        continuous
        showProgress
        showSkipButton
        run={run}
        callback={handleJoyrideCallback}
        styles={{ options: { zIndex: 1000 } }}
      />

      <Row className="min-vh-100 align-items-center">
        {/* Blue container: Hidden on mobile, visible on md+ */}
        <Col
          md={6}
          className="d-none d-md-flex flex-column justify-content-center align-items-center bg-primary text-white p-4"
        >
          <Image
            src="LogoWitAchtergrond.png"
            alt="Description"
            fluid
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </Col>

        {/* Login Form: Centered on mobile */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center min-vh-100"
        >
          <div
            className="login-container w-100 px-4"
            style={{ maxWidth: "400px" }}
          >
            <Image
              src="Logo-Geentekst.png"
              className="mb-3 mx-auto d-block"
              style={{ maxHeight: "150px", width: "auto" }}
            />
            <h1 className="text-center">Welkom</h1>
            <p className="text-center">
              Welkom bij HearMeOutt. Log in om verder te gaan.
            </p>

            <h2 className="mb-4 text-center">Login</h2>

            <Form className="form-email w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                onClick={handleLogin}
                variant="primary"
                type="submit"
                className="w-100 mb-2"
              >
                Login
              </Button>

              <Button variant="outline-primary" className="w-100 mb-3">
                Login with Google
              </Button>

              <div className="mt-3 text-center form-registration">
                <small>
                  Nog geen account?
                  <br />
                  <Row className="mt-2">
                    <Col>
                      <Link
                        className="form-registration-company"
                        to="/bedrijf/aanmaken"
                      >
                        Registreer als bedrijf
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link
                        className="form-registration-person"
                        to="/gebruiker/aanmaken"
                      >
                        Registreer als persoon
                      </Link>
                    </Col>
                  </Row>
                </small>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
