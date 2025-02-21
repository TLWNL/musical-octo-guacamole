import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageModel,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import "../../style/berichten.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AudioPlayer from "../AudioPlayer";

const SimpleChat = ({ role }: { role: "Klant" | "Bedrijf" }) => {
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const getAvatar = (sender: string) => {
    switch (sender) {
      case "Client":
        return "https://picsum.photos/50"; // Replace with actual avatar paths
      case "Business":
        return "https://picsum.photos/50";
      case "System":
        return "https://picsum.photos/50";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (role === "Klant") {
      setMessages([
        {
          message: "Audio Message:",
          sentTime: "just now",
          sender: "Client",
          direction: "outgoing",
          position: "single",
          type: "custom",
        },
      ]);
    } else {
      setMessages([
        {
          message: "Hello! Do you accept this request?",
          sentTime: "just now",
          sender: "Business",
          direction: "incoming",
          position: "single",
          type: "custom",
        },
      ]);
    }
  }, [role]);

  const handleSend = (text: string) => {
    if (text.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: text,
          sentTime: "just now",
          sender: role === "Klant" ? "Client" : "Business",
          direction: "outgoing",
          position: "single",
        },
      ]);

      if (role === "Klant") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: "Waiting for business response...",
            sentTime: "just now",
            sender: "System",
            direction: "incoming",
            position: "single",
            type: "custom",
          } as MessageModel,
        ]);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
      }
    }
  };

  const handleDecision = (decision: string) => {
    setMessages((prevMessages) => [
      ...prevMessages.filter((msg) => msg.type !== "custom"), // Remove waiting message
      {
        message: `Business has ${decision}ed your request.`,
        sentTime: "just now",
        sender: "Business",
        direction: "incoming",
        position: "single",
      },
    ]);
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark"
    >
      <Row className="w-100" style={{ maxWidth: "900px" }}>
        <Col xs={12}>
          <Card className="p-3 shadow-lg rounded-4">
            <MainContainer style={{ height: "75vh", width: "100%" }}>
              <ChatContainer>
                <MessageList
                  typingIndicator={
                    isTyping ? (
                      <TypingIndicator content="Business is reviewing your request..." />
                    ) : null
                  }
                >
                  {messages.map((msg, index) =>
                    msg.type === "custom" ? (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-start mb-3"
                      >
                        {role === "Klant" && index === 0 ? (
                          <div className="d-flex align-items-center">
                            <Avatar
                              src={getAvatar("Client")}
                              size="xs"
                              className="me-2"
                            />
                            <AudioPlayer src="/Untitled.mp3" />
                          </div>
                        ) : (
                          <div className="d-flex align-items-center">
                            <Avatar
                              src={"https://picsum.photos/100/50"}
                              size="xs"
                              className="me-2"
                            />
                            <Message model={msg} />
                          </div>
                        )}
                        {role === "Bedrijf" && index === 0 && (
                          <div className="d-flex gap-2 mt-2">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => handleDecision("accept")}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDecision("deny")}
                            >
                              Deny
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="d-flex align-items-center" key={index}>
                        <Avatar
                          src={"https://picsum.photos/100/50"}
                          size="sm"
                          className="me-2"
                        />
                        <Message model={msg} />
                      </div>
                    )
                  )}
                </MessageList>
              </ChatContainer>
            </MainContainer>

            <MessageInput
              placeholder="Type a message..."
              onSend={handleSend}
              className="mt-3"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleChat;
