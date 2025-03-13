import { useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import RecordingComponent from "./RecordingComponent"; // Assuming this is your recording component

const RecordingCard = () => {
  const [recordings, setRecordings] = useState<
    Array<{ id: string; audio: Blob }>
  >([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const casusList = ["Casus 1", "Casus 2", "Casus 3"]; // Example list of cases

  const handleNextCasus = () => {
    if (currentIndex < casusList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle completion (e.g., submit or finish process)
    }
  };

  const handleRecordingEnd = (audioBlob: Blob) => {
    const newRecording = {
      id: Date.now().toString(), // Unique identifier for the recording
      audio: audioBlob,
    };

    setRecordings((prevRecordings) => [...prevRecordings, newRecording]);
    setAudioUrl(URL.createObjectURL(audioBlob));
    setIsRecording(false);
  };

  const handleRecordingClick = () => {
    setIsRecording(!isRecording);
  };

  const handleAudioClick = (audioBlob: Blob) => {
    const audio = new Audio(URL.createObjectURL(audioBlob));
    audio.play();
    setIsPlaying(true);
  };

  return (
    <Card
      className="shadow-lg p-4 w-100"
      style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
    >
      <Card.Body className="d-flex flex-column align-items-center">
        <Col md={12}>
          <RecordingComponent />
        </Col>

        <Form.Group controlId="textInput" className="mt-3 w-100">
          <Form.Label className="text-muted">Extra opmerkingen</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Vul hier iets toe wat betrekking heeft tot je spraakmemo."
            style={{ resize: "none" }}
          />
        </Form.Group>

        {/* List of Recordings */}
        <div className="mt-3 w-100">
          {recordings.length > 0 && (
            <div>
              <h5>Opnames:</h5>
              <ul className="list-unstyled">
                {recordings.map((recording) => (
                  <li
                    key={recording.id}
                    className="mb-2"
                    style={{
                      cursor: "pointer",
                      color: "blue",
                    }}
                    onClick={() => handleAudioClick(recording.audio)}
                  >
                    Opname {recording.id}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button variant="dark" className="mt-3" onClick={handleNextCasus}>
          {currentIndex < casusList.length - 1 ? "Volgende" : "Afronden"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecordingCard;
