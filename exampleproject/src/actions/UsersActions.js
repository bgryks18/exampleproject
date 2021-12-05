    import ax from 'axios'

    export const fetchUsersFailed = (err)=>({
        type:"USERS_ERROR",
        payload:err
    })
    export const fetchUsersSuccess = (users)=>({
        type:"GET_USERS",
        payload:users
    })
    export const setLoading = ()=>({
        type:"SET_LOADING",
    })
    export const GetUsersFromApi = () => {
        setLoading()
        return (dispatch)=>{
            ax.get(`https://5c7d65c4dd19010014c8e9d4.mockapi.io/users`).then(res=>{
                dispatch(fetchUsersSuccess(res.data))
                return  res.data
            }).then((data)=>{
               localStorage.setItem('users',JSON.stringify(data)) 
            }).catch(err=>{
                dispatch(fetchUsersFailed("Hata tespit edildi. "+err))
            })
        }
    }
    export const GetUsersFromLocal = () => {
        setLoading()
        return (dispatch)=>{
            dispatch(fetchUsersSuccess(JSON.parse(localStorage.getItem('users'))))
        }
    }
    export const addUser = (user) => {
        return async(dispatch,getState) => {
            const uuser = await {...user,id:getState().UserState.users.length+1,createdAt:new Date()}
            await dispatch({type:"ADD_USER",payload:uuser})
            localStorage.setItem('users',JSON.stringify(getState().UserState.users))
        }
    }
    export const GetData = () => {
        return async(dispatch)=>{
            if (JSON.parse(localStorage.getItem('users')) && JSON.parse(localStorage.getItem('users')).length>0) {
                await dispatch(GetUsersFromLocal())
                console.log("veriler localden alındı");
            }
            else {
                await dispatch(GetUsersFromApi());
                console.log("veriler apiden alındı");
            }
        }
    }