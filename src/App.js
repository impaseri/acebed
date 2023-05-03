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
import Product from './Pages/Product';
import Event from './Pages/Event';


let count = 0;


function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="#ffffff" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}  href="#home">
            <img src={process.env.PUBLIC_URL + '/img/header-logo.png'}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/product')}}>PRODUCT</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>NOTICE</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>EVENT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path='/' element={
        <>
          <Slide/>
          <SlideTwo/>
          <div className="container">
            <div className="inner">
              <h3>BEST 상품</h3>
              <div className='listbox'>
                {items.map(function(parm, i){
                  return(
                    <List items={items[i]} i={i}/>
                  )
                })}
                  {
                  count < 1 ?   
                  <button className='morebtn btn1' onClick={()=>{
                    count = count + 1;
                    axios.get('https://20345620-7f06-4efb-80a0-5d68aef1c5a2.mock.pstmn.io/productlist')
                    .then((result)=>{
                      let copyitem = [...items, ...result.data];
                      setItems(copyitem);
                    }) //result를 입력하면 ,, .data를 입력하면 데이터만 가지고 와 줌
                  }}>MORE</button> : null
                }
              </div>
            </div>
          </div>
          <Tab/>
        </>
        }>

        </Route>
        <Route path='/event' element={<Event/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버들</div>}/>
          <Route path='location' element={<div>회사위치</div>}/>
        </Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/detail/:id' element={<Detail items={items}/>}></Route>
        <Route path='*' element={<div>Detail</div>}></Route>
      </Routes>

      <footer id="footer" data-swiftype-index="false" className='container'>
                <div class="footer_link">
                    <a href="/business/overview/index.do">기업정보</a>
                    <a href="/etc/policy/use/view.do">이용약관</a>
                    <a href="/etc/policy/privacy/view.do" class="priv">개인정보처리방침</a>
                    <a href="/etc/new-store/index.do">매장개설안내</a>
                    <a href="/etc/special-business/index.do">특판사업</a>
                    <a href="/customer/prdct-manual/index.do">고객지원</a>
                    <a href="#">구매인증센터</a>
                </div>
                <p class="registration">(주)에이스침대 / 사업자등록번호 : 129-81-02666</p>
                <p class="address">본사 : 경기도 성남시 중원구 사기막골로 105번길 42(상대원동) / 서울영업본부 : 서울특별시 강남구 도산대로 218  / FAX : 02-544-8788</p>
				
                <p class="copy">COPYRIGHT (C) ACE BED CORPORATION ALL RIGHTS RESERVED</p>
            </footer>
    </div>
  );
}

export default App;
