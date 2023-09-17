import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import  data  from './Data/data.js';
import Card from './Components/Card';
import { Routes, Route, Link, useNavigate, Outlet  } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Event0 from './Components/Event0';
import Event1 from './Components/Event1';
import Event2 from './Components/Event2';

// navgate(-1) 1 페이지 뒤로

// html에서 src 폴더의 이미지 넣을 때
// <태그 style = {{ backgroundImage : 'url('+ 이미지명 + ')'}}/>
// 그리고 import 이미지명 from '경로';
// 이미지 양이 많을때는 public의 logo 사용

function App() {
  
  let [shoes] = useState(data);
  let navigate = useNavigate();
 
  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#main">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Nested Routes : Route안에 Route를 감싸 About/member 이렇게 만들기 가능 */}
      {/* About 과 member가 둘다 보임 */}
      {/* 사용시, About 컴포넌트 안에 <Outlet></Outlet> 태그 사용하여  */}
      {/* 멤버임 이 나올 위치를 정해줘야함 */}
      {/* 언제쓸까? : - 여러 유사한 페이지가 필요할 때 */}
      {/* 사용 예
      <Route path="/about" element={<About/>}>
        <Route path=:"member" element={<div>멤버임</div>} />
        <Route path=:"location" element={<div>위치임</div>} />
      </Route>
      */}
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="*" element={<div>없는페이지요</div>}  />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>

        <Route path="/event" element={<Event0/>}>
        <Route path="one" element={<Event1/>}></Route>
        <Route path="two" element={<Event2/>}></Route>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
