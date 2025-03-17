import React, { useState } from "react";
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Don't forget to import the CSS for DatePicker

const MessagesCustom = () => {
  const [accepted, setAccepted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [dateSelected, setDateSelected] = useState(null);
  const [messages, setMessages] = useState([
    {
      position: "left",
      type: "text",
      text: "Welkom bij de chat!",
      date: new Date(),
    },
    {
      position: "left", // Make this message appear on the left
      type: "audio",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Add audio URL
      date: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { position: "right", type: "text", text: inputText, date: new Date() },
      ]);
      setInputText("");
    }
  };

  const handleButtonClickAccept = () => {
    setAccepted(true);
  };

  const handleDateSelection = () => {
    setDateSelected(true);
  };

  const handleButtonClickReject = () => {
    setAccepted(false);
    setClicked(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="w-100" style={{ maxWidth: "600px" }}>
        <Col>
          <Card className="p-3">
            <div style={{ height: "50vh", overflowY: "auto" }}>
              <MessageBox
                position={"left"}
                type={"text"}
                title={"Gebruiker #1234"}
                text="Reactie van Gebruiker #1234 op casus 1:"
              />
              <MessageBox
                position={"left"}
                type={"audio"}
                data={{
                  audioURL:
                    "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
                }}
              />
              <MessageBox
                position={"left"}
                type={"text"}
                text="Reactie van Gebruiker #1234 op casus 2:"
              />
              <MessageBox
                position={"left"}
                type={"audio"}
                data={{
                  audioURL:
                    "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
                }}
              />
              <Button
                text={"Nodig Sollicitant uit op gesprek"}
                onClick={handleButtonClickAccept}
                title="Send"
              />
              <Button
                text={"Wijs sollicitant af"}
                onClick={handleButtonClickReject}
                title="Send"
              />

              {accepted ? (
                <>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Selecteer een datum"
                    startOpen="true"
                    isClearable
                  />
                  <Button
                    text={"Selecteer Datum"}
                    onClick={handleDateSelection}
                    title="Send"
                  />
                  {dateSelected && (
                    <>
                      <MessageBox
                        position={"left"}
                        type={"text"}
                        text={`Datum geselecteerd`}
                      />
                      <MessageBox
                        position={"left"}
                        type={"text"}
                        text={`Wachtend op confirmatie van gebruiker #1234`}
                      />
                    </>
                  )}
                </>
              ) : clicked ? (
                <MessageBox
                  position={"left"}
                  type={"text"}
                  text="Gebruiker Afgewezen"
                />
              ) : (
                <p></p>
              )}
            </div>
            <div className="d-flex mt-2">
              {/* <Input
                placeholder="Type a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              /> */}
              {/* <Button text="Send" onClick={handleSend} /> */}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MessagesCustom;
