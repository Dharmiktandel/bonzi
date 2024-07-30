 import React from "react";
 import { useLocation} from 'react-router-dom'
import Replacement from "../../components/Replacement";
 // import { addToCart } from "../../redux/action";
 import {  useDispatch } from "react-redux";
//import { useParams } from 'react-router-dom';
// import user from '../../assets/user.png'
import { useNavigate } from "react-router";
import { addToCart } from "../../redux/action";


 const Product = () => { 

  const nav = useNavigate();
  
   const location = useLocation();
   // Extract the item data from location state
   const { item } = location.state;
     console.log(item);

   

const dispatch = useDispatch();

      const passData = (item) => {
      dispatch(addToCart(item))
      nav('/cartDetails')
}



     return(

      <div style={{background:"white",height:720,marginTop:40,width:"83%",margin:25,marginLeft:120,borderRadius:5,display:"flex",flexDirection:"row"}}>
      <div style={{width:"55%"}}>
           <div style={{padding:40,margin:"30px ",border:"1px groove",borderRadius:5,}}>
            <div style={{border:"1px groove",padding:30,borderRadius:5,background:""}}>
            <center><img style={{ margin:"5px",height:220, borderWidth: 1, borderColor: "#000",}} src={item.thumbnail} alt="lll"/> </center>
            </div>
            </div>  
            <div style={{display:"flex",flexDirection:"row",marginLeft:30,border:"groove",}}>
            {item.images.map((image,index) => (
             <div key={index} style={{ height: 70, width:70, borderWidth: 0.2, marginTop:15,marginLeft:40}}>
             <img style={{height: 45, width:45}} src={image} alt="q"/>
             </div>
           )
           )}
            </div>   
            <div style={{margin:30,marginTop:50,height:140}}>
             <center><button onClick={()=>passData(item)}  style={{height: 50, width: 300, borderRadius: 10,alignItems: "center",justifyContent: "center",backgroundColor: "#ff9f00"}}>Add to cart</button></center>
           </div>
       </div>
           
         <div style={{display:"flex",flexDirection:"row",}}>
           <div style={{marginLeft:30,marginTop:55}}>
              <span style={{color: "#000", fontSize: 18, fontWeight: '500',}}>CREATIVE PROJECTION ELECTRONICS CLOCK LED DIGITAL <br></br> {item.description}.</span><br></br>
              <span style={{ color: "grey", fontSize: 15, marginTop: 5 }}>STORE : INFINITY WORKS</span>
              <div style={{flexDirection: "row", justifyContent: "space-between"}}>
               <div style={{ flexDirection: "row", justifyContent: "space-between", width: "53%", alignItems: "center" }}>
                 <span style={{color: "#000", fontWeight: '700', fontSize: 15}}>{item.price}</span>&nbsp;&nbsp;
                 <span style={{color: "grey", fontSize: 15,fontWeight: '600'}}>Save upto 67%</span>
               </div>
               <span  style={{ color: "grey", fontSize: 15, textDecorationLine: "underline", textDecorationColor: "red" }}>Get Coupon</span>
               <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
               <div>
                 <div>
                   <span style={{ color: "grey", fontSize: 15 }}>Price:</span>&nbsp;
                   <span style={{ color: "#000", fontSize: 14, fontWeight: '500' }}>{item.price}</span>
                   <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Exclusive of all taxes)</span>
                 </div>
                 <div>
                   <span style={{ color: "#000", fontSize: 15, fontWeight: '600' }}>{item.price}</span>
                   <span  style={{ color: "grey", fontSize: 14, fontWeight: '500' }}>/Piece</span>
                   <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Inclusive of all taxes)</span>
                 </div>
              </div>
              </div>
              <div>
                <Replacement name="Replacement" days="7 days"/>
              </div>
            </div>


            </div>
        </div>

      </div>

    // <div>
    //   <img style={{ height: 320, width: "78%", borderWidth: 1, borderColor: "#000"}} src={item.thumbnail} alt="lll"/>
    // </div>
        
        // <div>
        //  <div style={{height:350,width:100,borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:"#fff",marginTop:20}}>
        // <img src={item.thumbnail} alt="kk"/>
        // </div> 
        // <div>
        //   {item.images.map((image,index) => (
        //     <div key={index} style={{ height: 60, width: 60, borderWidth: 0.2, borderColor: "grey", alignItems: "center", justifyContent: "center",marginHorizontal: 5, backgroundColor: "#fff", marginTop: 10}}>
        //     <img style={{height: 45, width: 45}} src={image} alt="q"/>
        //     </div>
        //   )
        //   )}
        // </div>
        //  <div style={{backgroundColor: "#fff", width: "100%", height: "100%"}} >
        //   <div>
        //     <span style={{color: "#000", fontSize: 15, fontWeight: '500', marginTop:15}}>Creative Projection Electronics Clock LED Digital {"\n"} {item.description}</span>
        //     <span style={{ color: "grey", fontSize: 11, marginTop: 5 }}>STORE:INFINITY WORKS</span>
        //     <div style={{flexDirection: "row", justifyContent: "space-between"}}>
        //       <div style={{ flexDirection: "row", justifyContent: "space-between", width: "53%", alignItems: "center" }}>
        //         <span style={{color: "#000", fontWeight: '500', fontSize: 14}}>{item.price}</span>
        //         <span style={{color: "grey", fontSize: 12}}>Save upto 67%</span>
        //       </div>
        //       <span  style={{ color: "grey", fontSize: 13, textDecorationLine: "underline", textDecorationColor: "green" }}>Get Coupon</span>
        //     </div>
        //     <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
        //       <div>
        //         <div>
        //           <span style={{ color: "grey", fontSize: 15 }}>Price:</span>
        //           <span style={{ color: "#000", fontSize: 14, fontWeight: '500' }}>{item.price}</span>
        //           <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Exclusive of all taxes)</span>
        //         </div>
        //         <div>
        //           <span style={{ color: "#000", fontSize: 15, fontWeight: '600' }}>{item.price}</span>
        //           <span  style={{ color: "grey", fontSize: 14, fontWeight: '500' }}>/Piece</span>
        //           <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Inclusive of all taxes)</span>
        //         </div>
        //      </div>
        //      <div  style={{flexDirection: "row", width: "19%", height: "70%",alignItems: "center",justifyContent: "space-between"}}>
        //       <img style={{ height: 23, width: 23 }} src="" alt="lll"/>
        //       <img style={{ height: 22, width: 20 }} src="" alt="kkk"/>
        //      </div>
        //     </div>
        //   </div>
        //   <div>
        //     <button   style={{height: 50, width: 360, borderRadius: 30,alignItems: "center",justifyContent: "center",backgroundColor: "red"}}>Add to cart</button>
        //   </div>
        // </div> 
        // </div>
     )

 }
 export default Product;