
const initialState ={
    books:[
    
    ]}
function BookReducer(state=initialState,action) {
    switch(action.type){
        case "GET_BOOKS":
            return {...state,books:action.payload}
        default:
            return state;
    }
} 
export default BookReducer;