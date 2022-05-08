import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Fotter/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { OrderMedicines } from "./components/OrderMedicine/OrderMedicings";
import { Healthfood } from "./components/Products/Healthfood";
import { Personalcare } from "./components/Products/Personalcare";
import { ProductDetail } from "./components/Products/ProductDetail";
import { Productsmain } from "./components/Products/Productsmain";
import { Signin } from './components/Auth/Signin/Signin';
import { Signup } from './components/Auth/Signup/Signup'
import { HomeMain } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<HomeMain/>}></Route>
        <Route path="/products" element={<Productsmain />}></Route>
        <Route path="/products/:name" element={<Personalcare />}></Route>
        <Route path="/products/:name" element={<Healthfood />}></Route>
        <Route path="/products/personal/:id" element={<ProductDetail />}></Route>
        <Route path="/medicines" element={<OrderMedicines />}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
