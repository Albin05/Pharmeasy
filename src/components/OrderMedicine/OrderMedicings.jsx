// import Box from '@mui/material/Box';
// import { Button } from '@mui/material';
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./OrderMedicings.css";
export const OrderMedicines = () => {
  return (
    <div className="main">
      <h1 className="head_one">Order Medicines Online</h1>
      <div className="one">
        <div className="one_one">
          <div className="flat">
            <span> % Flat 18% Off </span>
            <span>1 Lakh+ Products % </span>
          </div>
          <div>
            <h3>Search for Medicines / Healthcare Products</h3>
            <div className="Navbar_main_searchbar_order">
              <select className="SelectTag" id="">
                <option value="">
                  <h2>Select Pincode</h2>
                </option>
                <option value="">804454</option>
                <option value="">804453</option>
              </select>
              <input
                type="text"
                placeholder="Search medicines/Healthcare products @18% Off"
              />
              <div>
                {" "}
                <i class="fa-solid fa-magnifying-glass"></i>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="two_two">
          <div className="order">
            <a className="press" href="##">
              Order Via Prescribed
            </a>
          </div>
          <div className="order">
            <a className="press" href="##">
              Order Via Prescribed
            </a>
          </div>
        </div>
      </div>

      {/* my offer******************
       */}
      <div className="two">
        <h3 style={{ textAlign: "left" }}> All Offers</h3>
        <div className="scroll">
          <section>
            <div className="outer-wrapper">
              <div className="inner-wrapper">
                <div className="pseudo-item">
                  <div className="scrollbox">
                    <img
                      height={"60px"}
                      src="https://cms-contents.pharmeasy.in/offer/6a4f1adb904-POcket_Logo.jpg?w=64&q=75"
                    />
                    <p>
                      <span>
                        Flat 25% off + upto <br /> 5000 cashback <br />
                        Code:<span>MED25</span>{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pseudo-item">
                  <div className="scrollbox">
                    <img
                      height={"60px"}
                      src="https://cms-contents.pharmeasy.in/offer/4db0adda6b1-40.jpg?w=64&q=75"
                    />
                    <p>
                      <span>
                        Flat 25% off + upto <br /> 5000 cashback <br />
                        Code:<bold>MED25</bold>{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pseudo-item">
                  <div className="scrollbox">
                    <img
                      height={"60px"}
                      src="https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg?w=64&q=75"
                    />
                    <p>
                      <span>
                        Flat 25% off + upto <br /> 5000 cashback <br />
                        Code:<bold>MED25</bold>{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pseudo-item">
                  <div className="scrollbox">
                    <img
                      height={"60px"}
                      src="https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg?w=64&q=75"
                    />
                    <p>
                      <span>
                        Flat 25% off + upto <br /> 5000 cashback <br />
                        Code:<bold>MED25</bold>{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* image scroll bar */}
      <div className="image">
        <div className="image_scroll">
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg"
            alt="img one"
          />
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg"
            alt="img two"
          />
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg"
            alt="img three"
          />
        </div>
      </div>

      {/* views_scroll */}
      <div className="views">
        <div>
          <h2 className="views_heading">What our customers have to say</h2>
        </div>
        <div className="viewss">
          <div className="views_flex">
            <div>
              <div className="name">Rajshri Sarkar</div>
              <div className="date">April 22,2022 </div>
            </div>
            <div className="para">
              Whatever be your medicinal requirement, you are sure to locate it
              in this online pharmacy. All you have to do then is to add it to
              your cart and place the order. In 3 hours*, the medicines will be
              delivered to you.
            </div>
          </div>

          <div className="views_flex">
            <div>
              <div className="name">Lipi Chaudhary</div>
              <div className="date">March 20,2022 </div>
            </div>
            <div className="para">
              Best service and app amongst all available. I have been using it
              for more than 3 years, and even during the pandemic, they have
              kept their standards high and are delivering the order within 24
              hours. Keep up the good work.
            </div>
          </div>

          <div className="views_flex">
            <div>
              <div className="name">Darpan Dholakia</div>
              <div className="date">Feb 10,2020 </div>
            </div>
            <div className="para">
              Very good app. Would recommend it to everyone requiring fast and
              efficient delivery of medicinal products at the doorstep.
            </div>
          </div>
        </div>

        {/* Q & A */}
        <div className="questions">
          <h2 className="que">India's No. 1 Medicine Delivery App</h2>
          <span style={{ textAlign: "start" }}>
            <p className="paragraph">
              The concept of medicine home delivery has been taken to a new
              level by the PharmEasy online medicine delivery app. You can use
              the PharmEasy online medicine delivery app to browse through an
              extensive range of medicines. Each medicine undergoes a 3-step
              quality check.
            </p>
            <p className="paragraph">
              Whatever be your medicinal requirement, you are sure to locate it
              in this online pharmacy. All you have to do then is to add it to
              your cart and place the order. In 3 hours*, the medicines will be
              delivered to you. India’s beloved online medicine delivery app
              makes sure that you get your medicines in record time because we
              know how vital time is in any treatment. Sit back, and we will
              have all your medical necessities delivered to your doorstep.
            </p>
          </span>

          <h2 className="que">
            Online Medicine - Your Online Medical Store in India
          </h2>
          <span style={{ textAlign: "start" }}>
            <p className="paragraph">
              Tired of walking all the way to your local medicine store? Worried
              that going out is risky during the current times? Order medicines
              online at PharmEasy, India’s trusted online medicine app. With
              more than 1 lakh medicines always in stock, you are sure to find
              what you are looking for, and that too at affordable prices!
            </p>
            <p className="paragraph">
              Besides, extremely stringent sanitization norms are followed at
              your favourite online medical store. PharmEasy takes the safety of
              customers and employees very seriously.
            </p>
          </span>

          <h2 className="que">Reasons To Buy Medicine Online From PharmEasy</h2>
          <span style={{ textAlign: "start" }}>
            <p className="paragraph">
              Here are a few reasons that will convince you to give online
              medicine order through the PharmEasy app -
            </p>
            <p className="paragraph">
              <span> 1,200+ cities and 20,000+ Pin codes served</span> <br />
              <span> Medicine delivery within 3 hours*</span> <br />
              1 Lakh+ medicines available <br />
              Cash on delivery option available <br />
              Attractive offers <br />
              Cashback option through wallet <br />
              Stringent quality checks <br />
              Garnered the trust of more than 10 million users who have made an
              online purchase through PharmEasy <br />
            </p>
          </span>

          <h2 className="que">Get 3-Step Quality-checked Medicines</h2>
          <span style={{ textAlign: "start" }}>
            <p className="paragraph">
              PharmEasy is a one-stop-shop for all your healthcare needs. We
              have 1L+ products for you to choose from. Buy medicines online at
              affordable prices from the comforts of your home in just a few
              clicks and get them delivered at your doorstep. The entire process
              of shopping for medicines is hassle-free and convenient. All you
              have to do is search for the products you need on our website or
              app, add to cart and then proceed with the checkout process.
            </p>
            <p className="paragraph">
              With our scheduled refill reminder, you don’t even need to keep
              track of your refill dates. What’s more, we have great offers,
              with added discounts and massive e-wallet cashbacks on purchasing
              medicines!
            </p>
          </span>

          {/* button box */}
          <div className="button_box">
            <h2 className="heading">
              {" "}
              <span>✅ Is buying medicines online safe?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                Absolutely! All our medicines undergo a three-step quality check
                process to ensure they are of high quality. We source our
                products only from licensed retail pharmacies. <br />
                PharmEasy is used by 5M+ users across 1.2k+ cities in India
                incl. Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
                Noida, Pune, etc. for purchasing medicines online.
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              {" "}
              <span>✅ Why choose us for your medicine home delivery?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                <ul>
                  <li>Used by 5M+ customers</li>
                  <li>Delivery in 24-48* hours</li>
                  <li>
                    Over 1L+ meds and healthcare products for you to select from
                  </li>
                  <li>3-step quality-checked products</li>
                  <li>PharmEasy Plus subscription with exclusive benefits</li>
                  <li>We deliver in 22k+ pin codes across 1.2k+ cities</li>
                  <li>Scheduled refill reminders</li>
                  <li>Attractive deals and e-wallet cashbacks</li>
                  <li>
                    A highly capable team of experienced pharmacists and
                    healthcare professionals
                  </li>
                  <li>Cash-on-delivery available</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              {" "}
              <span>✅ Why choose us for your medicine home delivery?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                <ol>
                  <li>
                    Visit our website or open our online medicine app on your
                    phone.
                  </li>
                  <li>
                    <a href="/upload-prescription">
                      Upload a valid doctor’s prescription
                    </a>{" "}
                    and search from our list of medicines.
                  </li>
                  <li>
                    Enter the address where you want your package to be
                    delivered.
                  </li>
                  <li>
                    Our partner retailer will call you to confirm the order.
                  </li>
                  <li>The medicine is packed by the pharmacist.</li>
                  <li>
                    Our delivery person will deliver the package at your
                    doorstep.
                  </li>
                </ol>
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              {" "}
              <span>✅ When will PharmEasy deliver my medicines?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                Once you purchase your medicines online with us, you will get it
                within 24-48* hours. <br />
                *T&C: The delivery time might vary depending on the delivery
                location.
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              <span>
                ✅ Do I get discounts/cashback while ordering medicines online
                with PharmEasy?
              </span>
            </h2>
            <div className="answers">
              <span className="answer">
                Yes, you can get huge discounts and massive e-wallet cashback on
                purchasing medicines.
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              <span>✅ When will I receive my order?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                Your order will be delivered as per the 'Estimated Delivery
                Date' committed at the time of order placement. You can check
                this by selecting your order from the "My Orders" section. Keep
                a lookout for our order delivery updates. <br />
                Note: Due to the current COVID-19 crisis, the delivery date may
                not be as per usual timelines and we request you to bear with
                us. But rest assured, we are working round the clock to deliver
                your order as soon as possible.
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              <span>
                ✅ What is the shelf life of medicines being provided?
              </span>
            </h2>
            <div className="answers">
              <span className="answer">
                <span>
                  We ensure that the shelf life of the medicines being supplied
                  by our partner retailers is a minimum of 3 months from the
                  date of delivery.
                </span>
              </span>
            </div>
          </div>

          <div className="button_box">
            <h2 className="heading">
              <span>✅ How do I cancel my order?</span>
            </h2>
            <div className="answers">
              <span className="answer">
                <span>
                  You can cancel your order from the ‘Order Details’ screen
                  before it is out for delivery. Simply click on the Account
                  icon at the bottom of the App Homepage &gt; select ‘Orders’
                  &gt; Select the order which you want to cancel &gt; tap
                  “Cancel”. You can also refuse it at the time of delivery and a
                  refund will be processed to the payment source, if the order
                  amount was paid online.
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom_box">
            <div className="lakh">
              <img
                src="https://pharmeasy.in/_next/image?url=%2Ficons%2FgenuineMedicine.svg&w=64&q=75"
                alt="1 lakh"
              />
              <h3>1 Lakh+ Products</h3>
              <div className="AppBenefits_benefitDescription__fG4G4">
                We maintain strict quality controls on all our partner
                retailers, so that you always get standard quality products.
              </div>
            </div>

            <div className="lakh">
              <img
                src="https://pharmeasy.in/_next/image?url=%2Ficons%2FsecurePayment.svg&w=64&q=75"
                alt="1 lakh"
              />
              <h3>Secure Payment</h3>
              <div className="AppBenefits_benefitDescription__fG4G4">
                100% secure and trusted payment protection
              </div>
            </div>

            <div className="lakh">
              <img
                src="https://pharmeasy.in/_next/image?url=%2Ficons%2FeasyReturn.svg&w=64&q=75"
                alt="1 lakh"
              />
              <h3>Easy Return</h3>
              <div className="AppBenefits_benefitDescription__fG4G4">
                We have a new and dynamic return window policy for medicines and
                healthcare items. Refer FAQs section for more details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
