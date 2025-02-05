import { Card, Row, Col } from "react-bootstrap";
import MyAudioPlayer from "../AudioPlayer"; // Assuming MyAudioPlayer is your audio component

interface ResponseCardProps {
  name: string;
  audioSrc: string; // Path to the audio file
  onClick: () => void;
}

function ResponseCard({ name, audioSrc, onClick }: ResponseCardProps) {
  return (
    <Card className="p-4 shadow-sm border rounded" onClick={onClick}>
      <Row className="align-items-center">
        <Col>
          <h6 className="mb-0">{name}</h6>
        </Col>
      </Row>

      {/* Display MyAudioPlayer */}
      <Row className="mt-3">
        <Col>
          <MyAudioPlayer src={audioSrc} />
        </Col>
      </Row>
    </Card>
  );
}

export default ResponseCard;
