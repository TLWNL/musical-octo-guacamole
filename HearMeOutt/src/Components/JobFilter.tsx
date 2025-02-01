import { useState } from "react";
import { Row, Col, Form, Dropdown, Button } from "react-bootstrap";

function JobFilter() {
  const filters: string[] = [
    "Afstand",
    "Denkniveau",
    "Salaris",
    "Uren per week",
    "Duur contract",
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>(
    filters.reduce(
      (acc, filter) => ({
        ...acc,
        [filter]: `Selecteer ${filter.toLowerCase()}`,
      }),
      {}
    )
  );

  const handleSelect = (filter: string, value: string | null) => {
    if (value) {
      setSelectedOptions((prev) => ({ ...prev, [filter]: value }));
    }
  };

  return (
    <Col
      md={{ span: 3 }}
      className="ms-4 p-3 d-flex flex-column"
      style={{
        background: "#879095",
        height: "85vh",
        borderRadius: "15px",
        color: "white",
      }}
    >
      <Row>
        <Col md={8} className="mb-4 mt-1">
          <h2 style={{ fontSize: "25px", textAlign: "left" }}>Filters</h2>
        </Col>
        <Col md={4} className="mt-1">
          <h2 style={{ fontSize: "20px", textAlign: "left" }}>Reset Filters</h2>
        </Col>
      </Row>

      {filters.map((filter, index) => (
        <Form.Group className="mb-3 mt-4" key={index}>
          <Form.Label>{filter}</Form.Label>
          <Dropdown onSelect={(eventKey) => handleSelect(filter, eventKey)}>
            <Dropdown.Toggle variant="light" className="w-100">
              {selectedOptions[filter]}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Optie 1">Optie 1</Dropdown.Item>
              <Dropdown.Item eventKey="Optie 2">Optie 2</Dropdown.Item>
              <Dropdown.Item eventKey="Optie 3">Optie 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      ))}

      <Button variant="primary" className="mt-auto">
        Pas toe
      </Button>
    </Col>
  );
}

export default JobFilter;
