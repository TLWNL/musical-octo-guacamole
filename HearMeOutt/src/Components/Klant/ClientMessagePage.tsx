import BerichtenPage from "../Berichten/BerichtenPage";
import MyNavbar from "../MyNavBar";

function ClientMessagePage() {
  return (
    <>
      {" "}
      <MyNavbar chosenRole="Klant" />
      <BerichtenPage></BerichtenPage>
    </>
  );
}

export default ClientMessagePage;
