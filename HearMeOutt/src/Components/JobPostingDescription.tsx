import { Col, Container, Row, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa"; // Import icons
import MyNavbar from "./MyNavBar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import JobDescriptionTitleBar from "./Vacature/JobDescriptionTitleBar";
import JobSteps from "./Vacature/JobSteps";
import StepsCards from "./Vacature/StepsCards";

const jobs = [
  {
    name: "vacature introductie",
    content:
      "Ben jij de persoon waar mensen blij van worden als ze je aan de lijn hebben? Werk jij graag vanuit huis? Dan is medewerker klantenservice iets voor jou! Eerst krijg je een inwerktraject van vier weken, waarbij je vier dagen op het kantoor in Middelburg wordt verwacht. Daarnaast is er bij goed functioneren een groei in salaris van € 12,50 naar € 13,- en kans op een dienstverband bij de opdrachtgever. Jouw gereden kilometers worden volledig vergoed en kom je met het openbaar vervoer? Dan wordt ook de volledige reis vergoed.",
  },
  {
    name: "wat bieden wij jou",
    content:
      "Je hebt een probleemoplossend karakter, jij kan dus snel met oplossingen komen richting de klant. Je bent het aanspreekpunt van het bedrijf en hebt daarom ook een hoge mate van verantwoordelijkheid. Je bent twee avonden en één zaterdag in de drie weken beschikbaar. Ook ben je één of twee keer in de maand aanwezig op het kantoor. Verder beschik jij over de volgende kwalificaties:",
  },
  {
    name: "wie ben jij",
    content:
      "Je hebt een probleemoplossend karakter, jij kan dus snel met oplossingen komen richting de klant. Je bent het aanspreekpunt van het bedrijf en hebt daarom ook een hoge mate van verantwoordelijkheid. Je bent twee avonden en één zaterdag in de drie weken beschikbaar. Ook ben je één of twee keer in de maand aanwezig op het kantoor. Verder beschik jij over de volgende kwalificaties:",
  },
  {
    name: "wat ga je doen",
    content:
      "Je krijgt veel uitlopende vragen, hiervoor is het dus belangrijk dat je snel kan schakelen. Doordat deze functie voornamelijk vanuit huis is, wordt er verwacht dat je veel problemen zelfstandig kan oplossen. /n Je onderhoudt goed klantcontact. Nadat je iemand aan de lijn hebt gehad, zorg je ervoor dat je dit goed registreert in het systeem. Zo weet je bij toekomstige gesprekken wat er de keer daarvoor besproken is.",
  },
  {
    name: "waar ga je werken",
    content:
      "Je komt te werken bij een Nederlands telecombedrijf dat vaardig is in glasvezelnetwerken, Delta Fiber. Het bedrijf is gevestigd in Middelburg, maar hier hoef je dus maar één á twee keer per maand te zijn. Deze werkgever vindt het belangrijk dat iedereen kan groeien. Medewerkers hebben dan ook de kans om zich verder te ontwikkelen door het volgen van trainingen. Je komt te werken bij een Nederlands telecombedrijf dat vaardig is in glasvezelnetwerken, Delta Fiber. Het bedrijf is gevestigd in Middelburg, maar hier hoef je dus maar één á twee keer per maand te zijn. Deze werkgever vindt het belangrijk dat iedereen kan groeien. Medewerkers hebben dan ook de kans om zich verder te ontwikkelen door het volgen van trainingen.",
  },
];

function JobPostingDescription() {
  return (
    <>
      <MyNavbar />
      <JobDescriptionTitleBar />
      {jobs.map((job, index) => (
        <>
          <JobSteps key={index} name={job.name} content={job.content} />
        </>
      ))}
      <StepsCards />
    </>
  );
}

export default JobPostingDescription;
