import React from 'react';
import { Component, useState } from 'react';
import { data } from '../data.js';
import List from '../Component/List.js';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Detail from '../Pages/Detail.js';

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

        </div>

    );
    
};


export default Product;