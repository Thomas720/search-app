import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Peoples from '../components/Peoples'
import { listOfPeoples } from '../actions/employeeActions'
import {NavDropdown, Container, Navbar , Nav, Form, FormControl, Button } from 'react-bootstrap'


const Header = ({ persone }) => {
  const dispatch = useDispatch()

    const peoplesList = useSelector(state => state.peoplesList)
    const { peoplesList } = peoplesList

    useEffect(() => {
        dispatch(listOfPeoples())
    }, [dispatch])

    const handleChange = () => {
        
    }
    return (
      <Container>

     
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand className="text-success" href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
      <NavDropdown title="Search By " id="nav-dropdown">
    
        <NavDropdown.Item href="/name">Name</NavDropdown.Item>
        <NavDropdown.Item href="/jobTitle">Job Title</NavDropdown.Item>
        <NavDropdown.Item href="/age">Age</NavDropdown.Item>
        <NavDropdown.Item href="/allEmplayee">All Employee</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Name" className="mr-sm-2" 
      onChange={e => handleChange(e.target.value)}
      />
      <Button variant="outline-success">
    
        Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
        </Container>
    )
}

export default Header
