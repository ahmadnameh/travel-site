import { React,useState, useContext , lazy , Suspense , useMemo} from 'react'
import { BrowserRouter as Router , Routes , Route , useLocation } from 'react-router-dom'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import HomePage from './pages/Main Pages/HomePage'
import HotelPage from './pages/Main Pages/HotelPage'
import FlightPage from './pages/Main Pages/FlightPage'
import TripPage from './pages/Main Pages/TripPage'
import AttractionPage from './pages/Main Pages/AttractionPage'
import Register from './pages/Login&Register/Register'
import Forgetpassword from './pages/Login&Register/Forgetpassword'
import Resetpassword from './pages/Login&Register/resetpassword'
import AlertWindowContext from './contexts/AlertWindowContext'
import HotelInfoPage from './pages/HotelInfoPage/HotelInfoPage'
import AttrcationInfoPage from './pages/AttrcationInfoPage/AttrcationInfoPage'
import TripInfoPage from './pages/TripInfoPage/TripInfoPage'
import AuthPage from './pages/Login&Register/AuthPage'
import TripSearch from './pages/SearchResultPages/TripSearch'
import AttractionSearch from './pages/SearchResultPages/AttractionSearch'
import HotelSearch from './pages/SearchResultPages/HotelSearch'
import AlertWindow from './components/ui/AlertWindow/AlertWindow'
import FlightSearch from './pages/SearchResultPages/FlightSearch'
import ResponseStatusWindow from './components/ui/ResponseStatusWindow/ResponseStatusWindow'
import './App.css'
import { Provider } from "react-redux";
import { authStore } from './store/Auth'
import ScrollToTop from "./utils/ScrollToTop";



export default function App() {
  return(
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  )
}

function AppWrapper() {
  const[alertWindowProperty , setAlertWindowProperty] = useState({
    on: false,
    type: '',
    message: ''
  })

  const location = useLocation();
  
  const hideFooterOnPaths = ['/login', '/register', '/forgetpassword', '/resetpassword'];
  const showing_Header_Footer = !hideFooterOnPaths.includes(location.pathname.toLowerCase());

  // const HotelPage =  lazy(()=>import("./pages/Main Pages/HotelPage"))


  return (
    <>
      { showing_Header_Footer&& <Header/>}
      <AlertWindowContext value={{alertWindowProperty,setAlertWindowProperty}}>
        <Provider store={authStore} >
      <Routes>
        
        <Route path='/' element={<Suspense fallback={<div>hgjh</div>}><HomePage/></Suspense>}/>
        {/* <Suspense fallback={<div>Load</div>}> */}
        <Route path='/hotels' element={<HotelPage/>}/>
        {/* </Suspense> */}
        <Route path='/flights' element={<FlightPage/>}/>
        <Route path='/trips' element={<TripPage/>}/>
        <Route path='/attractions' element={<AttractionPage/>}/>
        <Route path="login" element={<AuthPage />}/>
        <Route path="register" element={<Register />} />
        <Route path="forgetpassword" element={<Forgetpassword />}/>
        <Route path="resetpassword" element={<Resetpassword/>}/>
        <Route path="HotelInfo" element={<HotelInfoPage/>}/>
        <Route path="AttractionInfo" element={<AttrcationInfoPage/>}/>
        <Route path="TripInfo" element={<TripInfoPage/>}/>
        <Route path="TripSearch" element={<TripSearch/>}/>
        <Route path="AttractionSearch" element={<AttractionSearch/>}/>
        <Route path="HotelSearch" element={<HotelSearch/>} />
        <Route path="FlightSearch" element={<FlightSearch/>} />
        
      </Routes>
      </Provider>

      {/* {alertWindowProperty.on&&<AlertWi/>} */}
      {alertWindowProperty.on&&<ResponseStatusWindow/>}

      </AlertWindowContext>

      { showing_Header_Footer&& <Footer />}
    </>
  )
}
