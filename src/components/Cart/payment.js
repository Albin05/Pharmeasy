import "./payment.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
export default function Payment() {
  
  const handleOrder = () => {
    alert("Your ordre has been placed")
  }
  return (
  <div className="main" >
    <div className="left">
      <div className="div1">
        <div className="heading"><h1>OFFERS</h1></div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png" />
          </div>
          <div className="subdiv2" >
            <h2>PaytmWallet | Postpaid</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/amazonpay_new.png" />
          </div>
          <div className="subdiv2" >
            <h2>Amazon Pay</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/wallet_icons/phonepe.png" />
          </div>
          <div className="subdiv2" >
            <h2>PhonePay</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png" />
          </div>
          <div className="subdiv2" >
            <h2>Mobikwik</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        
        
      </div> 
      <div className="div1">
        <div className="heading"><h1>Other Option</h1></div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/upi.png" />
          </div>
          <div className="subdiv2" >
            <h2>UPI</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/wallet.png" />
          </div>
          <div className="subdiv2" >
            <h2>Wallet</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/card.png" />
          </div>
          <div className="subdiv2" >
            <h2>Creadit/Debit Card</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://cdn.pharmeasy.in/payments/netbanking.png" />
          </div>
          <div className="subdiv2" >
            <h2>Net Banking</h2>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        <div className="subdiv">
          <div className="subdiv1">
            <img className="subdiv1Img" src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png" />
          </div>
          <div className="subdiv2" >
            <h2>Pay On Delivery</h2>
            <button onClick={()=>handleOrder()}
            > Place Order</button>
          </div>
          <div className="subdiv3">
            <input type="radio"/>
          </div>
        </div>
        
      </div>
      </div>
      <div className="right"> 
      
      </div>
    </div>
    )}