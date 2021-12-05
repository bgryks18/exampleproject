const usersState={
    users:[],
    error:false,
    loading:true
};
const UsersReducer = (state=usersState,action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case "USERS_ERROR":
            return {
                ...state,
                users:[],
                error:true,
                loading:false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:true,
                error:false
            }
        case "ADD_USER":
            return {
                ...state,
                loading:false,
                error:false,
                users:[...state.users,action.payload]
            }
        default:
            return state;
    }
}

export default UsersReducer