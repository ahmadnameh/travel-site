import {React , useState} from "react";
import { NavLink , useNavigate} from "react-router-dom";
import Logo from "/assets/logo.png";
import profileimg from "/assets/profilephoto.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { register } from "../../queries/auth";
import { login } from "../../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import "./auth.scss";


const Register = ({ NavigateToPage }) => {

  const [error, setError] = useState('');
  const [profilePhoto,setProfilePhoto] = useState(profileimg);

  const [RegisterData , setRegisterData] = useState({
    email : '',
    password : '',
    password_confirmation : '',
    first_name : '',
    last_name : '',
    phone_number : '',
    image : null
  })

  function handleDataChange(e) {
    setRegisterData({...RegisterData,
    [e.target.name] : e.target.value})
  }

  const photoUpload = (e) =>{
    e.preventDefault();
    try {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setRegisterData({...RegisterData,
        image:file
      })
      setProfilePhoto(reader.result);
    }
    reader.readAsDataURL(file);
  }
  catch {

  }
  }


  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await register(RegisterData);

      if(response.error) {
        console.log(response)
        setError(response.error.message)
        if(error.response && error.response.data.errors){
          console.log(error.response.data.message);
          setError(error.response.data.message);
        }
        setError(error);
      }
      else {
        dispatch(login(response.data.data))
        navigate("/");
      }
    

      // catch (error) {
      //   if(error.response && error.response.data.errors){
      //     console.log(error.response.data.message);
      //     setError(error.response.data.message);
      //   }
      //   setError(error);
      // }
    }

  return (
    <div className="mainWrap">
      <div className="formWrapper">
        <img src={Logo} alt="logo" className="logo" />
        <span className="title">Join to unlock the best of Travel</span>
        <form onSubmit={handleSubmit}>
          
            <div>
              <label htmlFor="photo-upload" className="custom-file-upload fas">
                <span><AddCircleOutlineIcon/></span>
                <img htmlFor="photo-upload" src={profilePhoto} className="profileImgUpload" alt="img"/>
                <input id="photo-upload" type="file" onChange={photoUpload}/> 
              </label>
            </div>

            <div className="nameRegister">

            <div>
              <label form="Fname">First name</label>
              <input 
                type="text" name='first_name' placeholder="First name" id="Fname" required
                value={RegisterData.first_name} onChange={handleDataChange} 
              />
            </div>

            <div>
              <label form="Lname">Last name</label>
              <input 
                type="text"  name='last_name' placeholder="Last name" id="Lname" required
                value={RegisterData.last_name} onChange={handleDataChange} 
              />
            </div>
            
          </div>
          <label form="email">Email address</label>
          <input 
            type="email" name='email' placeholder="Email" id="email" required
            value={RegisterData.email} onChange={handleDataChange}    
          />
          <div className="nameRegister">
            <div>
              <label form="password">Password</label>
              <input 
                type="password" name='password' placeholder="Password" id="password" 
                minLength="8" required 
                value={RegisterData.password} onChange={handleDataChange} 
              />
            </div>
            <div>
              <label form="confirmpassword">Confirm Password</label>
              <input 
                type="password" name='password_confirmation'placeholder="Confirm Password" 
                id="confirmpassword" minLength="8" required 
                value={RegisterData.password_confirmation} onChange={handleDataChange} 
              />
              </div>
          </div>
          <label form="phonenumber">Phone Number</label>
          <PhoneInput
            className="phone"
            placeholder="0900000000"
            value={RegisterData.phone_number}
            onChange={(e)=>setRegisterData({...RegisterData,['phone_number']:e})}
            name='phone_number'
            id="phonenumber" 
            required
          />
          <button className="signInButton">Join</button>
        </form>
        <p className="wrapparagraph">
          Already a member?
        </p>
        <p>
          <button onClick={()=>NavigateToPage('login')}>Sign in</button> using your Tripadvisor account.
        </p>
      </div>
    </div>
  );
}

export default Register;