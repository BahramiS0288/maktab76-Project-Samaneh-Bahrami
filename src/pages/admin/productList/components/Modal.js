import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SaveModal({ show, handleClose, handleExit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>آیا مطمینید میخواهید حذف کنید؟</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => handleExit(e)}>
          حذف
        </Button>
        <Button variant="danger" onClick={(e) => handleClose(e)}>
          لغو
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveModal;