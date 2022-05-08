import "./Personalcare.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Personalcare = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:8080/personalcare");
    setProducts(await res.json());
  };
  return (
    <div className="per_main">
      <div>Home {`>`} Products</div>
      <div className="per_sub">
        <div className="sidebar_per">
          <h2>Filter</h2>
          <h3>Category</h3>
          <div className="per_categories">
            <p>Personal Care</p>
            <input type="radio" />
          </div>
          <div className="per_line"></div>
          <h3>Sub category</h3>
          <div className="per_categories">
            <p>Men Care</p>
            <input type="radio" />
          </div>
          <div className="per_categories">
            <p>Appliances Care</p>
            <input type="radio" />
          </div>
          <div className="per_categories">
            <p>Women Care</p>
            <input type="radio" />
          </div>
          <div className="per_categories">
            <p>Oral Care</p>
            <input type="radio" />
          </div>
          <div className="per_categories">
            <p>Male Grooming</p>
            <input type="radio" />
          </div>
          <h5>View More</h5>
          <div className="per_line"></div>
          <h4>Brand</h4>
          <input type="text" placeholder="Search" />
          <div className="per_categories">
            <p>&me</p>
            <div className="per_count">
              <p>(2)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>1m</p>
            <div className="per_count">
              <p>(3)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>23 Yards</p>
            <div className="per_count">
              <p>(5)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>360 Block</p>
            <div className="per_count">
              <p>(1)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>Aarshaveda</p>
            <div className="per_count">
              <p>(3)</p>
              <input type="checkbox" />
            </div>
          </div>
          <h5>View More</h5>
          <div className="per_line"></div>
          <h4>Price</h4>
          <input type="text" placeholder="Search" />
          <div className="per_categories">
            <p>Below 99</p>
            <div className="per_count">
              <p>(1049)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>100 - 199</p>
            <div className="per_count">
              <p>(1567)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>200 - 299</p>
            <div className="per_count">
              <p>(1132)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>300 - 399</p>
            <div className="per_count">
              <p>(765)</p>
              <input type="checkbox" />
            </div>
          </div>
          <div className="per_categories">
            <p>400 - 499</p>
            <div className="per_count">
              <p>(435)</p>
              <input type="checkbox" />
            </div>
          </div>
          <h5>View More</h5>
        </div>

        <div className="per_products">
          <div className="per_prod_top">
            <h2>Personal Care</h2>
            <div>
              <p>Sort By:</p>
              <select name="" id=""></select>
            </div>
          </div>
          <div className="per_product_cont">
            {products.map((e) => {
                return (
                  <Link to={`/products/personalcare/${e.id}`}>
                    <div className="per_product_card">
                      <div className="per_prod_img">
                        <img src={e.img_src} alt="" />
                      </div>

                      <h5>{e.name}</h5>
                      <div>
                        <p>
                          MRP <s>{e.discounted_price}</s>
                        </p>
                        <div>
                          <p>{e.discount}</p>
                        </div>
                      </div>
                      <h5>{e.MRP}</h5>
                    </div>
                  </Link>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};