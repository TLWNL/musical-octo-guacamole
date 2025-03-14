import React, { useState } from "react";
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Container, Row, Col, Card } from "react-bootstrap";

interface ChatMessage {
  position: "left" | "right";
  type: "text";
  text: string;
  date: Date;
}

const SimpleChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      position: "left",
      type: "text",
      text: "Welkom bij de chat!",
      date: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { position: "right", type: "text", text: inputText, date: new Date() },
      ]);
      setInputText("");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="w-100" style={{ maxWidth: "600px" }}>
        <Col>
          <Card className="p-3">
            <div style={{ height: "50vh", overflowY: "auto" }}>
              {messages.map((msg, index) => (
                
              ))}
            </div>
            <div className="d-flex mt-2">

              <Button text="Send" onClick={handleSend} />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleChat;
