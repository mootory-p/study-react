import {React, useState} from 'react'
import Footer from '../components/footer/Footer';
const Information = () => {

	let [글제목, 글제목변경] = useState(['남자코트', '우동맛집', '모달창뜨기']);
	let [따봉, 따봉변경] = useState([0, 0, 0]);
	let [modal, setmodal] = useState(false);


	let 글수정 = (a, i)=> {
		let copy =[...글제목];
		copy[0] = '여자 원피스';
		글제목변경(copy);
	}

	let [title, setTitle] = useState(0);


  return (
    <div className='infopage'>
      <div className='h2'>Information</div>
			<br />
			
			
			{
			글제목.map(function(a, i){
				return (
					<div key = {i}>
					{/* <div className="h1">{ a }</div> */}
					{/* <div className="h1" onClick={()=>{	setmodal(!modal)	}}>{ 글제목[i] }  */}
					<div className="h1" onClick={ ()=>{	setmodal(true);	setTitle(i) }} > {글제목[i]} 

					<span onClick={()=> {
						let copy =[...따봉];
						copy[i] = 따봉[i]+1;
						따봉변경(copy);
					}}> ㅡㅡ 따봉버튼임 -- </span><span>{ 따봉[i] }</span></div>
					</div>
					)
			})
			}


			<br></br>

			<button onClick={ ()=> {
				let copy = [...글제목];
				copy[0] = '여자코드';
				글제목변경(copy);
			}}>글수정하기</button>
			<button onClick={ ()=> {
				let copy = [...글제목];
				copy.sort();
				글제목변경(copy);
			}}>가나다순</button>




			{
				// 조건식 ? 참일때코드 : 거짓일때코드
				// 1 == 1 ? '맞아' : '틀려'
				modal == true ? <Modal color= { 'yellow'} 글제목 = {글제목} 글수정 = {글수정} title={title} /> : null
					
				
			}
			<button onClick={()=>{ setTitle(0)}} style={ {width:'30px',height:'30px',display:'block'} }>0</button>
			<button onClick={()=>{ setTitle(1)}} style={ {width:'30px',height:'30px',display:'block'} }>1</button>
			<button onClick={()=>{ setTitle(2)}} style={ {width:'30px',height:'30px',display:'block'} }>2</button>
			
			

    <Footer />
    </div>
  )
}
function Modal (props){
	return(
		<div className="modal" style={{ background:props.color }}>
			<h4>{props.글제목[props.title]}</h4>
			<p>date </p>
			<p>상세내용</p>
			<button onClick={props.글수정}>글수정</button>
		</div>
	)
}
export default Information