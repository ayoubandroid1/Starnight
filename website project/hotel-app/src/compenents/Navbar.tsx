import React from 'react';
import image from '../assets/logo_star.png';
import "./Navbar.css";
import { BrowserRouter , Routes , Route , Link , NavLink } from 'react-router-dom'
import Contactus from './Contactus';
import { useAppContext } from '../context/AppContext';
import SignOutButton from './SignOutButton';

function Navbar() {
  const {isLoggedIn} = useAppContext();
  return (
    <div className='Navbar'>
    <NavLink to='/'>
      <img className='logo_navbar' src={image} alt='image' />
    </NavLink>
    <div className='anchors'>
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

export default Navbar;
