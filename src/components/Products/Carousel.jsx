import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Productmain.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "teal" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "teal" }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {

    
  render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1.5,
        speed: 200,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    return (
      <div className="slider-main">
        <Slider {...settings}>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/52cfab4079e-OneTouch-CB-April22.png?dim=700x0&dpr=1&q=100"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/91fb9714baa-Boldcare-CB-May.jpg"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/e5a04ef9dd0-Vicks-CBMay.jpg"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/b9c60d0750a-cremaffin-CB.jpg"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/66c72bac62c-TNW-NEW.jpg"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/7076307845f-Johnson-CB-Mar22.jpg"
              alt=""
            />
          </div>
          <div className="size">
            <img
              src="https://cms-contents.pharmeasy.in/banner/40e4bb39ec9-Nicotex-CB.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
