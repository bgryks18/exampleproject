import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
const User = (props) => {
    const history = useHistory();
    if (props.user){
    const {createdAt,name,avatar,email,phone,id} = props.user;
    console.log(props);
    return (
        <div className="container w-100 mx-auto my-5">
        <div className="card w-100">
            {/*<img className="card-img-top" src={avatar} alt={name}/> */}
            <div className="card-body">
                <h3>#{id}</h3>
            <p className="card-text">
                İsim: {name}
            </p>
            <p className="card-text">
                Email: {email}
            </p>
            <p className="card-text">
                Telefon: {phone}
            </p>
            <p className="card-text">
                Kayıt tarihi: {createdAt}
            </p>
        </div>
        </div>
        </div>
    )
    }
    else {
       return (
            <>
            {history.push('/users')}
            </>
            
        )
    }
}
const mapStateToProps = (state,props) => {
    if (state.UserState.users.length<1){
        return {
            UserState:state.UserState,
            user:null
        }
    } else {
        return {
            UserState:state.UserState,
            user:state.UserState.users.find((item)=>{
                return item.id == props.match.params.id
            })
        }

    }
}
export default connect(mapStateToProps)(User)
