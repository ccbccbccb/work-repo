import React, { useState } from "react";
// TODO: 연습문제 반복문 완성하기(ul -li(반복), 부트스트랩)
// TODO: 사용법) 배열변수.map((value, index)=>{return(태그)})

function H_Book() {
  // TODO: 변수정의
  const initialStudents = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];

  let [students, setStudents] = useState(initialStudents);
  return (
    <div>
      <ul class="list-group">
        {/* 반복문 : 여기서 돌리면 됨 */}
        {students.map((student, index) => {
          return (
            <li key={index} class="list-group-item">
              {student.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default H_Book;
