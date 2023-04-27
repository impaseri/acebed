import React from 'react';
import {useNavigate} from 'react-router-dom';


const List = (props) => {
    let navigate = useNavigate();

    return (
        <div className="col-md-5" onClick={()=>{navigate('/detail/' + props.i)}}>
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/bed_0' +props.i + '.jpg'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default List;
