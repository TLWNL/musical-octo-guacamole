import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Row, Col } from "react-bootstrap";

function BerichtenBox() {
  const messages = [
    {
      id: 1,
      name: "Assistent manager groenteboer",
      username: "Gebruiker #1234",
    },
    { id: 2, name: "Jane Smith", username: "Gebruiker #1234" },
    { id: 3, name: "Michael Brown", username: "Gebruiker #1235" },
    { id: 4, name: "Emily White", username: "Gebruiker #1236" },
    { id: 5, name: "Chris Johnson", username: "Gebruiker #1237" },
    { id: 6, name: "Anna Davis", username: "Gebruiker #1238" },
  ];
  return (
    <>
      {" "}
      <Card className="p-3 shadow-sm flex-shrink-0">
        <h3 className="mb-3 text-center">Berichten</h3>
      </Card>
      <div className="d-flex flex-column flex-grow-1">
        {messages.map((message) => (
          <Card
            key={message.id}
            className="p-3 shadow-sm flex-grow-1 d-flex justify-content-center"
            style={{ textAlign: "left" }}
          >
            <Row className="align-items-center">
              {/* Icon on the left */}
              <Col xs="auto">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </Col>

              {/* Two rows in the same column */}
              <Col>
                <Row>
                  <Col>
                    <strong>{message.name}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-muted">{message.username}</Col>
                </Row>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BerichtenBox;
