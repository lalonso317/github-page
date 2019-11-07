import Axios from 'axios'

// Grabbing the  details fro the aside
export function getDetails(){
    return dispatch =>{
        Axios.get('https://api.github.com/users/lalonso317').then(resp =>{
            dispatch({
                type: 'GET_DETAILS',
                payload: resp.data
            })
        })
    }
}

// Getting the Repo information
export function getRepo(){
    return dispatch =>{
        Axios.get('https://api.github.com/users/lalonso317/repos').then(resp =>{
            dispatch({
                type: 'GET_REPO',
                payload: resp.data
            })
        })
    }
}