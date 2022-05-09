import React, { useEffect } from "react";
import {useState} from "react"


export const Items = ({name,img_src,discount,MRP,discounted_price}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
      setData(data);
  }, []);
  // console.log(data)
  return (
    <>
    {data.map(e => {
        return <div className="_1jald _2nXpj">
        <a
         tabindex="0"
          role="button"
          className="_2tdEn _1pXi6 _3o0NT _1NxW8 iJm6I"
          href="/health-care-products/calcimax-forte-plus-strip-of-30-tablets-19501"
        >
          <div>
            <div className="zdjTo">
              <img
                className="pe-lazy"
                alt="product"
                src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
                srcset={e.img_src}
                loading="lazy"
                importance="low"
              />
              <noscript></noscript>
            </div>
          </div>
          <div className="_8a3x3">
            <div className="_3bwoY">
              <div className="_3er_I">
                <div className="_2UHKQ">
                  <h1 className="ooufh">{e.name}</h1>
                  <div className="_65ARL"></div>
                </div>
                <div className="_19P2j">
                  <button className="_1tbAI _1LcKc">
                    <img  src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg" alt="close" />
                  </button>
                </div>
              </div>
              <div className="_3JVGI">{e.name}</div>
              <div className="_36aef">30 Tablet(s) in Box</div>
              <div className="_2k6jd _2hXMr">
                <div className="_2r_Vl _2xtql Wd1Ar">
                  <div className="_3WtBj">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="_2RXW8 _86CNI">
                    <div className="_18T3X">
                      <div className="_1jPMI" data-intro-id="cart-button">
                        <div className="_3C1Hw">
                          <div
                            tabindex="0"
                            role="button"
                            className="_2tdEn _1pXi6 _3Xozj _1V59B"
                          >
                            <div className="jss48 Y8UlO _25Xw1">
                              <div className="jss31 jss59 jss32 jss60 _2MO5e">
                                <div className="jss52">
                                  <div
                                    className="jss53 _3QvaN _27uAa jss56 jss41 jss67"
                                    aria-pressed="false"
                                    tabindex="0"
                                    role="button"
                                    aria-haspopup="true"
                                  >
                                    Qty 1
                                  </div>
                                  <path d="M7 10l5 5 5-5z"></path>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_1JkCV">
                        <div className="_2xJD8">
                          <span className="_3L89i">{e.discount}</span>
                          <div className="_3QgnP">
                            <span className="_31Agc">{e.MRP}</span>
                          </div>
                        </div>
                        <span className="_3t5mc">
                          MRP<s>{e.discounted_price}</s>
                        </span>
                      </div>
                    </div>
                    <div className="c3Otf _1WbGo">
                      <div className="_2TAS2">
                        <div>
                          <span>Delivery</span>
                          <span className="_tb_h"> Tue 10 May</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      })
    }
    </>
  );
};
export default Items