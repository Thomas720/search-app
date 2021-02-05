import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Peoples from '../components/Peoples'
import { listOfPeoples } from '../actions/employeeActions'



const HomeScreen = () => {

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
        <h2>Loading...</h2> 
        ) : error ? (

         <h2>{error}</h2>
         ) : (
        <ul className="list-group"> 
            {peoples.map(people => (
                <li className='listgroup-item' key={people._id} >
                  <Peoples people={people} />
                </li>
              
            ))}
        </ul>

          )}
            
        </>
    )
}


export default HomeScreen
