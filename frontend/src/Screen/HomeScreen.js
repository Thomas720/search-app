import React from 'react'
import { Row, Col } from 'react-bootstrap'
import peoples from '../peoples'


const HomeScreen = () => {
    return (
        <>

        <h1>All peoples</h1>
        <Row>
            {peoples.map(people => (
                <Col sm={15} md={6} lg={4} xl={3}>
                    <h3>{people.name}</h3>
                </Col>
            ))}
        </Row>


            
        </>
    )
}

export default HomeScreen
