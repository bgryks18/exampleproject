import React, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
const AddUserPage = (props) => {
    useEffect(()=>{
        console.log(props);
    },[])
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [results,setResults] = useState(null);

    const postForm = (e) => {
        e.preventDefault();
        if (!name || !email || !phone){
            setResults('Lütfen boş bırakmayın.')
            setTimeout(()=>{
                setResults(null)
            },1000)
        } 

        else {
            props.addFormSubmit({name,email,phone})
            setName('');
            setEmail('');
            setPhone('');
            setResults('Kullanıcı eklendi, yönlendiriliyorsunuz...');

        }
    }
    return (
        <form onSubmit={postForm}>
            {results&&(<p>{results}</p>)}
            {props.UserState.users.length} adet kayıtlı kullanıcı var.
        <div className="form-group">
            <label htmlFor="name">Tam Adınız</label>
            <input type="text" className="form-control" id="name" onChange={e=>setName(e.target.value)} value={name}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email Adresiniz</label>
            <input type="email" className="form-control" id="email" onChange={e=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input type="text" className="form-control" id="phone" onChange={e=>setPhone(e.target.value)} value={phone}/>
        </div>
        <button type={results?"button":"submit"} style={results&&{opacity:"0.3"}} className="btn btn-outline-primary">Ekle</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        UserState:state.UserState
    }
}
export default connect(mapStateToProps)(AddUserPage)
