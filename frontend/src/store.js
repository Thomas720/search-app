import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { employeeReducer } from './reducer/employeeReducer'

const reducer = combineReducers({

peoplesList: employeeReducer,
    // userDetails: userDetailReducer,

})

const initialState = {
   
    

}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
