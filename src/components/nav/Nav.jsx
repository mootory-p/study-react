import React from 'react'
import './nav.css'
import { Link} from 'react-scroll'
import { BiHomeAlt } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav className='nav-container'>
      {/* <a href="#" className={ activeNav === '#' ? 'active' : '' } onClick={ ()=> setactiveNav('#') }><BiHomeAlt /></a>
      <a href="#about" className={ activeNav === '#about' ? 'active' : '' } onClick={ ()=> setactiveNav('#about') }><FiMail /></a>
      <a href="#contact" className={ activeNav === '#contact' ? 'active' : '' } onClick={ ()=> setactiveNav('#contact') }><FiMail /></a> */}
      <Link to="pagetop" smooth={true} offset={-50} duration={500} className={ activeNav === '#' ? 'active' : '' } onClick={ ()=> setactiveNav('#') }><BiHomeAlt /></Link>
      <Link to="about"  smooth={true} offset={-50} duration={500} className={ activeNav === '#about' ? 'active' : '' } onClick={ ()=> setactiveNav('#about') }><FiMail /></Link>
      <Link to="contact" smooth={true} offset={-50} duration={500} className={ activeNav === '#contact' ? 'active' : '' } onClick={ ()=> setactiveNav('#contact') }><FiMail /></Link>
      <Link to="study" smooth={true} offset={-50} duration={500} className={ activeNav === '#study' ? 'active' : '' } onClick={ ()=> setactiveNav('#study') }><FiMail /></Link>
      <Link to="footer" smooth={true} offset={10} duration={500} className={ activeNav === '#footer' ? 'active' : '' } onClick={ ()=> setactiveNav('#footer') }><FiMail /></Link>
    </nav>
    
  )
}

export default Nav