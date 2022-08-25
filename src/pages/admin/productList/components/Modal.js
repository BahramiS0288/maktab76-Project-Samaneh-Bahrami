import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SaveModal({ show, handleClose, handleDelete }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>آیا مطمینید میخواهید حذف کنید؟</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={(e) => handleDelete(e)}>
          حذف
        </Button>
        <Button variant="secondary" onClick={(e) => handleClose(e)}>
          لغو
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveModal;