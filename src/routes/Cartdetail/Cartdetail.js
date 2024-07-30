import React,{ useState } from "react";
import {  useDispatch } from "react-redux";
import {useSelector} from "react-redux";

const CartDetails = () => {

    const cartDesc = useSelector(state => state.addtocartt.addtocartItems);
    const [quantities, setQuantities] = useState(cartDesc.map(() => 0));
    const dispatch = useDispatch();

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index]++;
        setQuantities(newQuantities);
    }

    const handleDecrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
            newQuantities[index]--;
            setQuantities(newQuantities);
        }
    }

    const getTotalPrice = (index) => {
        return cartDesc[index].price * quantities[index];
    }

    const getGrandTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < cartDesc.length; i++) {
            total += cartDesc[i].price * quantities[i];
        }
        return total;
    }

    // const removeItemFromCartHandler = (itemId) => {
    //     dispatch(removeItemFromCart(itemId));
    // }


    return(
      <div style={{height:"100%",width:"100%"}}>
      <div style={{display:"flex"}}>
        <div style={{width:"70%",height:"100%",backgroundColor: '#fff',margin:40,}}>
        {/* <h3 style={{fontSize:20,margin:10,padding:10,backgroundColor:"green"}}>Shopping Cart</h3> */}
        <hr style={{}}></hr>
            {
                cartDesc.map((item,index) => (
                   <div key={index} style={{ height: 230,  flexDirection: "row", display:"flex" ,margin:40 }}>
                    <img style={{ height: 200, width: 170 }} src={item.thumbnail} alt="pp"/>
                    <div style={{ marginLeft:70}}>
                        <span style={{ fontSize: 20, color: "#000" }}>{item.description}.</span><br></br>
                        <span style={{ fontSize: 20, color: "#000" }}>{item.title}</span>
                        <div style={{   flexDirection: "row" }}>
                          <div  style={{ height: 25, width: 70,  flexDirection: "row",  }}>
                            <span style={{ fontSize: 15, color: "#000",fontWeight:700 }}>₹ {item.price}</span>
                          </div>
                          <span style={{ color: "#000",fontWeight:500  }}>Total Price :</span>
                          <span style={{ fontSize: 15, color: "#000", }}>₹ {getTotalPrice(index)}</span>
                          <div style={{ marginTop:12,     flexDirection: "row" }}>
                            <button onClick={()=>handleDecrement(index)} style={{  color: "#000",borderRadius:"60%",background:"linear-gradient(#fff, #f9f9f9)",border:"1px solid #c2c2c2",lineHeight:1,paddingTop:"1px",width:"28px",height:"28px"}}>-</button>
                            <span style={{  color:"#000",padding:"3px 15px",width:"66px",height:"28px",borderRadius:2,background:"#fff", border:"1px solid #c2c2c2",margin:"0 5px",justifyContent:"center",alignItems:"center",}}>{quantities[index]}</span> 
                            <button onClick={()=> handleIncrement(index)} style={{  color: "#000",borderRadius:"60%",background:"linear-gradient(#fff, #f9f9f9)",border:"1px solid #c2c2c2",lineHeight:1,paddingTop:"1px",width:"28px",height:"28px" }}>+</button>
                          </div>
                        </div>
                        <div style={{marginTop:18}}>
                            <button  style={{position:"relative",backgroundColor:"#ff9f00",fontSize:14,color:"#fff",borderRadius:3,width:170,padding:"13px 40px",border:"1px solid #e0e0e0",cursor:"pointer"}}>REMOVE</button>
                        </div>
                    </div>
                    </div> 
                ) 
                )
            }
            <button style={{position:"relative",backgroundColor:"#fb641b",fontSize:14,color:"#fff",borderRadius:3,width:200,padding:"13px 40px",border:"1px solid #e0e0e0",cursor:"pointer",marginLeft:780,alignItems:"center",justifyContent:"center",}}>PLACE ORDER</button>
            <hr></hr>
            
        </div>
        
        <div style={{background:"#fff",width:"20%",height:100,marginTop:40}}>
          <div style={{margin:15}}>
               <span style={{ fontSize: 20, color: "#000",}}>Total Payment:</span>
               <span  style={{ fontSize: 20, color: "#000"}}>₹ {getGrandTotalPrice()}</span>
               <button style={{position:"relative",backgroundColor:"#fb641b",fontSize:14,color:"#fff",borderRadius:3,width:200,padding:"10px 40px",border:"1px solid #e0e0e0",cursor:"pointer",alignItems:"center",justifyContent:"center",marginTop:5}}>Proceed to Buy</button>
          </div>
        </div>
        
        </div>
      </div>
    )
}
export default CartDetails;