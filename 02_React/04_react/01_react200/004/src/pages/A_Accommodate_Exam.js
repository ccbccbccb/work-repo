import React, {useState} from 'react'
import "../assets/styles.css"

function A_Accommodate_Exam() {
    let [isButton, setIsButton] = useState(false);

    const blueClick = () => {
        setIsButton(true);
    }
  return (
    <div>
    <button onClick={blueClick} className="btn btn-warning">
    노란 버튼
  </button>
     <br/>
    {isButton && <button className='btn btn-primary'>파란 버튼</button>}
</div>

  )
}

export default A_Accommodate_Exam