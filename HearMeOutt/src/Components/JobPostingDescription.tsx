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
const jobsData: Record<string, { name: string; content: string }[]> = {
  "1": [
    {
      name: "Vacature verzorger",
      content: `## Vacature: Verzorger bij De Hoop  
      **Margriet van Breukelen**, manager bij **zorginstelling De Hoop**, zoekt een verzorger...`,
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
      content:
        "We hebben bij ons op de afdeling een jongen van achttien met een crimineel verleden, die bang is voor sociale contacten en moeite heeft met zelfreflectie. We proberen er met medeleven mee om te gaan maar het lijkt alsof hij dwars door ons heen kijkt en onze intenties niet aanvoelt. Voor deze reden zoeken wij een ervaringsdeskundige die hem tijdens zijn reis naar volwassenheid en zelfvoorziening kan begeleiden en ondersteunen.",
    },
    {
      name: "Wat bieden wij jou",
      content: "Goede doorgroeimogelijkheden",
    },
    {
      name: "Belangrijke punten",
      content: `Belangrijke informatie om te beschrijven in het audiofragment:  
      - Opleidingsachtergrond  
      - Werkervaring  
      - Kwaliteiten als sociaal werker  
      - Valkuilen als sociaal werker  
      - Persoonlijke doelen om in de toekomst aan te werken`,
    },
    {
      name: "Welke kwaliteiten verwachten wij van je",
      content: `- Een luisterend oor zijn  
- Teamgericht kunnen werken  
- Oplossend vermogen hebben  
- Het op kunnen bouwen van relaties  
- Initiatief kunnen nemen om een netwerk te bouwen  
- Een vertrouwenspersoon zijn  
- Vorming en opvoeding kunnen leveren, zowel als educatie en voorlichting  
- Een brug zijn naar het sociale leven`,
    },

    {
      name: "Ervaring",
      content: ` 
      - Ervaring met grensoverschrijdend gedrag  
      - Ervaring bij het omgaan met weerstand  
      - Verwachtingen over Accuraat Begeleid Wonen  
      - Kennis over de doelgroep`,
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
      <MyNavbar chosenRole="Klant" />
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
