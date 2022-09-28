import React from 'react'
import './contact.css'
import Img1 from '../../assets/img/1.jpg';
import Img2 from '../../assets/img/2.jpg';
import Img3 from '../../assets/img/3.jpg';
import Img4 from '../../assets/img/4.jpg';
import Img5 from '../../assets/img/5.jpg';
import Img6 from '../../assets/img/6.jpg';

const dataimg = [
	{
		id:1,
		title: 'Title 1',
		img: Img1
	},
	{
		id:2,
		title: 'Title 2',
		img: Img2
	},
	{
		id:3,
		title: 'Title 3',
		img: Img3
	},
	{
		id:4,
		title: 'Title 4',
		img: Img4
	},
	{
		id:5,
		title: 'Title 5',
		img: Img5
	},
	{
		id:6,
		title: 'Title 6',
		img: Img6
	}
]
const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
			{
				dataimg.map( ( {id, title, img} ) => {
					return (
						<div className="img-card" key={id}>
							<img src={ img }  />
							<h5>{ title }</h5>
							<p>dataimg.map </p>
						</div>
					)
				})
			}
		</div>
  )
}

export default Contact