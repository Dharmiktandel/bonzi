import React, { useEffect, useState } from "react";
import './Navbar.css';

import user from '../../assets/user.png'
import form from '../../assets/form.png'
import addtocart from '../../assets/addtocart.png'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import hexa from '../../assets/hexa.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFragrances, setSmartPhone, setSkincare, setGroceries, setHomedecoration, setFurniture, setTops, setWomendress, setWomenshoes, setMenshirts } from "../../redux/action";
import { setLaptop, setMenshoes, setMenswatch, setWomenswatch, setWomenbags, setWomenjewelerry, setSunglasses, setAutomotive, setMotorcycle } from "../../redux/action";

const Navbar = () => {
  const [apidata, setApidata] = useState([]); // Assuming apidata is an array
  const [productData, setProductData] = useState([]);
  const [searchquery, setSearchquery] = useState("");
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const dhars = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products?search=${searchquery}`);
      const filterProducts = response.data.products.filter(product =>
        product.title.toLowerCase().includes(searchquery.toLowerCase())
      );
      setProduct(filterProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    if (searchquery.length > 0) {
      fetchProducts();
    } else {
      setProduct([]);
    }
  }, [searchquery]);

  const fetchData = async (url, actionCreator) => {
    try {
      const response = await axios.get(url);
      dispatch(actionCreator(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const categoryData = async () => {
    const response = await axios.get("https://dummyjson.com/products/categories");
    setApidata(response.data); // Assuming response.data is an array of strings or objects
  }

  const pData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProductData(response.data.products);
  }

  const navigateCategory = (item) => {
    switch (item) {
      // Implement your navigation logic here
    }
  }

  useEffect(() => {
    categoryData();
    pData();
  }, []);

  const signupp = () => {
    dhars('/signup');
  }

  const signinn = () => {
    dhars('/signin');
  }

  const cartt = () => {
    dhars('/product');
  }

  const passData = (item) => {
    dhars('/product', { state: { item } });
  }

  return (
    <>
      <div className="headerr">
        <div className="blogo">
          <img style={{ width: 130, height: 70, marginTop: -25 }} src={logo} alt="Logo" />
        </div>
        <div className="search">
          <form>
            {/* Your search form */}
          </form>
        </div>
        <div className="icons">
          {/* Your icons */}
        </div>
      </div>

      <div className="secpage">
        <div className="cat">
          <div style={{ flexDirection: "row", alignItems: "center", display: 'flex', marginTop: 40, marginLeft: 30 }}>
            <img style={{ width: 30, height: 30, marginLeft: 10 }} src={menu} alt="Menu" />&nbsp;&nbsp;
            <b><span>Categories</span></b>
          </div>
          {
            apidata.map((itemm, index) => ( // Check if apidata is an array and each itemm is an object or string
              <button onClick={() => navigateCategory(itemm.name)} key={index} style={{ marginTop: 15, marginLeft: 40, width: 150, border: "none", borderRadius: 4, background: "none" }}>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <span style={{ alignItems: "center", textDecoration: "none", color: "black", cursor: 'pointer' }}>{itemm.name}</span>
                </div>
              </button>
            ))
          }
          {/* {
            apidata.map((itemm, index) => (
              <button onClick={() => navigateCategory(itemm)} key={index} style={{ marginTop: 15, marginLeft: 40, width: 150, border: "none", borderRadius: 4, background: "none", cursor: 'pointer' }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "black", textDecoration: "none" }}>{typeof itemm === 'object' ? itemm.name : itemm}</span>
                </div>
              </button>
            ))
          } */}

        </div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id="carousel">
            {/* Your carousel content */}
          </div>
          <div className="compoimage">
            {
              productData.map((item) => (
                <button onClick={() => passData(item)} key={item.id} style={{ width: 300, marginLeft: 170, marginTop: 40, height: 400, border: "none", borderStyle: "groove", backgroundColor: "white", borderRadius: 15 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img style={{ borderStyle: "groove", borderRadius: 15, height: 250, width: 150 }} src={item.thumbnail} alt="Product Thumbnail" />&nbsp;&nbsp;
                  </div>
                  <span style={{ fontSize: 25 }}>{item.title}</span><br></br>
                  <span style={{ color: "orangered", fontSize: 25 }}>{item.price}</span>
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
