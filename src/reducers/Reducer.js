const initalState ={
    repos:[],
    user:{}
}

export default function(state = initalState, action){
    switch (action.type) {
        case 'GET_DETAILS':
            return { ...state, user: action.payload}
        case 'GET_REPO':
            return { ...state, repos: action.payload }
        default:
            return state
    }
}