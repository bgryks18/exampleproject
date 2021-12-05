import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import HomePage from './components/HomePage'
import User from './components/Users/User'
import AddUser from './components/Users/AddUser'
import NotFound from './components/NotFound'
import Sidebar from './components/Sidebar'
import UsersList from './components/Users/UsersList'

const App = () => {
  const Warning = (props) => {
    return (
      <p className="lead my-5 text-center">Bu {props.match.path} sayfası henüz yapım aşamasındadır.</p>
    )
  }
  return (
  <BrowserRouter>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        
        <div className="col-md-9">
          <div className="row">
            <div className="container">
              <div className="content w-100">
                <div className="col-12 top">
                <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/users" component={UsersList}/>
                <Route path="/addnewuser" component={AddUser}/>

                <Route path="/services" component={Warning}/>
                <Route path="/sketch" component={Warning}/>
                <Route path="/experiments" component={Warning}/>
                <Route path="/security" component={Warning}/>
                <Route path="/testing" component={Warning}/>
                <Route path="/colors" component={Warning}/>
                <Route path="/logout" component={Warning}/>

                <Route path="/users/:id" component={User}/>
                <Route path="*" component={NotFound}/>
                </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
