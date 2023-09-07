import React, { useState } from "react";

// TODO: 화면에 부트스트랩 목록 태그를 이용해서 화면에 반복문으로 출력하세요
function Emp() {
  const initialEmps = [
    {
      eno: 1,
      ename: "Scott",
    },
    {
      eno: 2,
      ename: "James",
    },
    {
      eno: 3,
      ename: "Kim",
    },
  ];
  let [emp, setEmp] = useState(initialEmps);
  return (
    <div className="container mt-5">
      {/* dept.map() 함수 실행 : 목록태그(ul-li(반복문) : 부트스트랩) */}
      <h4>Emp List</h4>
      <ul class="list-group mt-3">
        {/* dept.map(()=>(<li>문자열</li>)) */}
        {emp.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.ename}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Emp;
