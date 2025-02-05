import { Modal, Button } from "react-bootstrap";
import "../../style/ExplanationModal.css";

interface ExplanationModalProps {
  show: boolean;
  handleClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Instructie voor Toelichting</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <h5>Geachte sollicitant,</h5>
        <p>
          Bij het aanmaken van een account op Hear Me Outt heb je de
          mogelijkheid om een toelichting te geven voor waar jij jouw
          ervaringsdeskundigheid hebt opgedaan.
        </p>
        <p>
          Deze toelichting kan je toevoegen aan eventuele reacties op casussen,
          zodat de desbetreffende recruiter meer over jou te weten kan komen.
        </p>
        <ul>
          <li>Deze opname kan maximaal 1 minuut duren.</li>
          <li>Geen leeftijd.</li>
          <li>Geen naam.</li>
          <li>
            Gebruik geen opleidingsniveau als referentie, welke sector de
            opleiding was kan wel gebruikt worden.
          </li>
          <li>
            Vertel over ervaring die je hebt opgedaan of eventuele cursussen die
            je hebt gevolgd.
          </li>
        </ul>

        <h5>
          Voor de bovenstaande casus/vacature willen wij jou graag een
          instructie meegeven:
        </h5>
        <ul>
          <li>Hou het kort! (Deze opname kan maximaal 1 minuut duren.)</li>
          <li>Geef reactie op de casus.</li>
          <li>
            Je kan hierbij een korte persoonlijke motivatie geven waarom jij
            reageert op de casus.
          </li>
        </ul>

        <h6>LET OP!</h6>
        <ul>
          <li>Samen worden dit twee aparte opnames van 1 minuut.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Sluit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExplanationModal;
