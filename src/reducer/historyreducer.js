import {GET_DATA} from '../actions/types';
 

const initialState={
 
    user:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
        return{
            ...state,
            user:action.payload
        
        }
        default:
        return state;
    }

}
export default reducer;