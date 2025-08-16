import React from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import "./Navbar.scss"

const NavBar = () => {

  const location = useLocation();
  const homePageNav = location.pathname == '/';


  return (
    <nav>
      <ul>
        {!homePageNav && <li><NavLink to="/">Home </NavLink></li> }
        <li><NavLink to="/hotels">Hotels {homePageNav && <HotelIcon/>}</NavLink></li>
        <li><NavLink to="/flights">Flights {homePageNav &&<FlightTakeoffIcon/>}</NavLink></li>
        <li><NavLink to="trips">Trips {homePageNav &&<ParkIcon/>}</NavLink></li>
        <li><NavLink to="attractions">Attractions {homePageNav &&<MuseumIcon/>}</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
