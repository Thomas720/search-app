import axios from 'axios'
import { 
    EMPLOYEE_LIST_REQUEST, 
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    // SEARCH_DETAILS_REQUEST,
    // SEARCH_DETAILS_SUCCESS,
    // SEARCH_DETAILS_FAIL
} from '../peopleConstants/allEmployeeConstants'

export const listOfPeoples = () => async(dispatch) => {
   try {
       dispatch({ type: EMPLOYEE_LIST_REQUEST })

       const { data } = await axios.get('/api/peoples')

       dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data })
   } catch (error) {
       dispatch({
           type: EMPLOYEE_LIST_FAIL,
           payload: error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
       })
   }
}

// export const searchById = (id) => async(dispatch) => {
//     try {
//         dispatch({ type: SEARCH_DETAILS_REQUEST })
 
//         const { data } = await axios.get(`/api/peoples/${id}`)
 
//         dispatch({ type: SEARCH_DETAILS_SUCCESS, payload: data })
//     } catch (error) {
//         dispatch({
//             type: SEARCH_DETAILS_FAIL,
//             payload: error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//         })
//     }
//  }