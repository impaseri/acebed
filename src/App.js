import { Component, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import {data, maindata} from './data.js';
import List from './Component/List';
import Slide from './Component/Slide';
import SlideTwo from './Component/SlideTwo';
import Tab from './Component/Tab';
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
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path='/' element={
        <>
          <Slide/>
          <SlideTwo/>
          <Tab/>
          <div className="container">
            <div className="inner">
              <h3>BEST 상품</h3>
              <div className='listbox'>
                {items.map(function(parm, i){
                  return(
                    <List items={items[i]} i={i}/>
                  )
                })}
              </div>
            </div>
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

        <footer>
          
        </footer>
    </div>
  );
}

export default App;
