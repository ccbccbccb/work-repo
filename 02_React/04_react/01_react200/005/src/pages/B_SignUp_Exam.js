import React from "react";
import { useState } from "react";

// TODO : 연습문제 ) 변수/ 함수에 맞추어 코딩하기
// TODO: 변수 초기값은 모두 "" 하세요
// TODO: 추가) 입력양식 부트스트랩 디자인도 추가해 보세요
// TODO: name, password, email, phone, address 변수 정의(정방향 바인딩)
// TODO: onChange 함수들을 정의하세요(역방향 바인딩)

function B_SignUp_Exam() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "이름 : " +
        name +
        "\n" +
        "패스워드 : " +
        password +
        "\n" +
        "email : " +
        email +
        "\n" +
        "phone : " +
        phone +
        "\n" +
        "address : " +
        address
    );
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>
        <br />
        <br />

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default B_SignUp_Exam;
