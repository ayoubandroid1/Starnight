import React from 'react';
import image from '../assets/logo_star.png';
import "../compenents/Navbar1.css"
import { BrowserRouter , Routes , Route , Link , NavLink } from 'react-router-dom'
import Contactus from './Contactus';
import { useAppContext } from '../context/AppContext';
import SignOutButton from './SignOutButton';

function Navbar1() {
  const {isLoggedIn} = useAppContext();
  return (
    <div className='Navbar1'>
    <NavLink to='/'>
      <img className='logo_navbar1' src={image} alt='image' />
    </NavLink>
    <div className='anchors1'>
    {isLoggedIn ? <>
      <NavLink to="/my-bookings">My Bookings </NavLink>
      <NavLink to="/my-hotels">My Hotels </NavLink>
      <NavLink to='/Contactus'>Contact us</NavLink>
      <SignOutButton />
      </> : (
        <>
      <NavLink to='/Contactus'>Contact us</NavLink>
      <NavLink to='/signin'>Sign in</NavLink>
      <NavLink to='/signup'>Sign up</NavLink> 
      </>)}
    </div>
  </div>
  );
}

export default Navbar1;
