  import React from 'react';
  //import logo from './logo.svg';
  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Home from "./components/Home";
  import Signin from './routes/login/signin';
  import Signup from './routes/Registration/signup';
  import Cart from './routes/Cart/cart';
  import Smartphone from './components/smartphones';
  import Laptop from './components/laptop';
  import Fragrances from './components/fragrances';
  import Skincare from './components/skincare';
  import Groceries from './components/groceries';
  import Homedecoration from './components/homedecoration';
  import Furniture from './components/furniture';
  import Tops from './components/tops';
  import Womendress from './components/womendress';
  import Womenshoes from './components/womenshoes';
  import Menshirts from './components/menshirts';
  import Menshoes from './components/menshoes';
  import Menswatch from './components/menwatch';
  import Womenswatch from './components/womenwatch';
  import Womensbags from './components/womenbag';
  import Womensjewellery from './components/womenjewellary';
  import Sunglasses from './components/sunglasses';
  import Automotive from './components/automotive';
  import Motorcycle from './components/motorcycle';
  import Product from './routes/Product/product';
  //import Navbar from './routes/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartDetails from './routes/Cartdetail/Cartdetail';


  function App() {
    return (
          <>
            <Router>
              <Provider store={store}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<Signin />}></Route> 
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/cartDetails" element={<CartDetails />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/Smartphone" element={<Smartphone />}></Route>
                <Route path="/Laptop" element={<Laptop />}></Route>
                <Route path="/Fragrances" element={<Fragrances />}></Route>
                <Route path="/Skincare" element={<Skincare />}></Route>
                <Route path="/Groceries" element={<Groceries />}></Route>
                <Route path="/Homedecoration" element={<Homedecoration />}></Route>
                <Route path="/Furniture" element={<Furniture />}></Route>
                <Route path="/Tops" element={<Tops />}></Route>
                <Route path="/Womendress" element={<Womendress />}></Route>
                <Route path="/Womenshoes" element={<Womenshoes />}></Route>
                <Route path="/Menshirts" element={<Menshirts />}></Route>
                <Route path="/Menshoes" element={<Menshoes />}></Route>
                <Route path="/Menswatch" element={<Menswatch />}></Route>
                <Route path="/Womenswatch" element={<Womenswatch />}></Route>
                <Route path="/Womensbags" element={<Womensbags />}></Route>
                <Route path="/Womensjewellery" element={<Womensjewellery />}></Route>
                <Route path="/Sunglasses" element={<Sunglasses />}></Route>
                <Route path="/Automotive" element={<Automotive />}></Route>
                <Route path="/Motorcycle" element={<Motorcycle />}></Route>
              </Routes>
              </Provider>
            </Router>
          </>

      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"  
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

  //     {
  //   category.map((item,index) => (
  //     <div key={index} style={{marginTop:15,marginLeft:77}}>
  //  <div style={{flexDirection:"row",display:"flex"}}>
  //  <img style={{width:20}} src={home} alt="d"/>&nbsp;&nbsp;&nbsp;&nbsp;
  //  <a href="../src" style={{alignItems:"center",textDecoration:"none",color:"black" }}>{item}</a>
  
  //  </div>

  //  </div>
  //   ))
  //  }
    );
  }

  export default App;
