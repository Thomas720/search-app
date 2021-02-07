import React from 'react'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <Container className="home-page">
        <h2 className="hello">HELLO!</h2>
        <p className="home_p">
          This Search App is designed for Employee Search and Filter By name, age, job title and also able to see all employees details.
        
        </p>

      </Container>
    )
}

export default HomeScreen
