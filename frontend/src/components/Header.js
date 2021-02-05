import React from 'react'
import {NavDropdown, Container, Navbar , Nav, Form, FormControl, Button } from 'react-bootstrap'


const Header = ({people}) => {
  
    return (
      <Container>

     
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand>Search App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown title="Search By " id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Job Title</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Age</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Name" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
        </Container>
    )
}

export default Header
