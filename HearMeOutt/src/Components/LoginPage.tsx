import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/gebruiker/dashboard");
  };
  const steps = [
    {
      target: ".welkom-section",
      content:
        "Dit is waar de clienten (beide business en consumer) inloggen. In deze walkthrough lopen we door het proces van de client, en van een bedrijf",
    },
    {
      target: ".form-email",
      content:
        "Gebruikers kunnen inloggen met een email adres en wachtwoord, of met Google",
    },
    {
      target: ".form-registration-person",
      content:
        "Als de gebruiker geen account heeft, klikt hij hier om een account aan te maken.",
    },
  ];

  const simulateUserInput = () => {
    if (textDone) {
      return;
    }

    const emailField = document.getElementById(
      "formBasicEmail"
    ) as HTMLInputElement;
    const passwordField = document.getElementById(
      "formBasicPassword"
    ) as HTMLInputElement;

    if (emailField && passwordField) {
      const typeText = (
        element: HTMLInputElement,
        text: string,
        callback: () => void
      ) => {
        let i = 0;
        const interval = setInterval(() => {
          element.value = text.slice(0, i + 1);
          element.dispatchEvent(new Event("change", { bubbles: true }));
          i++;

          if (i === text.length) {
            clearInterval(interval);
            callback(); // Call callback once typing is finished
          }
        }, 100); // Adjust typing speed by changing the interval time (in milliseconds)
      };

      // Typing animation for both fields
      typeText(emailField, "user@example.com", () => {
        typeText(passwordField, "password123", () => {
          setTextDone(true); // Set textDone to true when done
        });
      });
    } else {
      console.log("Fields not found");
    }
  };

  const [run, setRun] = useState(true);
  const [textDone, setTextDone] = useState(false); // Keep track of when typing is done

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, step } = data;

    // Trigger animation when the .form-email step is running
    if (
      step.target === ".form-email" &&
      status === STATUS.RUNNING &&
      !textDone
    ) {
      simulateUserInput(); // Trigger the typing animation
    }

    // End the tour when finished or skipped
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };

  return (
    <>
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
              zIndex: 1000,
            },
          }}
        />
        <Container fluid className="h-100 welkom-section">
          <Row className="h-100">
            <Col
              xs={12}
              md={7}
              className="d-flex flex-column justify-content-center align-items-center bg-primary text-white"
            >
              {" "}
              <Image src="LogoWitAchtergrond.png" alt="Description" fluid />
            </Col>

            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Form
                className="form-email"
                style={{ width: "100%", maxWidth: "400px" }}
              >
                <Image
                  style={{ maxHeight: "200px" }}
                  src="Logo-Geentekst.png"
                  className="mb-2"
                />
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

                <Button
                  onClick={handleLogin}
                  variant="primary"
                  type="submit"
                  className="w-100"
                >
                  Login
                </Button>
                <Button variant="outline-primary" className="w-100 mb-3 mt-4">
                  Login with Google
                </Button>

                <div className="mt-3 text-center form-registration">
                  <small>
                    Nog geen account? <br></br>
                    <Row>
                      <Col>
                        <Link
                          className="form-registration-company"
                          to="/bedrijf/aanmaken"
                        >
                          Registreer je als bedrijf
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Link
                          className="form-registration-person"
                          to="/gebruiker/aanmaken"
                        >
                          Registreer je als persoon
                        </Link>
                      </Col>
                    </Row>
                  </small>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
