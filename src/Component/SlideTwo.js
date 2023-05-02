import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import { video } from "../data.js";

let vdata = (video);


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="section_01 container">
            <h3>ACE SCIENCE</h3>
          <Slider {...settings}>
            {vdata.map(function(parm, i){
                return(
                    <div className="videoBox">
                    <ReactPlayer
                        url={process.env.PUBLIC_URL + '/img/bg0' + vdata[i].id + '.mp4'}
                        width='600px'
                        height='700px'
                        object-fit="cover"
                        playing={true}
                        muted={true}
                        controls={true}
                        loop={true}
                    />
                    <div className="text">
                        <p>{vdata[i].content1}<br />
                            {vdata[i].content2}<br />
                            {vdata[i].content3}</p>
                        <p className="small">
                            {vdata[i].scontent1}<br />
                            {vdata[i].scontent2} <br />
                            {vdata[i].scontent3} <br />
                            {vdata[i].scontent4} 
                        </p>
                    </div>          
            </div>
                )
            })}
          </Slider>
        </div>
      );
    }
  }
