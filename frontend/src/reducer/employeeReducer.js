import {
   
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,

} from '../peopleConstants/allEmployeeConstants'

export const employeeReducer = (state= { peoples: [] }, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_REQUEST:
            return { loading: true, peoples: [] }
        case EMPLOYEE_LIST_SUCCESS:
            return { loading: false, peoples: action.payload }
        case EMPLOYEE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}