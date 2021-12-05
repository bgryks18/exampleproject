import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar position-relative  h-100">
         
        <ul className="nav flex-column sidemenu h-100">
       <div className="container"><div className="stick mt-5"></div></div>
          <li className="nav-item mt-4">
          <Link className="nav-link active" to="/home"><i className="fas fa-home"></i>&nbsp;Anasayfa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="services"><i className="fab fa-servicestack"></i>&nbsp;Servisler</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sketch"><i className="fab fa-sketch"></i>&nbsp;Sketch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experiments"><i className="fas fa-vial"></i>&nbsp;Deneyler</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/security"><i className="fas fa-user-shield"></i>&nbsp;Güvenlik</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users"><i className="fas fa-globe"></i>&nbsp;Kullanıcılar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/testing"><i className="fas fa-adjust"></i>&nbsp;Test</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/colors"><i className="fas fa-palette"></i>&nbsp;Renkler</Link>
          </li>
          <li className="nav-item position-absolute exit">
            <Link className="nav-link" to="/logout"><i className="fas fa-sign-out-alt"></i>&nbsp;Çıkış</Link>
          </li>
        </ul>
        </div>
    )
}

export default Sidebar
