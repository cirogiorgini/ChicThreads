import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const AppNavbar = () => {
  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="lg">
        <Container  >

          <Navbar.Brand href="#home" className="me-auto">ChicThreads</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Productos" id="basic-nav-dropdown" bg="dark">
                <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#abrigos">Abrigos</NavDropdown.Item>
                <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
