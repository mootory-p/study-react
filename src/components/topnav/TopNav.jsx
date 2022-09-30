import {React, useState} from 'react'
import './topnav.css';
import { Link } from "react-router-dom";



const TopNav = () => {
	const [topactiveNav, settopactiveNav] = useState('');
  return (
    
    <div className='topnav'>
        <ul>
            <li><Link to="/" className={ topactiveNav === '' ? 'active' : '' } onClick={ ()=> settopactiveNav('') }>HOME</Link></li>
            <li><Link to="/product" className={ topactiveNav === 'product' ? 'active' : '' } onClick={ ()=> settopactiveNav('product') }>Product</Link></li>
            <li><Link to="/information" className={ topactiveNav === 'information' ? 'active' : '' } onClick={ ()=> settopactiveNav('information') }>Information</Link></li>
        </ul>
    </div>
		
  )
}

export default TopNav