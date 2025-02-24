import BerichtenPage from "../Berichten/BerichtenPage";
import MyNavbar from "../MyNavBar";

function ClientMessagePage() {
  return (
    <>
      {" "}
      <MyNavbar chosenRole="Klant" />
      <BerichtenPage role="Klant"></BerichtenPage>
    </>
  );
}

export default ClientMessagePage;
