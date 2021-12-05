import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {GetData} from '../../actions/UsersActions'
import UserListPage from './UserListPage'

const UsersList = (props) => {
    const {loading,error,users} = props.UserState
    useEffect(()=>{
        props.GetData();
    },[])
    if (loading){
        return (
            <p className="lead text-center my-5">Yükleniyor...</p>
        )
    } 
    else if(error){
        <p className="lead text-center my-5">Bir hata oluştu...</p>
    }
    else {
    return (
        <>
            <UserListPage {...props}/>
        </>
    );
    }

}
const mapStateToProps = (state)=>{
    return {
        UserState:state.UserState
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        GetData:()=>dispatch(GetData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)
