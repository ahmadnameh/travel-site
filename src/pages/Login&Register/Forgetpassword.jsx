import { React , useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Logo from "/assets/logo.png";
import axios from "axios";
import "./auth.scss";

const Forgetpassword =({ NavigateToPage })=> {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/forget-password', { email });
      if(response.data.success){
        setMessage(response.data.message);
      }
      
      setError(response.data.error);

    } catch (error) {
      setError(error.message);
    }
  };
    return (
      <div className="mainWrap">
        <div className="formWrapper">
          <img src={Logo} alt="logo" className="logo" />
          <p onClick={()=>NavigateToPage('login')}><KeyboardReturnIcon/></p>
          <span className="title">Forget your password?</span>
          <p style={{paddingBottom:"30px"}}>
            No problem. Just enter your email address below  we will send you a link to reset it.
          </p>
          <form onSubmit={handleSubmit}>
            <label form="email">Email address</label>
            <input 
              type="email" placeholder="Email" id="email" required
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            {message && <p className="message">{message}</p>}
            {error && <p className="errormessage">{error}</p>}
            <button onClick={()=>handleSubmit} >Send a Link</button>
          </form>
        </div>
      </div>
    );
}
export default Forgetpassword;