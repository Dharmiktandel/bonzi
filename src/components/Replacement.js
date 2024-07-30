import React from "react";

const Replacement = (props) => 
{
    return(
        <div style={{width:100,alignItems:"center"}}>
        {/* <img src={props.imagg} alt="ll" style={{height:20,width:20}}/> */}
        <span style={{fontSize:15,color:"#0000"}}>{props.name}</span>
        <span style={{fontSize:15,color:"#0000"}}>{props.days}</span>
        </div>
    )
}
export default Replacement;