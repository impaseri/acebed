import React from 'react';
import { Component, useState } from 'react';
import { data } from '../data.js';
import List from '../Component/List.js';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

let count = 0;


const Product = () => {
    
    let [items, setItems] = useState(data);
    return (
        <div className='container product'>
            <h3 className='title'>PRODUCT</h3>
            <div className='listbox'>
                {items.map(function(parm, i){
                  return(
                    <List items={items[i]} i={i}/>
                  )
                })}
            </div>
            {
                  count < 1 ?   
                  <button className='morebtn btn2' onClick={()=>{
                    count = count + 1;
                    axios.get('https://20345620-7f06-4efb-80a0-5d68aef1c5a2.mock.pstmn.io/productlist')
                    .then((result)=>{
                      let copyitem = [...items, ...result.data];
                      setItems(copyitem);
                    }) //result를 입력하면 ,, .data를 입력하면 데이터만 가지고 와 줌
                  }}>MORE</button> : null
                }
        </div>
    );
};


export default Product;