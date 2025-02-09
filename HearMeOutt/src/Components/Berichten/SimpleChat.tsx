import React, { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageModel,
} from "@chatscope/chat-ui-kit-react";
import "../../style/berichten.css";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import React-Bootstrap components

const SimpleChat = () => {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: "Hello! How can I help you?",
      sentTime: "just now",
      sender: "Chatbot",
      direction: "incoming", // Must specify direction
      position: "single", // Positioning of the message in the chat
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string) => {
    if (text.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: text,
          sentTime: "just now",
          sender: "You",
          direction: "outgoing", // Outgoing message
          position: "single",
        },
      ]);
    }
  };

  return (
    <Container fluid className="vh-60 simple-chat-container">
      <Row className="h-100">
        <Col xs={12} className="d-flex flex-column">
          {/* Chat Window */}
          <Card className="flex-grow-1 p-3 shadow-sm d-flex flex-column">
            <MainContainer className="flex-grow-1">
              <ChatContainer className="flex-grow-1">
                <MessageList
                  typingIndicator={
                    isTyping ? (
                      <TypingIndicator content="Chatbot is typing..." />
                    ) : null
                  }
                >
                  {messages.map((msg, index) => (
                    <Message key={index} model={msg} />
                  ))}
                </MessageList>
              </ChatContainer>
            </MainContainer>

            {/* Message Input at the Bottom */}
            <MessageInput
              placeholder="Type a message..."
              onSend={handleSend}
              className="mt-auto" // This pushes the input to the bottom
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleChat;
