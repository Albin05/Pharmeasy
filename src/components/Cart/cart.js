// import react from"react"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./cart.css";
// import { useState} from "react";
import { Items } from "./item";
// import { products } from "./product";

// const toPayment = (product) => {
//   setPayment([...payment, product]);
//   alert("Proceed To Payment");
// };
const data = JSON.parse(localStorage.getItem("cart"));
export default function Cart() {
  
  // console.log(Item)
  return (
    <div className="maindiv">
      <div className="left">
        <div className="cartItem">
          <div className="items">
            <div className="_3SUcN">
              <div className="_1ONo-">
                <span className="_2SDij">{data.length} Item In Cart</span>
                <span className="w4Nso">Prices are indicative</span>
              </div>
              <div>
                <Items />
              </div>
            </div>
          </div>
          <div className="notes">
            <div className="adnotes">Additional Notes</div>
            <textarea
              className="inputbox"
              placeholder="Enter any additional information regarding your order"
            ></textarea>
          </div>
          <div className="text">
            <ul className="text">
              <li className="-Ojzr">
                A licensed pharmacy would be delivering your order basis
                availability of product &amp; fastest delivery. &nbsp;
                <span
                  tabindex="0"
                  role="button"
                  className="_2tdEn _1pXi6 OpFpE"
                >
                  <u>Details</u>
                </span>
              </li>
              <li className="-Ojzr">
                Prices are indicative and may change after billing
              </li>
              <li className="-Ojzr">
                PharmEasy is a technology platform to connect sellers and buyers
                and is not involved in sales of any product. Offer for sale on
                the products and services are provided/sold by the sellers only.
                For detail read &nbsp;
                <a className="OpFpE" href="/terms-and-conditions">
                  <u>Terms and Conditions</u>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="address">
          <div className="addBox">
            <div className="add">
              <div className="add1">
                DELIVER TO <span>Home</span>
              </div>
              <div className="add2">40 ,Shivshankar Nagar ,Amravati</div>
            </div>
            <div className="box">
              <div role="button" className="boxButton">
                CHANGE
              </div>
            </div>
          </div>
        </div>
        <div className="toPayment">
          <div className="tp1">
            <div className="tp2">
              <button className="tp3" type="submit">
                <div className="tp4">
                  <img
                    src="https://assets.pharmeasy.in/web-assets/dist/90a09c2f.svg"
                    alt="*"
                  />
                  <span>Apply Coupon / View Offers</span>
                </div>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M8 7.4L9.4 6l6 6-6 6L8 16.6l4.6-4.6z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Link to={"/payment"} >
                                    <button className="proceedtp" >
                                    
                                        Proceed To Buy
                                    </button>
                                </Link>
        <div className="fd">FREE DELIVERY WITH CART VALUE ABOVE 500</div>
      </div>
    </div>
  );
}
