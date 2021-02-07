import React from 'react'
import { Card, Container } from 'react-bootstrap'


const NameList = ( { people } ) => {
    return (
   <Container> 
<ol to={`/peoples/${people._id}`}>
<Card className='my-1 p-3 rounded' >
 <ol>
         
         <strong>Job Title: {people.job_title}</strong> <br/>
         
</ol>
</Card>

  </ol>
  </Container>
  )
}

export default NameList