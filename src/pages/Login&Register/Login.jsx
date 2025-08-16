import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { login as loginQuery } from "../../queries/auth";
import Logo from "/assets/logo.png";
import "./auth.scss";

const Login = ({ NavigateToPage }) => {

  const [loginData , setLoginData] = useState({
    email : '',
    password : ''
  })
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  function handleDataChange(e) {
    setLoginData({...loginData,
    [e.target.name] : e.target.value})
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginQuery(loginData);

      if(response.error) {
        console.log(response)
        setError(response.error.message)
      }
      else {
        dispatch(login(response.data.data))
        navigate("/");
      }
    }
    
  return (
    <div className="mainWrap">
      <div className="formWrapper">
        <img src={Logo} alt="logo" className="logo" />
        <span className="title">Welcome Back</span>
        <form onSubmit={handleSubmit}> 
          <label form="email">Email address</label>
          <input 
            type="email" className={error==="email is not valid" ? 'invalid_data' : ''}  
            name="email" placeholder="Email" id="email" required
            value={loginData.email} onChange={(e) => handleDataChange(e)} 
          />
          <label form="password">Password</label>
          <input 
            type="password" className={error==="incorrect password" ? 'invalid_data' : ''} 
            name="password" placeholder="Password" id="password" required
            value={loginData.password} onChange={handleDataChange} 
          />
          {error && <p className="errormessage">{error}</p>}
          <button onClick={()=>NavigateToPage('forgetPassword')}>Forget password?</button>
          <button onClick={()=>handleSubmit} className="signInButton">Sign in</button>
        </form>
        <p className="wrapparagraph">Not a member?</p>
        <p>
          <button onClick={()=>NavigateToPage('register')}>Join</button>
          to unlock the best of Travel
        </p>
      </div>
    </div>
  );
};

export default Login;