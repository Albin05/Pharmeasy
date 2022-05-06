
import { useState } from "react";
import '../Signup/Signup.css'
export const Signin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name]: value});
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div className="signup">
            <div className="signupHead">
                <div className="img1">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="img1" width="80%"/>
                </div>
                <div className="img2">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg" alt="img2" width="70%" height="80%"/>
                </div>
            </div>
            <h5>
            Quick Login / Register
            </h5>
            <form onSubmit={dataSubmit}>
                <label>Email</label>
                <input type="text" name="email" id="email" onChange={getData} value={data.email} />
                <label>Password</label>
                <input type="password" name="password" id="password" onChange={getData} value={data.password} />
                <button>Login In</button>
            </form>
        </div>
    )
}