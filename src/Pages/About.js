import React from 'react';
import { Outlet } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { info } from '../data.js';

let classone = info;


function AllCollapseExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>5 FREE SYSTEM</Accordion.Header>
        <Accordion.Body>
            <h3>잠을 방해하는 모든 요소들이 사라지는 <br /> 5 FREE SYSTEM</h3>
            <ul className='infolist'>
                {
                    info.map(function(parm, i){
                        return(
                            <li>
                            <img src={process.env.PUBLIC_URL + '/img/info_0'+ classone[i].id +'.gif'}/>
                            <h4>{classone[i].title}</h4>
                            <p>{classone[i].text}</p>
                        </li>
                        )
                    })
                }
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hybrid Spring</Accordion.Header>
        <Accordion.Body>
            <div className='spring'>
                <div className='text'>
                    <h5>스프링에 대한 새로운 혁신 </h5>
                    <div>
                    부드럽게 맞춰주는 독립형 스프링과 단단하게 받쳐주는 연결형 스프링이 하나로! 
                    하이브리드 스프링은 어떤 체형도 맞춰주고 받쳐주어 서있을 때의 S라인을 누웠을 때도 그대로 유지시켜줍니다.
                    </div>
                    <ul className='smtext1'>
                        <li>
                            <div className='img'>
                            <img src={process.env.PUBLIC_URL + '/img/springicon_a02.png'} />
                            </div>
                            <div className='smtext2'>
                                <h5>1 SPRING 2 PLAY</h5>
                                <p>인체곡선과 하중분포에 따라 위에서 한번 부드럽게 맞춰주고 밑에서 또 한 번 단단하게 받쳐주어 빈틈없이 완벽한 S라인을 유지시켜 줍니다.</p>
                            </div>
                        </li>
                        <li>
                        <div className='img'>
                                <img src={process.env.PUBLIC_URL + '/img/springicon_b02.png'} />
                            </div>
                            <div className='smtext2'>
                                <h5>꺼짐, 소음, 빈틈, 흔들림으로부터 FREE!</h5>
                                <p>오래 사용해도 늘 처음 같은 탄력을 제공하며 서로 부딪혀서 발생하는 소음을 방지해줍니다. 또한 독립된 Fit Zone이 체형을 빈틈없이 지지해주고 진동을 차단해 흔들리지 않습니다.</p>
                            </div>
                        </li>
                        <li>
                        <div className='img'>
                        <img src={process.env.PUBLIC_URL + '/img/springicon_c02.png'} />
                            </div>
                            <div className='smtext2'>
                                <h5>투웨이 쿠션 시스템</h5>
                                <p>하이브리드 스프링 자체만으로 상하면의 서로 다른 쿠션감을 제공하며, 체형에 맞는 매트리스 쿠션감을 선택하여 이용하실 수 있습니다.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/img/spring_02.jpg'} />
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;