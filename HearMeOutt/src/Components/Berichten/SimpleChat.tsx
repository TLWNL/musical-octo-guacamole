import React, { useState } from "react";
import { MessageList, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const SimpleChat = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = (text: string) => {
    if (!text) return;
    setMessages([...messages, { position: "right", type: "text", text }]);
  };

  return (
    <div
      className="w-100"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full height of parent container
        border: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {/* Wrapper for MessageList to apply styles */}
      <div
        style={{
          flex: 1, // Takes up remaining space
          overflowY: "auto", // Scrollable if messages exceed container height
          marginBottom: "10px", // Add some spacing between messages and input
        }}
      >
        <MessageList
          className="message-list"
          dataSource={messages}
          referance={React.createRef()}
          lockable={true}
        />
      </div>

      {/* Wrapper div for Input to apply style */}
      <div style={{ flexShrink: 0 }}>
        <Input
          placeholder="Type a message..."
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              sendMessage((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = ""; // Clear input after sending
            }
          }}
          rightButtons={
            <Button text="Send" onClick={() => sendMessage("Hello!")} />
          }
          maxHeight={40} // Set reasonable height for input
        />
      </div>
    </div>
  );
};

export default SimpleChat;
