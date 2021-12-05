import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import {addUser,GetData} from '../../actions/UsersActions'
import AddUserPage from './AddUserPage'
const AddUser = (props) => {
    useEffect(()=>{
        props.dispatch(GetData())
    },[])
    const history = useHistory();
    return (
        <div>
            <h2>Kullanıcı Ekle</h2>
            <AddUserPage addFormSubmit={async(user)=>{
                await props.dispatch(addUser(user));
                setTimeout(()=>{
                    history.push('/users')
                },500)
            }}/>
        </div>
    )
}
export default connect()(AddUser)
