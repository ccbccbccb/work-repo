import React, { useState } from 'react'

function BasicExam() {

    let [message1, setMessage1] = useState<string>("안녕하세요 그린컴퓨터아카데미입니다."); 
    let [message2, setMessage2] = useState<string>("아래는 곱셈 샘플입니다"); 
    let [message3, setMessage3] = useState<string>("곱셈"); 
    let [message4, setMessage4] = useState<string>(" * "); 
    let [message5, setMessage5] = useState<string>(" = "); 
    let [num1, setNum1] = useState<number>(2);
    let [num2, setNum2] = useState<number>(3);
    let [num3, setNum3] = useState<number>(num1 * num2);
  return (
    <div>
        {message1}<br/>
        {message2}<br/>
        {message3}<br/>
        {num1}{message4}{num2}{message5}{num3}
    </div>
  )
}

export default BasicExam