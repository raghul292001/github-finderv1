const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                isloading:false
            }
        case 'SET_LOADING':
            return{
                ...state,
                isloading:true
            }
        case 'CLEAR_USERS':
            return{
                ...state,
                users:[]
            }
        default:
            return state
    }
}

export default githubReducer;