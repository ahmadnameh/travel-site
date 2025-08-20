import { React, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import logo from "/assets/logo.png";
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.scss";

const Header = () => {
  const [headerTypeState, setHeaderTypeState] = useState('home-header');
  const [mobileNav, setMobileNav] = useState(window.innerWidth <= 1000);
  const [opendedMobileNavState , setOpenedMobileNav] = useState(false);
  const location = useLocation();

  const modalRef = useRef(null)

  useEffect(() => {
    function handleScroll () {
      setHeaderTypeState(window.scrollY > 100 ? 'static-header' : 'home-header');
    };

    function handleResize () {
      setMobileNav(window.innerWidth <= 1000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      document.removeEventListener('mousedown', handleClickOutside);
    };

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenedMobileNav(false);
      }
    }

    }, []);
  
  useEffect(() => {
    setOpenedMobileNav(false);
  }, [location]);

  const isHomePage = location.pathname === "/" && !(window.scrollY > 100);
  

  const renderAuthButton = () => (
    <NavLink to="/login" className="login-button">
      Sign In
      <LoginIcon />
    </NavLink>
  );

  const renderMobileNav = () => (
    <div className="mobNav" ref={modalRef}>
      <MenuIcon onClick={()=>setOpenedMobileNav(!opendedMobileNavState)} />
      <ul className={opendedMobileNavState ? "mob" : ''}>
        <NavBar />
        <li>
          <NavLink to="/login">
            Sign In
            <LoginIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <header className={headerTypeState}>
      <div className="container">
        <img src={logo} alt="logo" />

        {!mobileNav && !isHomePage && <NavBar/>}

        <div className="header-actions">
          {mobileNav ? renderMobileNav() : renderAuthButton()}
        </div>
      </div>

      {isHomePage && !mobileNav && <NavBar/>}
    </header>
  );
};

export default Header;