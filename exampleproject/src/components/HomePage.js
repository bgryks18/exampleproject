import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
      <p className="text-center my-5">Merhabalar uygulamaya hoşgeldiniz, kullanıcılara göz atmak için <Link to="/users">buraya</Link> tıklayın.</p>
    )
}

export default HomePage
