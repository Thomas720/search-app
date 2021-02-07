import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Peoples from '../components/Peoples'
import { listOfPeoples } from '../actions/employeeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const AllEmployee = () => {

    const dispatch = useDispatch()

    const peoplesList = useSelector(state => state.peoplesList)
    const { loading, error, peoples } = peoplesList

    useEffect(() => {
        dispatch(listOfPeoples())
    }, [dispatch])
   
    return (
    
    <>
         <h1>ALL Employee List</h1>
        {loading ? (
        <Loader />
        ) : error ? (

            <Message variant='danger'>{error}</Message> 
         ) : (
        <ul className="list-group"> 
            {peoples.map(people => (
                <ol className='listgroup-item' key={people._id} >
                  <Peoples people={people} />
                </ol>
              
            ))}
        </ul>
         )}
    </>
    )
}


export default AllEmployee

