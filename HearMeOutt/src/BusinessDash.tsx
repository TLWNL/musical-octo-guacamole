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
  interface JobPostingType {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    hours: string;
    isNew?: boolean;
  }
  const [sortOption, setSortOption] = useState<string>("Populariteit");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  ); // State for checkboxes
  const jobPostings: JobPostingType[] = [
    {
      id: 1,
      title: "Verzorger",
      company: "Zorginstelling De Hoop",
      location: "Groningen",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      isNew: true,
    },
    {
      id: 2,
      title: "Verzorger",
      company: "Accuraat Begeleid Wonen",
      location: "Amsterdam",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      isNew: true,
    },
  ];
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
          style={{ paddingTop: "40px", position: "relative" }}
        >
          <Col xs={12} className="d-md-none">
            <JobFilter />
          </Col>

          <Col md={3} className="d-none d-md-block">
            <JobFilter />
          </Col>

          {/* Sort Dropdown Button */}
          <Col md={6} sm={12} className="position-relative">
            {/* Job Postings Grid */}
            <Row className="mt-4 gy-3">
              {jobPostings.map((job) => (
                <Col xs={12} sm={6} md={6} key={job.id}>
                  <h4>
                    {job.title} - {job.company}
                  </h4>

                  <Row className="gy-3">
                    {Array.from({ length: 4 }, (_, i) => (
                      <Col xs={12} key={`${job.id}-${i}`}>
                        <ResponseCard
                          audioSrc="/casus1.opus"
                          name={`Kandidaat ${i + 1} voor ${job.title}`}
                          onClick={(event: React.MouseEvent<HTMLElement>) =>
                            handleShowModal(
                              {
                                name: `Kandidaat ${i + 1} voor ${job.title}`,
                                audioSrc: "/casus1.opus",
                              },
                              event
                            )
                          }
                        />
                      </Col>
                    ))}
                  </Row>
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
            <Col xs={12}>
              <ResponseCard
                name={selectedCard?.name}
                audioSrc={selectedCard?.audioSrc}
                onClick={() => {}}
              />
            </Col>
          </Row>

          {/* Uitnodigen Voor text */}
          <Row className="mb-4 align-items-center">
            <Col xs={6}>
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
            {Array.from({ length: 1 }, (_, index) => (
              <Col xs={12} key={index}>
                <Row
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Col
                    xs={3}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon size="3x" icon={faUser} />
                  </Col>
                  <Col xs={9}>
                    <Row>
                      <p>Gesprek met HR</p>
                    </Row>
                    <Row>
                      <p>
                        <b>Zorginstelling De Hoop </b>
                      </p>
                    </Row>
                  </Col>

                  {/* Checkbox Column */}
                  <Col
                    xs={3}
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
