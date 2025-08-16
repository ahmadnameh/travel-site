import React from "react"
import { NavLink } from "react-router-dom";
import logo from "/assets/logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import "./Footer.scss";


const Footer =() => {

	return(
			<div className="footer">
				<div className="container">
					<div>
						<img src={logo} alt="logo"></img>
					</div>
					<div>
						<p>Travel site.</p>
						<p>Discover your Dream destination.</p>
						<p>Search your Holiday.</p>
						<p>Book Tours and attraction Tickets.</p>
						<p>Plan and book Your Trip.</p>
					</div>
					<div>
					<div>
						<h5>Links</h5>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/hotels">Our Hotels</NavLink>
						<NavLink to="/trips">Our Trips</NavLink>
						<a href="n">Tickets</a>
						<NavLink to="/attractions">Attractions</NavLink>
					</div>
					<div>
						<h5>About us</h5>
						<NavLink to="/login">Sign In</NavLink>
						<NavLink to="/register">Register</NavLink>
						<a href="a2">Blog</a>
						<a href="a3">Contact Us</a>
					</div>
					</div>
					<div>
						<h5>Contact Us</h5>
						<p>Get In Touch With Us</p>
						<a href="a"><TwitterIcon /></a>
						<a href ="ab"><FacebookIcon /></a>
						<a href="aa"><GoogleIcon /></a>
					</div>
				</div>  
			</div>
    )
}
export default Footer;