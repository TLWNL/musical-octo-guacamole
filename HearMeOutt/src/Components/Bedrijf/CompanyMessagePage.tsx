import BerichtenPage from "../Berichten/BerichtenPage";
import MyNavbar from "../MyNavBar";

function MessagePage({ chosenRole }: { chosenRole: "Klant" | "Bedrijf" }) {
  return (
    <>
      <MyNavbar chosenRole={chosenRole} />
      <BerichtenPage role={chosenRole}></BerichtenPage>
    </>
  );
}

export default MessagePage;
