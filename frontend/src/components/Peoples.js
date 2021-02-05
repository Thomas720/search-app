import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Peoples = ( { people } ) => {
    return (
    
<ul to={`/peoples/${people._id}`}>
<Card className='my-3 p-2 rounded' >
 <ul>
         <strong>Name {people.name}</strong> <br/>
         <strong>Age {people.age}</strong> <br/>
         <strong>Job Title {people.job_title}</strong>
</ul>
</Card>

  </ul>
  )
}

export default Peoples