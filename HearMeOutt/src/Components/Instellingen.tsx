import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import MyNavbar from "./MyNavBar";

const Instellingen: React.FC = () => {
  const [colors, setColors] = useState<any>({
    body: "#ffffff",
    h1: "#000000",
    p: "#000000",
    button: "#007bff",
    input: "#ffffff",
    label: "#000000",
  });

  const handleColorChange = (element: string, color: string) => {
    setColors((prevState: any) => ({
      ...prevState,
      [element]: color,
    }));

    document.body.style.setProperty(`--${element}-color`, color); // Apply custom color globally
  };

  return (
    <>
      <MyNavbar chosenRole="Klant" />
      <Container className="mt-4">
        <Row style={{ marginTop: "100px" }}>
          <Col md={12}>
            <Card className="shadow-sm p-4">
              <Card.Body className="align-center">
                <h4>Instellingen - Kleur Editor</h4>
                <p>Gebruik dit om de kleuren te veranderen.</p>

                <Row className="mt-4">
                  <Col md={{ span: 6, offset: 2 }} lg={4}>
                    <h5>Body Background</h5>
                    <Form.Control
                      type="color"
                      value={colors.body}
                      onChange={(e) =>
                        handleColorChange("body", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <h5>Heading (h1)</h5>
                    <Form.Control
                      type="color"
                      value={colors.h1}
                      onChange={(e) => handleColorChange("h1", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={{ span: 6, offset: 2 }} lg={4}>
                    <h5>Paragraph (p)</h5>
                    <Form.Control
                      type="color"
                      value={colors.p}
                      onChange={(e) => handleColorChange("p", e.target.value)}
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <h5>Button</h5>
                    <Form.Control
                      type="color"
                      value={colors.button}
                      onChange={(e) =>
                        handleColorChange("button", e.target.value)
                      }
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={{ span: 6, offset: 2 }} lg={4}>
                    <h5>Input</h5>
                    <Form.Control
                      type="color"
                      value={colors.input}
                      onChange={(e) =>
                        handleColorChange("input", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <h5>Label</h5>
                    <Form.Control
                      type="color"
                      value={colors.label}
                      onChange={(e) =>
                        handleColorChange("label", e.target.value)
                      }
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* 
      <Row className="mt-4">
        <Col>
          <h1 style={{ color: colors.h1 }}>Heading (h1) Text</h1>
          <p style={{ color: colors.p }}>
            This is a paragraph. You can change its color using the color
            picker.
          </p>
          <Button style={{ backgroundColor: colors.button }}>
            This is a Button
          </Button>
          <br />
          <input type="text" style={{ backgroundColor: colors.input }} />
          <label style={{ color: colors.label }}>This is a Label</label>
        </Col>
      </Row> */}
      </Container>
    </>
  );
};

export default Instellingen;
