import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    let {id} = useParams();
    
    let [alerta, setAlerta] = useState(true);
    useEffect(()=>{
        setTimeout(function(){
            setAlerta(false);
        }, 4000);
    })

    let [num, setNum] = useState(0);
    useEffect(()=>{
        if(isNaN(num) == true){
            alert('숫자를 입력하세요');
        }
    }, [num]);

    return (
        <div className="detailBox">

                <div className='detail1'>
                    <div className="detailMain">
                    <img src={process.env.PUBLIC_URL + '/img/bdetail_0' + props.items[id].id + '.jpg'}/>
                    <h2>{props.items[id].title}</h2>
                    <div className='popup'>
                    {
                        alerta == true ? <div>
                            <img src={process.env.PUBLIC_URL + '/img/pop.png'}/>
                        </div> : null
                    }
                    </div>
                    </div>
                    <div className="sticky">
                    <p>{props.items[id].content}</p>
                    <h4>{props.items[id].title}</h4>
                    <p>{props.items[id].type}</p>
                    <p>{props.items[id].color}</p>
                    <p className='input'><input placeholder='수량을 입력하세요' onChange={(e)=>{setNum(e.target.value)}} type="text"/></p>
                    <button className="btn btn-blue">주문하기</button> 
                    <button className="btn btn-green">관심상품</button> 
                </div>

            </div>
            <div className='detailImg'>
                <img src={process.env.PUBLIC_URL + '/img/bdetail_0' + props.items[id].id + '.avif'}/>
            </div>
        </div>
    );
};


export default Detail;