import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { event } from '../data.js';


const Event = (props) => {
    let navigate = useNavigate();
    let [nevent, setNevent] = useState(event);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container'>
            <h3 className='title'>EVENT</h3>
            <div className='eventBox'>
                <img src={process.env.PUBLIC_URL + '/img/event-banner.jpg'} />
                <div className='eventText' >
                    <p>더 큰 감동</p>
                    <h4>Wedding Members</h4>
                    <p>웨딩멤버스 가입하고 사은품부터 할인혜택까지 모두 받으세요</p>
                </div>
            </div>
            <div className='eventList'>
                {nevent.map(function(parm, i){
                    return(
                            <>
                                <div className='col-md-3'>
                                <img onClick={handleShow} src={process.env.PUBLIC_URL + '/img/event_0'+ nevent[i].id +'.jpg'}/>
                                <h4>{nevent[i].title}</h4>
                                <p>{nevent[i].date}</p>
                                </div>
                            </>
                        )
                    })}
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{nevent[0].title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={process.env.PUBLIC_URL + '/img/eventbig_0'+ nevent[0].id +'.jpg'} />
                        </Modal.Body>
                        </Modal>
            </div>
        </div>
    );
};

export default Event;
