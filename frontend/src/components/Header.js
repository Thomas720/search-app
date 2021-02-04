import React from 'react'
import { Container, Navbar , Nav, Form, FormControl, Button } from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand href="/">Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="#link">Reasult</Nav.Link>
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
