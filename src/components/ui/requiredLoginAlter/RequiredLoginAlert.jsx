import React from 'react'
import { NavLink } from 'react-router-dom';
import AlertWindow from '../AlertWindow/AlertWindow'
import LoginIcon from '@mui/icons-material/Login';
import "./RequiredLoginAlert.scss";

const RequiredLoginAlert = ({ onClose }) => {

  return (
    <AlertWindow closable={true} setClose={onClose}>
      <div className='login-required-alert'>
        <img src="/assets/login-required.png" alt="login"/>
        <hr/>
        <NavLink to="/login">Login Now <LoginIcon/></NavLink>
      </div> 
    </AlertWindow>
  )
}

export default RequiredLoginAlert;