import {React,useState} from "react";
import {useSearchParams} from "react-router-dom";
import Logo from "/assets/logo.png";
import axios from "axios";
import "./auth.scss";

const Resetpassword =()=> {
  
  const [resetPasswordData , setResetPasswordData] = useState({
    email :'',
    password :'',
    password_confirmation :''
  })
  const [error, setError] = useState('');

  function handleDataChange(e) {
    setResetPasswordData({...resetPasswordData,
    [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/reset-password', {
          email:email,
          password:password,
          password_confirmation:password_confirmation,
          token: token,
        },
        );
      if(response.data.success){
        console.log(response.data);
      }
      else {
        setError(response.data.message);
      }

    } catch (error) {
      setError(error.message);
    }
  };
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  

return (
  <div className="mainWrap">
    <div className="formWrapper">
      <img src={Logo} alt="logo" className="logo"/>
      <span className="title">reset password</span>
      <form onSubmit={handleSubmit}>
        <label form="email">Email address</label>
        <input 
          type="email" className={error==="email is not valid" ? 'invalid_data' :''}
          placeholder="Email" id="email" name="email" 
          value={resetPasswordData.email} onChange={handleDataChange}
        />
        <label form="password">Password</label>
        <input 
          type="password" className={error==="incorrect password" ? 'invalid_data' : ''}
          placeholder="Password" id="password" name="password"
          value={resetPasswordData.password} onChange={handleDataChange}
        />
        <label form="confirmpassword">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm Password" id="confirmpassword" name='password_confirmation'
          value={resetPasswordData.password_confirmation} onChange={handleDataChange}
        />
        <button onClick={handleSubmit}>Verify</button>
      </form>
    </div>
  </div>
  );
}
export default Resetpassword;