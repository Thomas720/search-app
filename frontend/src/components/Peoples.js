import React from 'react'
import { Card, Container } from 'react-bootstrap'


const Peoples = ( { people } ) => {
    return (
   <Container> 
<ol to={`/peoples/${people._id}`}>
<Card className='my-1 p-3 rounded' >
 <ol>
         <strong>Name: {people.name}</strong> <br/>
         <strong>Age: {people.age}</strong> <br/>
         <strong>Job Title: {people.job_title}</strong>
</ol>
</Card>

  </ol>
  </Container>
  )
}

export default Peoples