import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavBar";
import JobFilter from "./JobFilter";
import JobPosting from "./JobPosting";

interface JobPostingType {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  hours: string;
  isNew?: boolean;
}

const KlantDash: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("Populariteit");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleJobClick = (id: number): void => {
    navigate(`/vacature/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const jobPostings: JobPostingType[] = [
    {
      id: 1,
      title: "Verzorger",
      company: "Zorginstelling De Hoop",
      location: "Groningen",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      isNew: true,
    },
    {
      id: 2,
      title: "Verzorger",
      company: "Accuraat Begeleid Wonen",
      location: "Amsterdam",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      isNew: true,
    },
  ];

  const filteredJobPostings = jobPostings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid>
      <MyNavbar chosenRole="Klant" />

      <Row className="mt-5 px-3" style={{ paddingTop: "40px" }}>
        {/* Mobile: Filters go above jobs */}
        <Col xs={12} className="d-md-none">
          <JobFilter />
        </Col>

        <Col md={3} className="d-none d-md-block">
          <JobFilter />
        </Col>

        {/* Job Listings & Sort */}
        <Col md={9} className="mt-3">
          <Row className="justify-content-between align-items-center mx-1">
            {/* Search Bar */}
            <Col xs={12} md="auto" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Zoek naar vacatures..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Col>

            {/* Sort Dropdown */}
            <Col xs={12} md="auto" className="mb-3">
              <Dropdown as={ButtonGroup} className="w-100 w-md-auto">
                <Dropdown.Toggle variant="light" className="w-100">
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
            </Col>
          </Row>

          {/* Job Listings */}
          <Row className="gy-3">
            {filteredJobPostings.map((job, index) => (
              <Col key={index} xs={12} md={6}>
                <JobPosting
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  hours={job.hours}
                  isNew={job.isNew}
                  onClick={() => handleJobClick(job.id)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default KlantDash;
