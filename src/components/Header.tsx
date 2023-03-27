import {Container,Nav,Navbar,Button} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="link" expand="lg" className="my-2">
      <Container>
        <Navbar.Brand href="#home" className='text-danger fs-1 fw-bold'>GameOn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Button variant="danger">Détails de l'evènement</Button>{' '}
            <Nav.Link href="#" className='text-dark fs-5'>A Propos</Nav.Link>
            <Nav.Link href="#" className='text-dark fs-5'>Contact</Nav.Link>
            <Nav.Link href="#" className='text-dark fs-5'>Evènements passées</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;