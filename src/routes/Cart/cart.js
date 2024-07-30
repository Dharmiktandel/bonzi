import axios  from "axios";
import React, { useEffect, useState } from "react";


const Cart = () =>  {


    const[searchquery,setsearchquery] = useState("");
    const[product,setproduct] = useState([]);

    const fetchProducts = async () => {
        try{
            const response = await axios.get("https://dummyjson.com/products?search=${searchquery}");
            console.log(response)
            const filterProducts = response.data.products.filter(product =>
            product.title.toLowerCase().startsWith(searchquery.toLowerCase()));
           
            setproduct(filterProducts);
            console.log(filterProducts);
        } catch(error) 
        {
          console.error("errorr",error);
        }
    }

    useEffect(() => {
        if(searchquery.length>0){
            fetchProducts()
        }
        else{
            setproduct([])
        }
    },[searchquery])


    return(
          
         <>
         <div style={{height:20,backgroundcolor:"white"}}>
            <input type="text" placeholder="search"  onChange={(e)=>setsearchquery(e.target.value)} value={searchquery}></input>
         </div>

        <div>
        {
          product.map((item) => (
            <div key={item.id}>
            {/* <button  style={{width:300,marginLeft:170,marginTop:40,height:400,border:"none",borderStyle:"groove",backgroundColor:"white",borderRadius:15}}>  */}
            <span style={{fontSize:10}}>{item.title}</span>
            {/* </button> */}
            </div>
         
          ))
          }
        </div>

        </>
        
    )
}

export default Cart;