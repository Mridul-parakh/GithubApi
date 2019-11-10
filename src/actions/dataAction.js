import {GET_DATA} from './types';


export const pastuser=(userData)=>dispatch=>{
    dispatch({
        type:GET_DATA,
        payload:userData
    })
    
    // axios.post('/api/users/register',userData)
    //     .then(res => history.push('/login'))
    //     .catch(err => dispatch({
    //         type:GET_ERROR,
    //         payload:err.response.data
    //     }))
}