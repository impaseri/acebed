import React, { Component, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { maindata } from "../data.js";

let main = maindata;
export default class SimpleSlider extends Component {
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true
      };
      
      return (
        <div className="mainBanner container">
          <Slider {...settings}>
            {main.map(function(parm, i){
              return(
                <div className="flex">
                <div className="bannerText">
                <h3>{main[i].content1}</h3>
                <h3>{main[i].content2}</h3>
                <h2>{main[i].name}</h2>
                <div className="smallText">
                    <img src={process.env.PUBLIC_URL + '/img/small_0' + main[i].id + '.png'} alt="스몰배너1" />
                    <span></span>
                </div>
              </div>
              <img className='item-img bannerImg' src={process.env.PUBLIC_URL + '/img/design_0' + main[i].id +'.jpg'} />
              </div>
              )
            })}
          </Slider>
        </div>
      );
    }
  }
