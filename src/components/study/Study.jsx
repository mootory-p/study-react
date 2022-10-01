import React from 'react'
import { useState } from 'react';
import './study.css'

const Study = () => {

  let post = '중괄호로 변수 입력함';
	let [글제목, 글제목변경] = useState([
		'쟈주 바뀌는 데이터는 useState 사용 ', 
		'오늘 환율 1,400원', 
		'오늘의 날씨 맑음'
	]);
	let [좋아요, 좋아요변경] = useState(0);
	function 오늘환율변경(){
		let copy = [...글제목];
		copy[1] = '오늘 환률 1.300원';
		글제목변경(copy);
	}

  return (
    <div className='study' id='study'>
       
			<h2>{ post }</h2>
			<h4 style = { {color:'tomato'} }> 스타일은 오브젝트 중괄호 형식으로 </h4>
			<h4 style = { {color:'lightblue', fontSize:'14px'} }> 스타일 여러개 사용은 쉼표로, camelCase로 </h4>
			<div className='list'>
				<h4>{ 글제목[0] }</h4><span onClick={() => { 좋아요변경( 좋아요+1 ) }}>❤</span><span>{좋아요}</span><p>2022-02-02</p>
			</div>
			<div className='list'>
				<h4>{ 글제목[1] } <button onClick={ 오늘환율변경 }>오늘환율변경</button></h4><span>❤</span><span>0</span><p>2022-02-02</p>
			</div>
			<div className='list'>
				<h4>{ 글제목[2] }</h4><span>❤</span><span>0</span><p>2022-02-02</p>
			</div>
			
			
			<Modal /> 


    </div>
  )
}

function Modal(){
	return(
		<div className='modal'>
			<h4>모달 컴포넌트 불러오기</h4>
			<p>2022-02-02</p>
			<p>내용</p>
		</div>
	)
}
export default Study