import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="link" expand="lg">
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