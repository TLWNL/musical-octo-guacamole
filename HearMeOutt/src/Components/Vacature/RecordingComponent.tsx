import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player"; // Assuming you're using react-h5-audio-player
import "react-h5-audio-player/lib/styles.css"; // Import default styles
import { FaMicrophone } from "react-icons/fa";

const RecordingComponent: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState<
    Array<{ id: number; name: string }>
  >([]);
  const [currentRecordingId, setCurrentRecordingId] = useState<number>(0);
  const [selectedRecordings, setSelectedRecordings] = useState<Set<number>>(
    new Set()
  );

  // Handle recording end (when isRecording is set to false)
  const handleStopRecording = () => {
    // Add the new recording row when the recording stops
    setRecordings([
      ...recordings,
      { id: currentRecordingId, name: `Opname ${currentRecordingId + 1}` },
    ]);
    setCurrentRecordingId(currentRecordingId + 1);
    setIsRecording(false); // Stop recording
  };

  const handleCheckboxChange = (id: number) => {
    const updatedSelections = new Set(selectedRecordings);
    if (updatedSelections.has(id)) {
      updatedSelections.delete(id);
    } else {
      updatedSelections.add(id);
    }
    setSelectedRecordings(updatedSelections);
  };

  return (
    <Row className="mb-4">
      <Col className="mt-4" md={{ span: 7, offset: 2 }}>
        {/* Audio Player to preview the recording */}
        <AudioPlayer src="/Untitled.mp3" />
      </Col>
      <Col className="mt-4 d-flex justify-content-center align-items-center">
        <Button
          onClick={() => {
            if (isRecording) {
              handleStopRecording(); // Stop recording
            } else {
              setIsRecording(true); // Start recording
            }
          }}
          style={{
            backgroundColor: "red",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            position: "relative",
            animation: isRecording ? "flash 1s infinite" : "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaMicrophone size={24} color="white" />
        </Button>
      </Col>

      {/* Flashing effect */}
      <style>
        {`
          @keyframes flash {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>

      {/* Render each recording as a new row */}
      {recordings.map((recording) => (
        <Col key={recording.id} md={12} className="mt-4">
          <Row>
            <Col md={4}>
              <h6>{recording.name}</h6>
            </Col>
            <Col md={4}>
              {/* Checkbox for selection */}
              <Form.Check
                type="checkbox"
                label="Select"
                checked={selectedRecordings.has(recording.id)}
                onChange={() => handleCheckboxChange(recording.id)}
              />
            </Col>
            <Col md={4}>
              {/* Play Button */}
              <Button
                onClick={() => {
                  const audio = new Audio("/Untitled.mp3"); // Play the audio file
                  audio.play();
                }}
              >
                Play
              </Button>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default RecordingComponent;
