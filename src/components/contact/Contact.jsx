import React from 'react'
import './contact.css'
import Img1 from '../../assets/img/1.jpg';
import Img2 from '../../assets/img/2.jpg';
import Img3 from '../../assets/img/3.jpg';
import Img4 from '../../assets/img/4.jpg';
import Img5 from '../../assets/img/5.jpg';
import Img6 from '../../assets/img/6.jpg';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

			<h2>swiperjs.com</h2>
			<h5>npm install swiper</h5>
			<Swiper className='slider-wrap' 
			// install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={12}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
			{
				dataimg.map( ( {id, title, img} ) => {
					return (


						<SwiperSlide className="img-card" key={id}>
							<img src={ img }  />
							<h5>{ title }</h5>
							<p>dataimg.map </p>
						</SwiperSlide>
					)
				})
			}
			</Swiper>
			<div className="gridtem">
				<div className="left">left grid box : <br />
				grid-template-columns: 30% 60%; gap:10%;</div>
				<form action="">
					<input type="text" />
					<textarea name="memo" id="memo" cols="30" rows="10"></textarea>
				</form>
			</div>
		</div>
  )
}

export default Contact