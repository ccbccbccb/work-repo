import React from 'react'
import "../assets/styles.css";
import { useState } from "react"

// TODO : useState 이용 4가지 변수 넣기, Comment_Exam2.css import
//        name="제목"
//        link="http://www.naver.com"
//         img="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//         isUpdate=true

function C_Comment_Exam2() {
    let [name, setName] = useState("제목");
    let [link, setLink] = useState("http://www.naver.com");
    let [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");
    let [isUpdate, setIsUpdate] = useState(true);
  return (
    <div className="wrapper">
    {
      // TODO : image 는 img 태그의 src 에 넣고, link 주소는 a href 속성에 넣어서 출력하시요
      // TODO : isUpdate 가 true 이면 화면에 "true" 라고 출력하고, false 이면 "false"라고 출력하세요.
    }
    <div className="contentContainer">
      <span className="commentText">
        <img src={img} />{" "}
      </span>
      <br/>
      <span className="nameText">{name} </span>
      <span className="commentText">
        <a href={link}>{link} </a>
      </span>
      <span className="commentText">{isUpdate? "true":"false"} </span>
    </div>
  </div>
  )
}

export default C_Comment_Exam2