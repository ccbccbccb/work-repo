import React,{useState} from "react";
import "../assets/chapter15.css";

function AddDept() {
  // TODO: 변수 정의 (바인딩 변수 : useState())
  // 임시 객체
  const initialDept = {

    dname: "", // 부서명
    loc: "", // 부서위치
  }
  let [dept, setDept] = useState(initialDept); // input 의 value 부서명/부서위치

  // TODO: 함수 정의
  const handleChange = (event) => {
      let attrName = event.target.name;
      let attrValue = event.target.value;
      setDept({...dept, [attrName]: attrValue});
  }

  const saveDept = () => {
     alert("저장되었습니다.")
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="dname">Dname</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            required
            value={dept.dname}
            onChange={handleChange}
            name="dname"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loc">Loc</label>
          <input
            type="text"
            className="form-control"
            id="loc"
            required
            value={dept.loc}
            onChange={handleChange}
            name="loc"
          />
        </div>

        <br/>

        <button onClick={saveDept} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddDept;
