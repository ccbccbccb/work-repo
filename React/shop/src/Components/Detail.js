import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'; // 이거 쓰면 꾸미기 js파일에서 전부 해결가능
// 장점 : css 파일 안열어도됨.
// 장점2 : 스타일이 다른 js파일로 오염되지 않음
// 장점3 : 페이지 로딩시간 단축, <style></style> 로 넣어줌.
// 참고) App.css 파일명을 App.module.css 로 바꾸면 App.js 에 종속시켜서 다른 파일 오염방지
//       컴포넌트.module.css

// Q. 오렌지색 버튼이 더 필요하면? - props 문법
// ${ props => props.bg }; <- YellowBtn 을 가져다 쓸때, bg라는 props를 쓸수 있게해줌
// 외부 라이브러리 사용법이라 이해 하지말고 복붙하셈
// 괄호 안에서 간단한 프로그래밍도 가능

// 단점1 : js파일 매우 복잡해짐
// 단점2 : 중복스타일은 컴포넌트간 import 할텐데 css랑 다를바가 없긴하다
// 단점3 : 협업시 CSS 담당의 숙련도 이슈

// let YellowBtn = styled.button` 
//    background : ${ props => props.bg }; 
//    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//    padding : 10px
// `

// let NewBtn = styled.button(YellowBtn); // <- 이런식으로 가져다가 커스텀도 가능

// 예쁜 버튼 하나 만든거임, 이거 컴포넌트임

function Detail(props) {
  
  let {id} = useParams(); // <- 유저가 URL 파라미터에 입력한거 가져옴
  // 참고 URL 파라미터는 여러개 사용 가능 /id/adsasd/ asdasdasd
  // const result = props.shoes.find(id => id == props.shoes.id);

  // 상품 재정렬시 영구번호로 상품찾기
  // let 찾은상품 = props.shoes.find((x) => x.id = id)
  // 반복문에 <태그>{x.title}</태그>

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <span width="100%">{props.shoes[id].picture}</span>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

export default Detail
