import { useState } from "react";
import { Row, Col, Form, Dropdown, Button, Accordion } from "react-bootstrap";

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
    <>
      <Accordion defaultActiveKey="" className="d-md-none">
        {" "}
        {/* Only for mobile */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filters</Accordion.Header>
          <Accordion.Body>
            {filters.map((filter, index) => (
              <Form.Group className="mb-3" key={index}>
                <Form.Label>{filter}</Form.Label>
                <Dropdown
                  onSelect={(eventKey) => handleSelect(filter, eventKey)}
                >
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
            <Button variant="primary" className="w-100">
              Pas toe
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Col
        md={8}
        xs={12}
        className="p-3 d-none d-md-flex flex-column"
        style={{
          background: "#879095",
          borderRadius: "15px",
          color: "white",
          height: "85vh",
        }}
      >
        <Row className="d-flex align-items-center">
          <Col md={8}>
            <h2 className="fs-5 text-start">Filters</h2>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="outline-light" size="sm">
              Reset
            </Button>
          </Col>
        </Row>

        {filters.map((filter, index) => (
          <Form.Group className="mb-3" key={index}>
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
    </>
  );
}

export default JobFilter;
