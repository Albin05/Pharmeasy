//import { Link } from "react-router-dom"

import { Link } from "react-router-dom"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
const navigate = useNavigate();

    return (
      <div>
        <nav id="Navbar_main">
          <div className="Navbar_main_container">
            <div className="Navbar_main_firstDiv">
              <div onClick={() => navigate('/')} className="Navbar_main_logo">
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                  alt=""
                />
              </div>
              <div className="Navbar_main_searchbar">
                <select className="SelectTag"  >
                  <option value="">---</option>
                  <option value="">804454</option>
                  <option value="">804453</option>
                </select>
                <input
                  type="text"
                  placeholder="Search medicines/Healthcare products @18% Off"
                />
                <div>
                  {/* {" "} */}
                  <i class="fa-solid fa-magnifying-glass"></i>
                  {/* {" "} */}
                </div>
              </div>
            </div>
            <div className="Navbar_main_secondDiv">
              {/* -------------------leftDiv----------------------------- */}
              <div className="Navbar_main_seconDiv_Left">
                <ul>
                  <li>
                    <a href="/">
                      <Link to="/medicines">Order Medicines</Link>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Link to="/products">Healthcare Products</Link>
                    </a>
                  </li>
                  <li>
                    <a href="/">Lab Tests</a>
                  </li>
                  <li>
                    <a href="/">RTPCR</a>
                  </li>
                </ul>
              </div>
              {/* -------------------rightDiv----------------------------- */}
              <div className="Navbar_main_seconDiv_Right">
                <ul>
                  <img
                    className="Navbarcart"
                    src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"
                    alt=""
                  />
                  <li>
                    <a href="/">Offers</a>
                  </li>
                  <img
                    className="Navbarcart"
                    src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg"
                    alt=""
                  />
                  <li>
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                  </li>
                  <img
                    className="Navbarcart"
                    src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg"
                    alt=""
                  />
                  <li>
                    <Link to={"/cart"}>Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }