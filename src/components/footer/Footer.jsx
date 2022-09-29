import React from 'react'
import './footer.css'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div className='container footer-container'>
			<div className="build">
				<h2>Build</h2>
				<p>package.json  - homepage - 도메인주소 <br />
				npm run build </p>	
				<p>경고메세지 귀찮을때  /*eslint-disable*/  js 파일 최상단에 추가</p>
				<p>rafce</p>
			</div>
			
			<div className="styled">
			<h2>styled-components</h2> 
			npm install --save styled-components<br />
			import styled from 'styled-components'<br />
			<Button>Button</Button>
			</div>



			<div className="reactdom">
				npm install react-router-dom
			</div>
		</div>
  )
}

const Button = styled.button`
	background: var(--color-primary); padding:8px; border-radius: 6px; display: inline-block;
	cursor: pointer;
	&:active, &:focus { outline:none;}
`;

export default Footer