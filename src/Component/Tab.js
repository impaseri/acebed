import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { data } from "../data.js";


function UncontrolledExample() {

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
          </ul>
        </Tab>
        <Tab eventKey="profile" title="EVENT">
            Tab content for Profile
        </Tab>
        </Tabs>
    </>
  );
}

export default UncontrolledExample;