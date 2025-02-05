import BerichtenPage from "../Berichten/BerichtenPage";
import MyNavbar from "../MyNavBar";

function CompanyMessagePage() {
  return (
    <>
      <MyNavbar chosenRole="Bedrijf" />
      <BerichtenPage></BerichtenPage>
    </>
  );
}

export default CompanyMessagePage;
