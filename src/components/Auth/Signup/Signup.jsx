
import axios from "axios";
import { useState } from "react";
import "../Signup/Signup.css";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState("");
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://master-pharm.herokuapp.com/register", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.errors) {
          if (res.data.errors.length === 3) {
            setShow("Password is not strong");
          } else {
            setShow("Email id already exist");
          }
        } else {
          navigate("/");
        }
      });
  };
  return (
    <div className="signup">
      <div className="signupHead">
        <div className="img1">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt="img1"
            width="80%"
          />
        </div>
        <div className="img2">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
            alt="img2"
            width="70%"
            height="80%"
          />
        </div>
      </div>
      <h5>Quick Login / Register</h5>
      <form onSubmit={dataSubmit}>
        <label>Email</label>
        <input
          onClick={() => setShow("")}
          type="text"
          name="email"
          id="email"
          onChange={getData}
          value={data.email}
          required
        />
        <label>Password</label>
        <input
          onClick={() => setShow("")}
          type="password"
          name="password"
          id="password"
          onChange={getData}
          value={data.password}
          required
        />
        <h5 className="redAlert">{show}</h5>
        <button>Sign Up</button>
      </form>
    </div>
  );
};