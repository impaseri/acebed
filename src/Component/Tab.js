import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { num , event } from "../data.js";
import {useNavigate} from 'react-router-dom';

function UncontrolledExample() {

  let sns = num;
  let eve = event;
  let navigate = useNavigate();

  return (
    <>
    <h3 className='title'>ACE CONTENT</h3>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
        <Tab eventKey="home" title="SNS">
          <ul className='sns'>
            {sns.map(function(parm,i){
              return(
                <li>
                <img src={process.env.PUBLIC_URL + '/img/sns_0'+ sns[i].id +'.png'} />
              </li>
              )
            })}
          </ul>
        </Tab>
        <Tab eventKey="profile" title="EVENT">
          <ul className='eventmain'>
          {eve.map(function(parm,i){
              return(
                <li onClick={()=>{navigate('/event')}}>
                <img src={process.env.PUBLIC_URL + '/img/event_0'+ eve[i].id +'.jpg'} />
              </li>
              )
            })}
            <li></li>
            <li></li>

          </ul>
        </Tab>
        </Tabs>
    </>
  );
}

export default UncontrolledExample;