import React, { useState } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import JobPosting from "../JobPosting"; // Assuming JobPosting is in the same directory
import MyNavbar from "../MyNavBar";
import { useNavigate } from "react-router-dom";

const VacaturePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Add logic for handling the search (e.g., filter job postings)
    console.log("Search clicked:", searchTerm);
  };

  const handleNewVacatureClick = () => {
    navigate("/bedrijf/nieuwe-vacature");
  };

  return (
    <>
      <MyNavbar chosenRole="Bedrijf" />
      <Container className="mt-4">
        <Row className="mb-4" style={{ marginTop: "100px" }}>
          <Col md={3}>
            <Button
              variant="success"
              onClick={handleNewVacatureClick}
              style={{ width: "auto", padding: "10px 20px" }}
            >
              Maak nieuwe Vacature
            </Button>
          </Col>
          <Col xs="auto" className="ms-auto d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Zoek vacatures"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: "200px" }} // Adjust width as needed
            />
            <Button
              variant="outline-secondary"
              onClick={handleSearch}
              style={{ marginLeft: "10px" }} // Adding space between the input and button
            >
              Zoek
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <JobPosting
              title="Verzorger"
              company="De Hoop"
              location="Amsterdam"
              salary="€3,500 - €4,500"
              hours="40 uur"
              isNew={true}
              onClick={() => console.log("Job clicked")}
            />
          </Col>
          <Col md={4}>
            <JobPosting
              title="Verzorger"
              company="Accuraat Begeleid Wonen"
              location="Rotterdam"
              salary="€2,800 - €3,500"
              hours="40 uur"
              isNew={false}
              onClick={() => console.log("Job clicked")}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VacaturePage;
