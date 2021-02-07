import React from 'react'
import { Card, Container } from 'react-bootstrap'

const AgeList = ( { people } ) => {
    return (
        
   <Container> 
         
<ol to={`/peoples/${people._id}`}>
<Card className='my-1 p-3 rounded' >
 <ol>
         
         <strong>Age: {people.age}</strong> <br/>
         
</ol>
</Card>

  </ol>
  </Container>
  )
}

export default AgeList