import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DocMov</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Nature">Nature</NavDropdown.Item>
              <NavDropdown.Item href="#Science">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item href="#technology">technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Business">
                Business
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
