import React from "react";
import { useState } from 'react'


function G_Object_Calculator() {
    let initialTemp = {
        cTemp : 0,
        fTemp : 0
    }
    
    let [temp, setTemp] = useState(initialTemp);
    
    const handleChange = (event) => {
        let attrName = event.target.name;
        let attrValue = event.target.value;
        setTemp({...temp, [attrName]: attrValue})
      };

    return (
    <div>
    <fieldset>
      {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
      <legend>섭씨온도를 입력해주세요:</legend>
      <input value={temp.cTemp}
            name="cTemp"
            onChange={handleChange} />
      <p>화씨온도 : {(temp.cTemp * 1.8) + 32} </p>
    </fieldset>

    <fieldset>
      {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
      <legend>화씨온도를 입력해주세요:</legend>
      <input value={temp.fTemp}
             name="fTemp"
             onChange={handleChange} />
      <p>섭씨온도 : {(temp.fTemp - 32) / 1.8} </p>
    </fieldset>
  </div>
  )
}

export default G_Object_Calculator