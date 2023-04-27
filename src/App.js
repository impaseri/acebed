import { Component, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
// import styled from 'styled-components'
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import List from './Component/List';
import Detail from './Pages/Detail';
import About from './Pages/About';
import banner from './banner01.png';

// 앞에 use 붙는 것들 훅이라고 부름, 유용한 것들이 들어 있는 함수라고 보면 됨

let count = 0;


function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="#ffffff" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/img/header-logo.png'}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link  onClick={()=>{navigate(-1)}}>이전</Nav.Link>
            <Nav.Link  onClick={()=>{navigate(1)}}>다음</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path='/' element={
        <>
          <div className='mainBanner' style={{backgroundImage: 'url(' + banner + ')'}}></div>
          <div className="container">
            <div className="inner">
              <h2>BEST 상품</h2>
              <div className='listbox'>
                {items.map(function(parm, i){
                  return(
                    <List items={items[i]} i={i}/>
                  )
                })}
              </div>
            </div>
            {
                  count < 2 ?   
                  <button onClick={()=>{
                    count = count + 1;
                    axios.get('https://20345620-7f06-4efb-80a0-5d68aef1c5a2.mock.pstmn.io/productlist')
                    .then((result)=>{
                      let copyitem = [...items, ...result.data];
                      setItems(copyitem);
                    }) //result를 입력하면 ,, .data를 입력하면 데이터만 가지고 와 줌
                  }}>MORE</button> : null
                }
          </div>
        </>
        }>

        </Route>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버들</div>}/>
          <Route path='location' element={<div>회사위치</div>}/>
        </Route>
        <Route path='/detail/:id' element={<Detail items={items}/>}></Route>
        {/* /:id 뒤에 뭐가 들어가든 url이 생성됨 */}
        {/* user가 뭐라고 치든간에 detail 컴포넌트를 열어 줘라 */}
        {/* use parms */}

        <Route path='*' element={<div>돌아가시오</div>}></Route>
        {/* 지정된 것 이외의 모든 페이지 404페이지 짜 주면 됨 */}
      </Routes>


    </div>
  );
}

export default App;
