import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  ButtonGroup,
  Modal,
  Button,
} from "react-bootstrap";
import JobFilter from "./Components/JobFilter";
import MyNavbar from "./Components/MyNavBar";
import ResponseCard from "./Components/Bedrijf/ResponseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const BusinessDash: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("Populariteit");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  ); // State for checkboxes

  // Toggle modal visibility
  const handleShowModal = (card: any, event: React.MouseEvent<HTMLElement>) => {
    // Check if the click target is an audio player
    if (event.target instanceof HTMLAudioElement) {
      return; // If the click was on the audio player, do nothing
    }
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Toggle checkbox state
  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle checkbox state
    }));
  };

  // Check if any checkbox is selected
  const isAnyChecked = Object.values(checkedItems).some((checked) => checked);

  return (
    <>
      <Container fluid>
        <MyNavbar chosenRole="Bedrijf" />
        <Row
          className="mt-5"
          style={{ paddingTop: "80px", position: "relative" }}
        >
          <JobFilter />

          {/* Sort Dropdown Button */}
          <Col md={{ span: 8 }} className="position-relative">
            <Dropdown as={ButtonGroup} className="end-4 me-3">
              <Row>
                <Col>
                  <p>Sorteer op </p>
                </Col>
                <Col>
                  <Dropdown.Toggle variant="light">
                    {sortOption}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setSortOption("Populariteit")}
                    >
                      Populariteit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortOption("Salaris")}>
                      Salaris
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortOption("Locatie")}>
                      Locatie
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Col>
              </Row>
            </Dropdown>

            {/* Job Postings Grid */}
            <Row style={{ marginLeft: "120px" }} className="mt-4 gy-3">
              {Array.from({ length: 6 }, (_, index) => (
                <Col md={6} key={index}>
                  <ResponseCard
                    audioSrc="/casus1.opus"
                    name={`Kandidaat #${index + 1}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) =>
                      handleShowModal(
                        {
                          name: `Kandidaat #${index + 1}`,
                          audioSrc: "/casus2.opus",
                        },
                        event
                      )
                    }
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Modal to show the selected ResponseCard */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Col>
              <ResponseCard
                name={selectedCard?.name}
                audioSrc={selectedCard?.audioSrc}
                onClick={() => {}}
              />
            </Col>
          </Row>

          {/* Uitnodigen Voor text */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h5>Uitnodigen Voor</h5>
            </Col>

            {/* Render the button only if one or more checkboxes are checked */}
            {isAnyChecked && (
              <Col className="text-end">
                <Button variant="success">Versturen</Button>
              </Col>
            )}
          </Row>

          {/* Display additional 5 cards */}
          <Row className="gy-3">
            {Array.from({ length: 5 }, (_, index) => (
              <Col md={12} key={index}>
                <Row
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Col
                    md={{ span: 2, offset: 1 }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon size="3x" icon={faUser} />
                  </Col>
                  <Col md={8}>
                    <Row>
                      <p>Assistent manager groenteboer</p>
                    </Row>
                    <Row>
                      <p>
                        <b>Rabobank Groningen</b>
                      </p>
                    </Row>
                  </Col>

                  {/* Checkbox Column */}
                  <Col
                    md={1}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      checked={!!checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BusinessDash;
