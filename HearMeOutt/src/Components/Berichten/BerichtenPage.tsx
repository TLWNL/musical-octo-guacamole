import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import BerichtenBox from "./BerichtenBox";
import SimpleChat from "./SimpleChat";

function BerichtenPage() {
  const selectedUser = {
    name: "Assistent manager groenteboer",
    title: "Gebruiker #1234",
  };

  return (
    <Container
      fluid
      style={{ marginTop: "100px", height: "calc(100vh - 100px)" }}
    >
      <Row className="h-100">
        {/* Left column with messages */}
        <Col md={3} className="d-flex flex-column">
          <BerichtenBox />
        </Col>

        {/* Right column with chat header and window */}
        <Col md={9} className="d-flex flex-column">
          {/* Chat Header */}
          <Card className="p-3 d-flex flex-row align-items-center shadow-sm">
            {/* User icon */}
            <FontAwesomeIcon icon={faUser} size="2x" className="me-3" />

            {/* Name and Title */}
            <div className="flex-grow-1">
              <div>
                <strong>{selectedUser.name}</strong>
              </div>
              <div className="text-muted">{selectedUser.title}</div>
            </div>

            {/* Options button */}
            <Button variant="light">
              <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
          </Card>

          {/* Chat Window */}
          <Card className="flex-grow-1 mt-3 p-3 shadow-sm">
            <div className="h-100 d-flex align-items-center justify-content-center text-muted">
              <SimpleChat />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BerichtenPage;
