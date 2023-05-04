import React from 'react';

const Test = (props) => {
    return (
        <img src={process.env.PUBLIC_URL + '/img/eventbig_0'+ props.num+'.jpg'}/>
    );
};

export default Test;

