import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  // map의 기능
  // 1. array 자료 갯수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파라미터는 array 안에 있던 자료임
  // 3. return에 뭐 적으면 array로 담아줌
  // map() 함수
  // 1. 왼쪽 array 자료만큼 내부코드 실행해줌
  // 2. return 오른쪽에 있는걸 array로 담아줌
  // 3. 유용한 파라미터 2개 사용가능 (첫번째 파라미터는 array 안의 데이터, 2번째는 인덱스번호)
  


  return (
    <div className="App">
    <div className="black-nav">
      <h4>ReactBlog</h4>
      </div> 
      
      {/* <div className="list">
       <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
       <p>2월 17일 발행</p>
      </div>

      <div className="list">
       <h4>{글제목[1]}</h4>
       <p>2월 17일 발행</p>
      </div>

      <div className="list">
       <h4 onClick={()=>{ 
        if(modal==true) {
          setModal(false); }
          else if(modal==false) {
            setModal(true);
          }}}>
            {글제목[2]}</h4>
       <p>2월 17일 발행</p>
      </div> */}
      
      {
        글제목.map(function(a,i){
          return (
            <div className="list" key={i}>
       <h4 onClick={()=>{ 
        if(modal==true) {
          setModal(false); }
          else if(modal==false) {
            setModal(true);
          }}}>{글제목[i]} </h4> <span onClick={()=>{
            따봉변경(따봉)
            }}> 👍 </span> {따봉[i]}
       <p>2월 17일 발행</p>
      </div>
          )
        })
      }



       {
        // 삼항연산자
        // 조건식 ? 참일떄 실행 할 코드 : 거짓일 때 실행할 코드
        // html 중간에 조건식 쓰려면 삼항연산자
        modal == true ? <Modal/> : null // null은 비어있는 html용으로 자주 사용
       }
    </div>
  );
}

function Modal() {
   return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
   )
}

export default App;
 