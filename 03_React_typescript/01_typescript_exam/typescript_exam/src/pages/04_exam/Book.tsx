import React, { useState } from 'react'
// 새로운 객체타입(자료형) 정의한 파일 import
import IBook from './../../types/IBOOK';
function Book() {
    const initialBooks = [
        {
            id: 1,
            title: "어떻게 배울 것인가",
            publisher: "비즈니스북스",
            author: "존 맥스웰",
            stock: 2,
        },
        {
            id: 2,
          title: "신경끄기의 기술",
          publisher: "갤리온",
          author: "마크 맨슨",
          stock: 0,
        },
        {
            id: 3,
            title: "부의 미래",
            publisher: "청림출판",
            author: "앨빈 토플러",
            stock: 5,
        },
        {
            id: 4,
            title: "기획자의 습관",
            publisher: "홍익출판사",
            author: "최장순",
            stock: 4,
        },
    ]; 
    
    let [books, setBooks] = useState<Array<IBook>>(initialBooks);
    
    return (
        <div>
    <h1>체르니 책방의 도서목록</h1>
    <table>
      <thead>
        <tr>
          <th>도서번호</th>
          <th>도서이름</th>
          <th>출판사</th>
          <th>저자</th>
          <th>재고량</th>
        </tr>
      </thead>
      <tbody>
        {/* 반복문 */}
        {books.map((value, index)=>(
        <tr key={index}>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.publisher}</td>
            <td>{value.author}</td>
            <td>{value.stock}</td>
        </tr>))}
        
      </tbody>
    </table>
  </div>
  )
}

export default Book