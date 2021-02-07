import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AgeList from '../components/AgeList'
import { listOfPeoples } from '../actions/employeeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const Age = () => {

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
                  <AgeList people={people} />
                </ol>
              
            ))}
        </ul>
         )}
    </>
    )
}


export default Age

