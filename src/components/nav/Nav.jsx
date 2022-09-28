import React from 'react'
import './nav.css'
import { BiHomeAlt } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav className='nav-container'>
      <a href="#" className={ activeNav === '#' ? 'active' : '' } onClick={ ()=> setactiveNav('#') }><BiHomeAlt /></a>
      <a href="#about" className={ activeNav === '#about' ? 'active' : '' } onClick={ ()=> setactiveNav('#about') }><FiMail /></a>
      <a href="#contact" className={ activeNav === '#contact' ? 'active' : '' } onClick={ ()=> setactiveNav('#contact') }><FiMail /></a>
      <a href="#contact" className={ activeNav === '#contact' ? 'active' : '' } onClick={ ()=> setactiveNav('#contact') }><FiMail /></a>
      <a href="#contact" className={ activeNav === '#contact' ? 'active' : '' } onClick={ ()=> setactiveNav('#contact') }><FiMail /></a>
  
    </nav>
    
  )
}

export default Nav