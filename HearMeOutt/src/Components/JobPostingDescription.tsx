import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavBar";
import JobDescriptionTitleBar from "./Vacature/JobDescriptionTitleBar";
import JobSteps from "./Vacature/JobSteps";
import StepsCards from "./Vacature/StepsCards";
import { useNavigate } from "react-router";

interface Job {
  name: string;
  content: string;
}

// Job data
const jobsData: Record<string, Job[]> = {
  "1": [
    {
      name: "Vacature verzorger",
      content: `## Vacature: Verzorger bij De Hoop  

**Margriet van Breukelen**, manager bij **zorginstelling De Hoop**, zoekt een verzorger voor een **jonge, oude dame van Thaise afkomst**. Ze houdt van een praatje maken en soms iets te veel.  

### Over de Cliënt  
- Heeft **hartproblemen** en **stemmingswisselingen**.  
- Heeft een groot gezin, maar ziet haar kinderen **vrij weinig**. Hierdoor voelt ze zich vaak **eenzaam**.  

### Zorgbehoeften  
- **Kan niet goed lopen**  
- **Kan niet alleen baden**  
- **Eten maken gaat lastig**  
- **Alleen naar het toilet gaan is moeilijk**`,
    },
    {
      name: "Wat bieden wij jou",
      content: `- Een warme en ondersteunende werkomgeving  
- Competitief salaris  
- Doorgroeimogelijkheden binnen het bedrijf`,
    },
  ],
  "2": [
    {
      name: "Vacature Introductie",
      content: "Beschrijving van vacature 2...",
    },
    {
      name: "Wat bieden wij jou",
      content: "Andere voordelen...",
    },
  ],
};

function JobPostingDescription() {
  const { jobId } = useParams<{ jobId: string }>(); // Get jobId from URL
  const jobs = jobsData[jobId ?? ""] || []; // Ensure jobId is defined
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page in history
  };

  const job = {
    jobTitle: "Verzorger",
    location: "Groningen",
    salary: "€2500,- / €3000,- per maand",
    hours: "32 tot 40 uur per maand",
    jobId: jobId ?? "1", // Default to 1 if no jobId is found
  };

  return (
    <>
      <MyNavbar />
      <JobDescriptionTitleBar
        jobTitle={job.jobTitle}
        location={job.location}
        salary={job.salary}
        hours={job.hours}
        jobId={job.jobId}
        onBackButtonClick={handleBackButtonClick}
      />
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobSteps key={index} name={job.name} content={job.content} />
        ))
      ) : (
        <p>Geen vacature gevonden.</p>
      )}
      <StepsCards />
    </>
  );
}

export default JobPostingDescription;
