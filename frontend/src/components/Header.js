import React from "react";
import { Container, Nav,  Navbar, Row } from "react-bootstrap";
function Header() {
  return (
    <header>
      <Navbar expand="lg" bg = "dark" variant ="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart">Cart</i></Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user">Login</i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
