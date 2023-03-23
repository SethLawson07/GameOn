import { Row, Col, Card, Button,Container } from 'react-bootstrap';
import Bg2 from '../assets/images/bg2.jpg';

function ContainerComponent({ handleShowModal }:any) {
  return (
    
    <Container><br />
      <Row className="g-0">
        <Col sm={12} md={5} className="order-md-1 order-2">
          <Card style={{ width: '100%', height: '100%', borderRadius: '0' }} bg="secondary" className="text-white">
            <Card.Body>
              <Card.Title className="fw-bold fs-1">Marathon national de jeux vidéos</Card.Title>
              <br />
              <Card.Text className="fs-5">
                Vous aimez jouer ? Notre prochain évènement de gaming est ouvert aux réservations... Places limitées !
              </Card.Text>
              <br />
              <Button variant="danger" className="fs-4 fw-bold" onClick={handleShowModal}>
                Je m'inscris
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={7} className="order-md-2 order-1">
          <img src={Bg2} alt="bg-img" style={{ width: '100%', height: '100%' }} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerComponent;
