import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    {
      tit : "남자코트 추천"
    },
    {
      tit : "강남 우동맛집"
    },
    {
      tit : "파이썬 독학"
    }
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState([
    {tit : ''}
  ]);

  const onChange1 = (e) => {
    let attrValue = e.target.value
    let attrTit = e.target.tit;
    글제목변경({...글제목,[attrTit] : attrValue})
  }

  

  // state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트
  // 귀찮으면 그냥 App에

  // 동적인 UI 만들기 3step
  // 1. hmtl css 로 미리 디자인
  // 2. 현재 UI 상태를 state에 저장
  // 3. state에 따라 UI가 어떻게 보일지 작성

  // map의 기능
  // 1. array 자료 갯수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파라미터는 array 안에 있던 자료임
  // 3. return에 뭐 적으면 array로 담아줌

  // map() 함수
  // 1. 왼쪽 array 자료만큼 내부코드 실행해줌
  // 2. return 오른쪽에 있는걸 array로 담아줌
  // 3. 유용한 파라미터 2개 사용가능 (첫번째 파라미터는 array 안의 데이터, 2번째는 인덱스번호)

  // 부모 -> 자식 state 전송하는법
  // 1. <자식컴포넌트 작명={state이름} />
  // 2. props 파라미터 등록 후 props.작명 사용
  // 부모 -> 자식만 가능, 컴포넌트끼리도 불가능
  // 참고) 파라미터 문법은 다양한 기능을 하는 함수를 만들때도 사용함

  // <input>에 뭔가 입력시 코드실행 하고싶으면 onChange / onInput
  // <input>에 입력한 값 가져오는 법
  // 파라미터에 e(event)입력

  // 참고) state 변경함수는 늦게처리됨(비동기처리)

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

      {글제목.map(function (value, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                if (modal == true) {
                  setModal(false);
                } else if (modal == false) {
                  setModal(true);
                  setTitle(i);
                }
              }}
            >
              {value.tit}{" "}
            </h4>{" "}
            <span
              onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}
            >
              {" "}
              👍{" "}
            </span>{" "}
            {따봉[i]}
            {/* 현재 여기서 span 태그를 누르면 브라우저에서는 3번 입력으로 생각함
          (이벤트가 상위요소로 퍼지는 현상(이벤트버블링))
           상위html로 퍼지는 이 현상을 막고싶으면 e.stopPropagation() */}
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input onChange={onChange1}></input>

      {
        // 삼항연산자
        // 조건식 ? 참일떄 실행 할 코드 : 거짓일 때 실행할 코드
        // html 중간에 조건식 쓰려면 삼항연산자
        modal == true ? (
          <Modal 글제목변경={글제목변경} 글제목={글제목} 글제목tit={글제목.tit} title={title} />
        ) : null // null은 비어있는 html용으로 자주 사용
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title].tit}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
