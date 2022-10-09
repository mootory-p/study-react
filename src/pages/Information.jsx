import {React, useState} from 'react'
import Footer from '../components/footer/Footer';
const Information = () => {

	let [글제목, 글제목변경] = useState(['남자코트', '우동맛집', '모달창뜨기']);
	let [modal, setmodal] = useState(false);
  return (
    <div className='infopage'>
      <div className='h2'>Information</div>
			<div className="h1">{글제목[0]}</div>
			<div className="h1">{글제목[1]}</div>
			<div className="h1" onClick={()=>{
				setmodal(!modal);
			}}>{글제목[2]}</div>

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
				modal == true ? <Modal/> : null
					
				
			}
			
			

    <Footer />
    </div>
  )
}
function Modal (){
	return(
		<div className="modal">
			<h4>글제목</h4>
			<p>date </p>
			<p>상세내용</p>
		</div>
	)
}
export default Information