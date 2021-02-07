import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobTitleList from '../components/JobTitleList'
import { listOfPeoples } from '../actions/employeeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const JobTitle = () => {

    const dispatch = useDispatch()

    const peoplesList = useSelector(state => state.peoplesList)
    const { loading, error, peoples } = peoplesList

    useEffect(() => {
        dispatch(listOfPeoples())
    }, [dispatch])
   
    return (
    
    <>
         <h1>Age List</h1>
        {loading ? (
        <Loader />
        ) : error ? (

            <Message variant='danger'>{error}</Message> 
         ) : (
        <ul className="list-group"> 
            {peoples.map(people => (
                <ol className='listgroup-item' key={people._id} >
                  <JobTitleList people={people} />
                </ol>
              
            ))}
        </ul>
         )}
    </>
    )
}


export default JobTitle

