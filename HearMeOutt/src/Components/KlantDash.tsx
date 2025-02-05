import { useState } from "react";
import { Col, Container, Row, Dropdown, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MyNavbar from "./MyNavBar";
import JobFilter from "./JobFilter";
import JobPosting from "./JobPosting";

// Define the type for a job posting
interface JobPostingType {
  title: string;
  company: string;
  location: string;
  salary: string;
  hours: string;
  isNew?: boolean;
}

const KlantDash: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("Populariteit"); // State for sorting option
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle job click
  const handleJobClick = (): void => {
    navigate(`/vacature/1`); // Redirect to the job description page
  };

  const jobPostings: JobPostingType[] = [
    {
      title: "Verzorger",
      company: "Zorginstelling De Hoop",
      location: "Groningen",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      isNew: true,
    },
  ];

  return (
    <>
      <Container fluid>
        <MyNavbar chosenRole="Klant" />
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
              {jobPostings.map((job, index) => (
                <Col key={index} md={6}>
                  <JobPosting
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    hours={job.hours}
                    isNew={job.isNew}
                    onClick={() => handleJobClick()} // Trigger click handler with job
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KlantDash;
