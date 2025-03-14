import { Card, Row, Col, Button, Badge } from "react-bootstrap";

const BerichtenBox = ({ role }: { role: "Klant" | "Bedrijf" }) => {
  const messages = [
    {
      id: 1,
      name: "Verzorger",
      username: "Gebruiker #1234",
    },
    { id: 2, username: "Gebruiker #1234" },
    { id: 3, username: "Gebruiker #1235" },
    { id: 4, username: "Gebruiker #1236" },
    { id: 5, username: "Gebruiker #1237" },
    { id: 6, username: "Gebruiker #1238" },
  ];

  const jobPostings = [
    {
      id: 1,
      title: "Verzorger",
      company: "Zorginstelling De Hoop",
      location: "Groningen",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      status: "accepted", // Added status for accepted/rejected
      responses: [
        {
          id: 1,
          name: "Kandidaat 1",
          audioSrc: "/casus1.opus",
          status: "accepted",
        },
        {
          id: 2,
          name: "Kandidaat 2",
          audioSrc: "/casus2.opus",
          status: "rejected",
        },
      ],
    },
    {
      id: 2,
      title: "Verzorger",
      company: "Accuraat Begeleid Wonen",
      location: "Amsterdam",
      salary: "€2500,- / €3000,- per maand",
      hours: "32 tot 40 uur per maand",
      status: "rejected", // Added status for accepted/rejected
      responses: [
        {
          id: 1,
          name: "Kandidaat 1",
          audioSrc: "/casus1.opus",
          status: "rejected",
        },
        {
          id: 2,
          name: "Kandidaat 2",
          audioSrc: "/casus2.opus",
          status: "accepted",
        },
      ],
    },
    {
      id: 3,
      title: "Verzorger",
      company: "Zorginstelling De Geluk",
      location: "Rotterdam",
      salary: "€2200,- / €2700,- per maand",
      hours: "30 tot 35 uur per maand",
      status: "accepted", // Added status for accepted/rejected
      responses: [
        {
          id: 1,
          name: "Kandidaat 1",
          audioSrc: "/casus3.opus",
          status: "accepted",
        },
        {
          id: 2,
          name: "Kandidaat 2",
          audioSrc: "/casus4.opus",
          status: "rejected",
        },
      ],
    },
    {
      id: 4,
      title: "Verzorger",
      company: "CarePro",
      location: "Den Haag",
      salary: "€2300,- / €2800,- per maand",
      hours: "35 tot 40 uur per maand",
      status: "rejected", // Added status for accepted/rejected
      responses: [
        {
          id: 1,
          name: "Kandidaat 1",
          audioSrc: "/casus5.opus",
          status: "accepted",
        },
        {
          id: 2,
          name: "Kandidaat 2",
          audioSrc: "/casus6.opus",
          status: "rejected",
        },
      ],
    },
  ];

  const klantResponses = [
    // Assuming you know which job postings the "Klant" has responded to:
    { jobId: 1, name: "Zorginstelling De Hoop" },
    { jobId: 2, name: "Accuraat Begeleid Wonen" },
    { jobId: 3, name: "Zorginstelling De Opus" },
    { jobId: 4, name: "Accuraat Begeleid A" },
    { jobId: 5, name: "Zorginstelling De Hoop" },
    { jobId: 6, name: "Accuraat Begeleid Wonen" },
    { jobId: 7, name: "Zorginstelling De Opus" },
    { jobId: 8, name: "Accuraat Begeleid A" },
  ];

  return (
    <>
      <Card className="p-3 shadow-sm flex-shrink-0">
        <h3 className="mb-3 text-center">Berichten</h3>
      </Card>

      <div className="d-flex flex-column flex-grow-1">
        {/* Only show job names that the 'Klant' has responded to */}
        {role === "Klant"
          ? klantResponses.slice(0, 4).map((response) => {
              const job = jobPostings.find((job) => job.id === response.jobId);
              return (
                <Card
                  key={job?.id}
                  className="p-2 shadow-sm mb-1" // Reduce padding here
                  style={{ textAlign: "left" }}
                >
                  <Row className="align-items-center g-0">
                    {" "}
                    <Col xs={12} className="mb-1">
                      {" "}
                      <h5>{job?.title}</h5>
                      <strong>{response.name} </strong>
                      <Badge>
                        {job?.status === "accepted"
                          ? "Geaccepteerd"
                          : "Afgewezen"}
                      </Badge>
                    </Col>
                    <Col xs={12} className="text-end">
                      <Button variant="outline-primary">Bekijk</Button>
                    </Col>
                  </Row>
                </Card>
              );
            })
          : // For 'Bedrijf', show all job postings (existing logic)
            jobPostings.slice(0, 4).map((job) => (
              <Card
                key={job.id}
                className="p-3 shadow-sm flex-grow-1 mb-3"
                style={{ textAlign: "left" }}
              >
                <Row className="align-items-center">
                  <Col xs={12} className="mb-2">
                    <h5>
                      {job.title} - {job.company}
                    </h5>
                    <Badge></Badge>
                  </Col>

                  <Col xs={12}>
                    <h6>Reacties:</h6>
                    {job.responses.map((response) => (
                      <Row key={response.id} className="mb-2">
                        <Col xs={9}>
                          <p>{response.name}</p>
                          <Badge>
                            {response.status === "accepted"
                              ? "Geaccepteerd"
                              : "Afgewezen"}
                          </Badge>
                        </Col>
                        <Col xs={3} className="text-end">
                          <Button variant="outline-primary">Bekijk</Button>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Card>
            ))}
      </div>
    </>
  );
};

export default BerichtenBox;
