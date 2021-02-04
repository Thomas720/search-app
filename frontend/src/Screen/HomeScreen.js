import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Peoples from '../components/Peoples'


const HomeScreen = () => {
    const [peoples, setPeoples] = useState([])

    useEffect(() => {

        const fetchPeoples = async () => {
            const { data } = await axios.get('/api/peoples')
            
            setPeoples(data)
        }

        fetchPeoples()
    }, [])

    return (
        <>

        <h1>All peoples</h1>
        <Row>

            
            {peoples.map(people => (
                <Col key={people._id} sm={15} md={6} lg={4} xl={3}>
                    <Peoples people={people} />
                </Col>
            ))}
        </Row>


            
        </>
    )
}

export default HomeScreen
