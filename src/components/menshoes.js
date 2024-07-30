import React from "react";
import {  useSelector } from "react-redux";

const Menshoes= () => {
    const Menshoess = useSelector((state)  => state.menshoesed.menshoesItems)
    return(
        <>
           <div>
            <b>Categories</b>
           </div>
         {
            Menshoess.map((item) => (
          <button key={item.id} style={{width:300,marginLeft:170,marginTop:40,height:400,border:"none",borderStyle:"groove", backgroundColor:"white",borderRadius:15}}>  
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img style={{borderStyle:"groove",borderRadius:15,height:250,width:150}} src={item.thumbnail} alt="iphne11"/>&nbsp;&nbsp;
          </div>
          <span style={{fontSize:25}}>{item.title}</span><br></br>
          <span style={{color:"orangered",fontSize:25}}>{item.price}</span>
          </button>
         ))
         }
          </>
    )
}
export default Menshoes;