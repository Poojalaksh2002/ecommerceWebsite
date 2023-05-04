import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import About from "./Component/About";
import { Contact } from "./Component/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Home/>  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
