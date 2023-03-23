import { Modal } from 'react-bootstrap';
import Formulaire from './Formulaire';

function ModalForm({ showModal , handleCloseModal }:any) {
  return (

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">Inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulaire handleCloseModal = {handleCloseModal}/>
        </Modal.Body>
      </Modal>
    
  );
}

export default ModalForm;
