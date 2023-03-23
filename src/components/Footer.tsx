import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light mt-5 pt-3 pb-3">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-sm-between">
          <Col xs={12} sm={6} className="text-left text-sm-right mb-3 mb-sm-0">
            <p className="text-danger">&copy; 2014 - 2022, GameOn Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
