import { React, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Forgetpassword from './Forgetpassword'
import "./auth.scss"

const AuthPage = () => {

  const[renderedPage , setRenderedPage] = useState('login')

  return (
    <div className='auths_page'>
      <div>
        <img src="/src/assets/authPic.png" alt="pic" />
      </div>
      {renderedPage === 'login' ? 
      <Login NavigateToPage = {setRenderedPage}/>
      :renderedPage === 'register' ? 
      <Register NavigateToPage = {setRenderedPage} />
      :renderedPage === 'forgetPassword' ?
      <Forgetpassword NavigateToPage = {setRenderedPage}/>
      :null }

    </div>
  )
}

export default AuthPage
