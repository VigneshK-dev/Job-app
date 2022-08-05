import { createStore,combineReducers } from "redux";
import { Reducer } from "../Reducer/Reducer";



const AllReducer = combineReducers({
     State:Reducer
})


export const Store = createStore(AllReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )