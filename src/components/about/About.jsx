import React from 'react'
import { Link} from 'react-scroll'
import './about.css'
import { BsTwitter, BsGithub, BsArrowDown } from 'react-icons/bs';



const About = () => {
  return (
    <div id="about" className='container about-container'>
			<div className="article">
				<p><BsTwitter className='icon' /></p>
				<h5>npm install react-scroll</h5>
				<Link to="footer" className='btn' 
				smooth={true} duration={500} > react-scroll</Link>
				<p>body에 scroll-behavior smooth 를 빼고 해야 함 </p>
			</div>
			<div className="article">
				<p><BsGithub className='icon' /></p>
				<h5>Card</h5>
				<p className='text'>display: grid; gap: 0.8rem; grid-template-columns: repeat(3, 1fr)</p>
			</div>
			<div className="article">
				<p><BsArrowDown className='icon' /></p>
				<h5>Card</h5>
				<p className='text'>display: grid; gap: 0.8rem; grid-template-columns: repeat(3, 1fr)</p>
			</div>
			<div className="article">
				<p><BsTwitter className='icon' /></p>
				<h5>row-gap:2rem;</h5>
				<p className='text'>display: grid; gap: 0.8rem; grid-template-columns: repeat(3, 1fr)</p>
			</div>
			<div className="article">
				<p><BsGithub className='icon' /></p>
				<h5>row-gap:2rem;</h5>
				<p className='text'>display: grid; gap: 0.8rem; grid-template-columns: repeat(3, 1fr)</p>
			</div>
			<div className="article">
				<p><BsArrowDown className='icon' /></p>
				<h5>row-gap:2rem;</h5>
				<p className='text'>display: grid; gap: 0.8rem; grid-template-columns: repeat(3, 1fr)</p>
			</div>
		</div>
  )
}

export default About