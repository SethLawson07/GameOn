import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bg2 from './assets/images/bg2.jpg';
import Formulaire from './components/Formulaire';


function App() {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
      <>
        <Header/><br/>
        <Container fluid>
  <Row g-0>
    <Col sm={12} md={5} className="order-md-1 order-2">
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Body>
          <Card.Title className='fw-bold fs-1'>Marathon national de jeux vidéos</Card.Title><br/>
          <Card.Text className='fs-5'>
            Vous aimez jouer ? Notre prochain évènement de gaming est ouvert aux réservations... Places limitées !
          </Card.Text><br/>
          <Button variant="danger" className='fs-4' onClick={handleShow}>Je m'inscris</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={12} md={7} className="order-md-2 order-1">
      <img src={bg2} alt="bg-img" style={{ width: '100%', height: '100%', }} className="img-fluid"  />
    </Col>
  </Row>
</Container>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger fw-bold'>Inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formulaire/>
        </Modal.Body>
       
      </Modal>
    </>
       
   
          

   
  )
}

export default App
