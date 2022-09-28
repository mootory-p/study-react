import React from 'react'
import './header.css';
import Me from '../../assets/img/6.jpg';
import { BsTwitter, BsGithub, BsArrowDown } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, This is h5</h5>
        <h2>This is h2</h2>
        <h5 className="text-light4">text-light</h5>
        <div className="cta">
          <a href="#" className='btn'>download</a>
          <a href="#" className='btn btn-primary'>more</a>
        </div>
        <div className="me">
          <img src={ Me }  />
        </div>
        <a href='#contact' className="scroll-down">
          <p>React icons https://react-icons.github.io/react-icons/ <br />
          npm install react-icons --save</p>
          <p><BsTwitter /></p>
          <p><BsGithub /></p>
          <p><BsArrowDown /></p>
        </a>
        
      </div>
    </header>
  )
}

export default Header