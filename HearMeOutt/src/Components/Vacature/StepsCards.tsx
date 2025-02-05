import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaRegPlayCircle, FaHandshake } from "react-icons/fa"; // Import the required icons

type StepCardData = {
  header: string;
  title: string;
  text: string;
  icon: React.ReactNode;
};

const steps: StepCardData[] = [
  {
    header: "Header 1",
    title: "je verstuurt een spraakmemo.",
    text: "Leuk dat je solliciteert! We bekijken je sollicitatie en beoordelen of je geschikt bent voor de functie en het bedrijf.",
    icon: <FaRegPlayCircle size={100} />,
  },
  {
    header: "Header 2",
    title: "het eerste contact.",
    text: "Onze recruiter belt of mailt je. We bespreken je sollicitatie en je carrièremogelijkheden.",
    icon: <FaHandshake size={100} />,
  },
  {
    header: "Header 3",
    title: "Card 3 Title",
    text: "This is the text for the third card.",
    icon: <FaRegPlayCircle size={24} />, // Use any default icon for the other cards
  },
  {
    header: "Header 4",
    title: "Card 4 Title",
    text: "This is the text for the fourth card.",
    icon: <FaRegPlayCircle size={24} />,
  },
  {
    header: "Header 5",
    title: "Card 5 Title",
    text: "This is the text for the fifth card.",
    icon: <FaRegPlayCircle size={24} />,
  },
];

function StepsCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "right" ? 300 : -300; // Scroll amount (adjust as necessary)
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Container fluid style={{ marginTop: "50px" }}>
        <Row className="mt-4">
          {/* Title in a Column */}
          <Col
            md={{ span: 3, offset: 1 }}
            style={{
              fontSize: "20px",
              lineHeight: "28px",
              textAlign: "left",
              color: "#505D68",
            }}
          >
            <p>het proces </p>
          </Col>

          {/* Steps with 2 Col space between them */}
          <Col
            md={{ span: 6 }}
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              position: "relative",
            }}
            ref={scrollContainerRef}
          >
            {steps.map((step, index) => (
              <Col
                md={{ span: 2 }}
                key={index}
                style={{
                  flex: "0 0 auto",
                  margin: "0 10px",
                  minWidth: "18rem",
                  position: "relative",
                }}
              >
                <Card
                  border="primary"
                  style={{
                    width: "18rem",
                    backgroundColor: index % 2 === 0 ? "#424B5A" : "#879095", // Alternating colors
                    color: "white", // White text color
                  }}
                >
                  <Card.Header>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#007bff",
                        padding: "5px 15px",
                        borderRadius: "30px",
                        display: "inline-block",
                        fontWeight: "bold",
                      }}
                    >
                      {index + 1} van {steps.length}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      {step.title}
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      {step.text}
                    </Card.Text>
                    {step.icon}
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/* Blur effect */}
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "50px",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
                pointerEvents: "none",
              }}
            ></div>

            {/* Arrow to scroll */}
            <div
              onClick={() => handleScroll("right")}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                backgroundColor: "#007bff",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <FaArrowRight color="white" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StepsCards;
