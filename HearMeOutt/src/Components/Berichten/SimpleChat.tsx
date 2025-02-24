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
  const [selectedVerzorger, setSelectedVerzorger] = useState<string | null>(
    null
  );

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
        {
          message: "Je bent uitgenodigd voor een gesprek!",
          sentTime: "just now",
          sender: "Business",
          direction: "incoming",
          position: "single",
          type: "custom",
        },
      ]);
    } else {
      setMessages([
        {
          message: "Audio Message:",
          sentTime: "just now",
          sender: "Client",
          direction: "incoming",
          position: "single",
          type: "custom",
        },

        {
          message: "Wil je verder gaan met deze sollicitatie?",
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
        message: `Je hebt de sollicitatie ${decision}.`,
        sentTime: "just now",
        sender: "Business",
        direction: "incoming",
        position: "single",
      },
    ]);
  };

  const handleVerzorgerSelect = (verzorger: string) => {
    setSelectedVerzorger(verzorger);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: `You selected ${verzorger}.`,
        sentTime: "just now",
        sender: "System",
        direction: "incoming",
        position: "single",
        type: "custom",
      },
    ]);
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark p-3"
    >
      <Row className="w-100" style={{ maxWidth: "900px" }}>
        <Col xs={12}>
          <Card className="p-3 shadow-lg rounded-4">
            <MainContainer style={{ height: "60vh", width: "100%" }}>
              <ChatContainer>
                <MessageList
                  typingIndicator={
                    isTyping ? (
                      <TypingIndicator content="Business is reviewing your request..." />
                    ) : null
                  }
                >
                  {messages.map((msg, index) => {
                    return msg.type === "custom" &&
                      index === 0 &&
                      role === "Bedrijf" ? (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-start mb-3"
                      >
                        <div className="d-flex align-items-center">
                          <AudioPlayer src="/Untitled.mp3" />
                        </div>
                      </div>
                    ) : msg.type === "custom" ? (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-start mb-3"
                      >
                        {role === "Klant" && index === 0 ? (
                          <div className="d-flex align-items-center">
                            <AudioPlayer src="/Untitled.mp3" />
                          </div>
                        ) : (
                          <div className="d-flex align-items-center">
                            <Message model={msg} />
                          </div>
                        )}
                        {role === "Bedrijf" && index === 1 && (
                          <div className="d-flex gap-2 mt-2">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => handleDecision("geaccepteerd")}
                            >
                              Accepteer
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDecision("afgewezen")}
                            >
                              Wijs af
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="d-flex align-items-center" key={index}>
                        <Message model={msg} />
                      </div>
                    );
                  })}
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
