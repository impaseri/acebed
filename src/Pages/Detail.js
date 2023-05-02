import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    let {id} = useParams();
    
    let [alerta, setAlerta] = useState(true);
    useEffect(()=>{
        setTimeout(function(){
            setAlerta(false);
        }, 3000);
    })

    let [num, setNum] = useState(0);
    useEffect(()=>{
        if(isNaN(num) == true){
            alert('숫자를 입력하세요');
        }
    }, [num]);

    return (
        <div className="container">
            {
                alerta == true ? <div className='alert alert-warning'>3초 뒤에 사라짐</div> : null
            }
                <div className="row">
                    <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/img/bed_0' + props.items[id].id + '.jpg'}/>
                    </div>
                    <div className="col-md-6">
                    <p>{props.items[id].content}</p>
                    <h4>{props.items[id].title}</h4>
                    <p>{props.items[id].type}</p>
                    <p>{props.items[id].color}</p>
                    <p>수량: <input onChange={(e)=>{setNum(e.target.value)}} type="text"/></p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    );
};


export default Detail;