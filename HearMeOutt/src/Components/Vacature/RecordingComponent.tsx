import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player"; // Assuming you're using react-h5-audio-player
import "react-h5-audio-player/lib/styles.css"; // Import default styles
import { FaMicrophone } from "react-icons/fa";

const RecordingComponent = () => {
  const [isRecording, setIsRecording] = useState(false);

  // Toggle recording state
  const handleRecordClick = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <Row>
      <Col className="mt-4" md={{ span: 7, offset: 2 }}>
        <AudioPlayer src="/Untitled.mp3" />
      </Col>
      <Col className="mt-4 d-flex justify-content-center align-items-center">
        <Button
          onClick={handleRecordClick}
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
    </Row>
  );
};

export default RecordingComponent;
