import {createStore} from "redux"
import Bookreducer from "./BookReducer"
const store = createStore(
    Bookreducer ,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

export default store;