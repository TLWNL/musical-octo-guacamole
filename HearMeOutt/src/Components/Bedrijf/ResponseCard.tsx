import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import MyAudioPlayer from "../AudioPlayer"; // Assuming MyAudioPlayer is your audio component
import { useState } from "react";

interface ResponseCardProps {
  name: string;
  audioSrc: string; // Path to the audio file
  onClick: (event: React.MouseEvent<HTMLElement>) => void; // Modify to accept event
}

function ResponseCard({ name, audioSrc, onClick }: ResponseCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Card className="p-4 shadow-sm border rounded" onClick={onClick}>
      <Row className="align-items-center">
        <Col>
          <h6 className="mb-0">{name}</h6>
        </Col>
      </Row>

      {/* Display Casus 1 and Casus 2 audio players */}
      <Row className="mt-3">
        <Col>
          <h6>Casus 1:</h6>
          <MyAudioPlayer src={audioSrc} />
          <Button onClick={handleShowModal} variant="secondary">
            Zie Casus
          </Button>
        </Col>
        <Col>
          <h6>Casus 2:</h6>
          <MyAudioPlayer src={audioSrc} />
          <Button onClick={handleShowModal} variant="secondary">
            Zie Casus
          </Button>
        </Col>
      </Row>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Casus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hoe zou jij ervoor kunnen zorgen dat ze zich niet meer eenzaam voelt?
          Daarnaast, hoe kan je het beste omgaan met iemand die vaak
          stemmingswisselingen heeft, die soms zelfs heel heftig kunnen zijn.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ResponseCard;
