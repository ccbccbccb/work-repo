// E_ConfirmButton_Exam.js : 자식(연습)
// rfce
// TODO : 아래 변수에 값이 있다. isFull 이 true 이면
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//   아니면
// <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
//  를 출력하세요.
import React from 'react'
import "../assets/styles.css"
import { useState } from 'react';

function E_ConfirmButton_Exam() {
    let [isFull, setIsFull] = useState(false);
    const blueClick = () => {
       setIsFull(true);
    }
  return (
    <div>
        <button onClick={blueClick} className='btn btn-warning'>
          {  (isFull===true)? (<p style={{ color: "red" }}>정원이 가득찼습니다.</p>)
             : (<p style={{ color: "blue" }}>입장할 수 있습니다.</p>)
            }
            </button>
    </div>
  )
}

export default E_ConfirmButton_Exam


