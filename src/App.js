import { Component, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
// import styled from 'styled-components'
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import List from './Component/List';
import Slide from './Component/Slide';

import Detail from './Pages/Detail';
import About from './Pages/About';

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
            {/* <Nav.Link  onClick={()=>{navigate(-1)}}>이전</Nav.Link>
            <Nav.Link  onClick={()=>{navigate(1)}}>다음</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path='/' element={
        <>
          <Slide/>
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
                  count < 1 ?   
                  <button className='btn-4' onClick={()=>{
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
        <Route path='*' element={<div>Detail</div>}></Route>
      </Routes>


    </div>
  );
}

export default App;
