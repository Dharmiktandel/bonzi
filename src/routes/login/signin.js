 import React, { useState } from "react";
 import './signin.css'
 import {  useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router";
import { setSignin } from "../../redux/action";


 const Signin = () => {

    const navv = useNavigate();
    const dispatch = useDispatch();

    const signupdataa = useSelector((state)=> state.signuped.signupData)
    console.log('sffffffffffffffffffff',signupdataa)
  
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")

    const[errors,seterrors] = useState("")

    function handlevalidation(e){
        e.preventDefault();
        if(signupdataa && signupdataa.email === email && signupdataa.password === password)
        {
            dispatch(setSignin(email,password))
            console.log("data");
            navv("/")
        }
        else{
            seterrors(validation())
            console.log("error");
        }
    }

    



    function validation(){
        const errors = {}

        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if(email === ""){
            errors.email = "email is required";
         }
         else if(!email_pattern.test(email)){
             errors.email = "Email did not match"
         }
 
         if(password === ""){
             errors.password = "password is required"
         }
         else if(!password_pattern.test(password)){
             errors.password = "password did not match"
         }
         return errors;

        }




//  const[data,setdata] = useState(
//     {
//         email:"",
//         password:""
//     }
//  );
//  const onUpdateField = (e) => {
//    const nextFormState = {
//     ...data,
//     [e.target.name]:e.target.value,
//    };
//    setdata(nextFormState);
//  };
//  const onSubmitForm = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(data,null,2));
//  }; 


    return(
        
        <>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <section class="logmain">
            <center><header style={{color:"red",fontWeight:700,fontSize:20}}>LOGIN</header></center>
            <form style={{marginTop:20}} >
                <div classname="input-box">
                <label className="labbel">Email:</label>
                <input className="inputtextlogin" type="text" placeholder="Enter Email address" onChange={(e)=>setemail(e.target.value)} />
                {errors.email && <p className="par">{errors.email}</p>}
                </div>

                <div classname="input-box">
                <label className="labbel">Password:</label>
                <input className="inputtextlogin" type="text" placeholder="Enter password" onChange={(e)=>setpassword(e.target.value)}  />
                {errors.password && <p className="par">{errors.password}</p>}
                </div>
                <button className="forgetbtn">Forgot Password</button>
                <button onClick={handlevalidation} className="logbtn">sign in</button>
                <button className="viagoogle">sign in via Google</button>

                <center><label>Don't have an account?</label><a href="./signup" style={{color:"red",textDecoration:"none"}}>  Register</a></center>
                </form>
        </section>
        </div>



          {/* <center>
           <div style={{height:600,width:400,backgroundColor:"white",marginTop:50,borderRadius:12}}>
            <b> <span style={{display: "inline-block",marginTop:30,color:"red",fontSize:25}}>SIGN IN</span> </b>
              span tag me margintop(vertical) nahi chalta to uske liye hum display ko inline block kiya hai.span tag inline element hai isliye horizontal(-)me hi chalta hai  
           <form>
            <div className="container">
                 <div style={{height:170}}> 
                <label style={{color:"red",marginRight:300,marginTop:60,display:"inline-block",marginLeft:21,width:110}} for="uname"><b>Email Address:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Email Address" ></input>
                 </div> 
                 <div style={{height:120}}> 
                <label style={{color:"red",marginRight:300,display:"inline-block",marginLeft:21,}} for="uname"><b>PASSWORD:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Password" ></input>
                 </div> 
                <button style={{marginLeft:260,border:"none",background:"none",color:"red",fontStyle:"unset",margin:5}}>Forgot Password?</button>
               <button style={{backgroundColor:"red",color:"white",width:368,display:"inline-block",padding:10,margin:10,borderRadius:5,border:"none",}}><b style={{fontFamily:"-moz-initial",fontSize:16}}>Sign in</b></button>
               <button style={{color:"black",width:368,display:"inline-block",padding:10,margin:10,borderRadius:5,border:"none",}}><b style={{fontFamily:"-moz-initial",fontSize:16}}>Sign in via Google</b></button>
               <label style={{color:"red",fontFamily:"-moz-initial"}}><b>Don't have an account? <a style={{textDecoration:"none",color:"red"}} href="./signup">Register</a></b></label>
            </div>
           </form>
           
           
 </div>
           </center>     */}
        </>
    )

}

export default Signin;