import { useState } from "react";
import { Col, Container, Row, Dropdown, ButtonGroup } from "react-bootstrap";
import MyNavbar from "./MyNavBar";
import JobFilter from "./JobFilter";
import JobPosting from "./JobPosting";

function KlantDash() {
  const [sortOption, setSortOption] = useState("Populariteit");

  return (
    <>
      <Container fluid>
        <MyNavbar />
        <Row
          className="mt-5"
          style={{ paddingTop: "80px", position: "relative" }}
        >
          <JobFilter />

          {/* Sort Dropdown Button */}
          <Col md={7} className="position-relative">
            <Dropdown as={ButtonGroup} className="end-0 me-3">
              <Dropdown.Toggle variant="light">
                Sorteer op {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("Populariteit")}>
                  Populariteit
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Salaris")}>
                  Salaris
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Locatie")}>
                  Locatie
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Job Postings Grid */}
            <Row style={{ marginLeft: "120px" }} className="gy-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <Col key={index} md={6}>
                  <JobPosting
                    title="Assistent manager groenteboer"
                    company="Rabobank Groningen"
                    location="Groningen"
                    salary="€2500,- / €3000,- per maand"
                    hours="32 tot 40 uur per maand"
                    isNew={index === 0}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default KlantDash;
