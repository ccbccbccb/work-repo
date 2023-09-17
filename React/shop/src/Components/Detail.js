import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  
    let {id} = useParams(); // <- 유저가 URL 파라미터에 입력한거 가져옴
    // 참고 URL 파라미터는 여러개 사용 가능 /id/adsasd/ asdasdasd

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
