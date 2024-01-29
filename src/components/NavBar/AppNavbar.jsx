import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './Carrito/CartWidget';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="lg">
        <Container  >

          <Navbar.Brand href="/" className="me-auto">ChicThreads</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Productos" id="basic-nav-dropdown" bg="dark">
                <NavDropdown.Item>
                  <Link to="/productos/monitores">Monitores</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/componentes">Componentes</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/perisfericos">Perisfericos</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto">
              <Link to="/carrito"><CartWidget/></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;     
