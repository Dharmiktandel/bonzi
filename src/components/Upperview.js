import React, { useState } from "react";

const Upperview = () => {
    const[modalVisible,setmodelVisible]=useState(false);
    const[count,setcount]=useState(1);

    const add = () => {
        console.log("add");
        setcount(count+1)
    }

    return(
        <div style={{width:100,height:444}}>
        <button onClick={()=>setmodelVisible(true)} style={{height:30,backgroundColor:"red"}}>
            <span style={{fontSize:17,fontWeight:'700',color:"#000"}}>Select</span>
        </button>
             
        </div>
    )
}
export default Upperview;