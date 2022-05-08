import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
       
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div >
            <img style={
                {
                    width:"100%"
                }
            } src="https://cms-contents.pharmeasy.in/banner/ebc0b3f5f5c-MEDI40_Dweb.jpg?dim=1440x0&dpr=1&q=100" alt="" />
          </div>
          <div>
            <img  style={
                {
                    width:"100%"
                }
            } src="https://cms-contents.pharmeasy.in/banner/7400d70904b-DWEB.jpg?dim=1440x0&dpr=1&q=100" alt="" />
          </div>
          <div>
              <img style={
                {
                    width:"100%"
                }
            } src="https://cms-contents.pharmeasy.in/banner/b9b34dbc96d-GETCSH_DWEB.jpg?dim=1440x0&dpr=1&q=100" alt="" />
          </div>
         
        </Slider>
        <div style={{ textAlign: "center" }}>
          
          
        </div>
      </div>
    );
  }
}