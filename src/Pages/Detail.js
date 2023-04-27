import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Detail = (props) => {

    let {id} = useParams();
    // user가 url에 입력한 그대로 저장해 준다
    //작명한 그대로 써야 한다

    
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
                    {/* 그냥 id만 불러와서 사용해도 문제는 없지만 */}
                    {/* 아래에서 같은 형식으로 데이터를 받아오기 때문에 변동되었을 때 따로 변경할 일 없도록 */}
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