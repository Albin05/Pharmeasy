import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../Fotter/Footer";
import "./ProductDetail.css";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState(cartFromLocalStorage);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    axios
      .get(`https://master-pharm.herokuapp.com/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to Cart");
  };

  return (
    <div className="prod_det">
      <div className="prod_det_img">
        <img src={product.img_src} alt="" />
      </div>
      <div className="prod_det_des">
        <h3>{product.name}</h3>
        <h4>{product.MRP}</h4>
        <p>
          MRP <s>{product.discounted_price}</s>
        </p>
        <div>{product.discount}</div>

        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
      <div className="prod_det_cart">
        <Link to={"/cart"}>
          <button>View Cart {">"}</button>
        </Link>
        <div>
          <h5>Offers</h5>
          <h5 className="prod_det_teal">View all</h5>
        </div>
        <p className="prod_det_teal">
          Get access to PharmEasy's Diabetes 360 program
        </p>
        <p className="prod_det_teal">
          Flat Rs.150 instant discount on select HDFC Bank Debit and Credit
          cards
        </p>
      </div>
    </div>
  );
};
