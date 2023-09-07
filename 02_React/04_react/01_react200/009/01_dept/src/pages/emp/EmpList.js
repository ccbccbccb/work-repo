import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// axios 공통 함수 파일 import
import EmpService from "../../services/EmpService";
function EmpList() {
  // TODO: 변수 정의 : customer
  // TODO: EmpService.js (모든데이터 조회 : /customer)
  // TODO: (검색어 조회 : `/customer?cname=${cname}`)
  let [customer, setCustomer] = useState([]); // 백엔드 부서 데이터를 받을 변수
  let [searchCname, setSearchCname] = useState(""); // 검색어 변수
  // TODO: 함수 정의
  const retrieveEmp = () => {
    EmpService.getAll() // 백엔드 요청
      .then((response) => {
        // 성공 자동실행
        setCustomer(response.data); // 실질적인 백엔드 데이터 저장(response.data)
        // 로그 찍기
        console.log(response.data);
      })

      .catch((e) => {
        // 실패 자동실행
        console.log(e); // 에러메세지 콘솔로 출력
      });
  };

  useEffect(() => {
    retrieveEmp(); // 함수의 사용
  }, []);

  const findByCname = () => { 
    EmpService.findByCname(searchCname) // 검색어로 조회 요청
    .then((response)=>{      // 성공하면 자동실행
     setCustomer(response.data); // 백엔드에서 전달해준 데이터를(response.data) 저장
     // 로그 찍기
     console.log(response.data); // 백엔드데이터(response.data)
    })
    .catch((e)=>{               // 실패하면 자동실행
     console.log(e)             // 에러메세지 출력
    })
  };


  const onChangeSearchCname = (event) => {
    setSearchCname(event.target.value); // 역바인딩 코딩
  };
  return (
    <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Customer List No Page</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* cname start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by cname"
            value={searchCname}
            onChange={onChangeSearchCname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCname}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* cname end */}

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Cname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer &&
              customer.map((data, index) => (
                <tr key={index}>
                  <td>{data.cname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/emp/" + data.id}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
      {/* table end */}
    </div>
  );
}

export default EmpList;
