import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Fotter.css"

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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
       
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
               <div style={
                 {
                  // border: "1px solid blue", 
                  width:  "400px",
                  height: "300px",
                  margin: "10px",
                 
                 }
               } >
                         <div>
                              <div className="name">Rajshri Sarkar</div>
                              <div className="date">April 22,2022 </div>
                          </div>
                          <div className="para">
                             Whatever be your medicinal requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order. In 3 hours*, the medicines will be delivered to you. 
                          </div>
                         </div>
             </div>
  {/* ------------------------2nd---------------------------------- */}

          <div>
          <div  style={
                 {
                  // border: "1px solid blue", 
                  width:  "400px",
                  height: "300px",
                  margin: "10px",
                 
                 }
               } >
                           <div>
                              <div className="name">Lipi Chaudhary</div>
                              <div className="date">March 20,2022 </div>
                          </div>
                          <div className="para">
                          Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.
                          </div> 
                         </div>
          </div>

          {/* --------------------------3rd------------------------ */}
          <div>
         
          <div  style={
                 {
                  // border: "1px solid blue", 
                  width:  "400px",
                  height: "300px",
                  margin: "10px",
                 
                 }
               } >
                         <div>
                              <div className="name">Darpan Dholakia</div>
                              <div className="date">Feb 10,2020 </div>
                          </div>
                          <div className="para">
                          Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep.
                          </div> 
                          
                         </div>
          </div>

          {/* --------------------------4th------------------------ */}
          <div>
          <div  style={
                 {
                  // border: "1px solid blue", 
                  width:  "400px",
                  height: "300px",
                  margin: "10px",
                 
                 }
               } >
                           <div>
                              <div className="name">Darpan Dholakia</div>
                              <div className="date">Feb 10,2020 </div>
                          </div>
                          <div className="para">
                          Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep.
                          </div> 
                          
                         </div>
          </div>

          
         
        </Slider>
        
      </div>
    );
  }
}