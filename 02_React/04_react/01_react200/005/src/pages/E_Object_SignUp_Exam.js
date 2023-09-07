// E_Obejct_SignUp_Exam.js : 자식(연습)
// rfce
import React from "react";
import { useState } from 'react'

// TODO : 연습문제 ) 객체를 사용하는 형태로 코딩하세요
// TODO: useState() 1번만 사용하고 객체 변수 만들고, handleChange 함수만 코딩하기
function E_Object_SignUp_Exam() {
      // 객체 정의
  let initialCustomer = {
    name:"",
    password:"",
    email:"",
    phone:"",
    address:""
  };
  let [customer, setCustomer] = useState(initialCustomer);
  
  const handleChange = (event) => {
    let attrValue = event.target.value;
    let attrName = event.target.name;
    setCustomer({...customer, [attrName]: attrValue})
}

const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "이름 : " +
        customer.name +
        "\n" +
        "패스워드 : " +
        customer.password +
        "\n" +
        "email : " +
        customer.email +
        "\n" +
        "phone : " +
        customer.phone +
        "\n" +
        "address : " +
        customer.address
    );
  };
  return (
    // TODO: 여기
    <div className="container">
      <form>
        {/* 이름 시작 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}

        <br />
        {/* 패스워드 시작 */}
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 패스워드 끝 */}

        <br />
        {/* 이메일 시작 */}
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}

        <br />
        {/* phone 시작 */}
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* phone 끝 */}

        <br />
        {/* 주소 시작 */}
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}
        <br/>
        <br/>
        {/* 제출 버튼 시작 */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
        {/* 제출 버튼 끝 */}
      </form>
    </div>
  );
}

export default E_Object_SignUp_Exam;