import React, { useState } from "react";
import './signup.css'
//import Signin from "../login/signin";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setRegisterdata } from "../../redux/action";
//import { UseSelector } from "react-redux";



const Signup = () => {
    
     
    const nav = useNavigate();
    const dispatch = useDispatch();

    const[firstname,setfirstname] = useState("")
    const[lastname,setlastname] = useState("")
    const[phone,setphone] = useState("")
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")

    const[errors,seterrors]=useState("")

    function handlevalidation(e){
        e.preventDefault();
        const registerData = {firstname,lastname,phone,email,password}
        const errors = validation();
        if(Object.keys(errors).length === 0)
        {
            dispatch(setRegisterdata(registerData))
            console.log('data',registerData)
            nav("/signin");
        }
        else
        {
            seterrors(validation())
            console.log('errors'); 
        }
        
    }
  


    function validation(){
        
        const errors = {}

        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if(firstname === ""){
            errors.firstname = "first name is required";
        }
        else if(firstname.match(/[0-9]/)){
            errors.firstname = "please enter valid first name";
        }
        
        if(lastname === ""){
            errors.lastname = "last name is required";
        }
        else if(lastname.match(/[0-9]/)){
            errors.lastname = "please enter valid last name";
        }

        if(phone === ""){
            errors.phone = "phone number is required";
        }
        else if(phone.match(/^[a-zA-Z]*$/) || phone.length>10 || phone.length<10){
            errors.phone = "please enter valid phone number"
        }

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


    // function validation(){
    //     if(!firstname || firstname.match(/[0-9]/)){
    //         alert("please enter valid first name")
    //         return false;
    //     }
    //      if(!lastname || lastname.match(/[0-9]/)){
    //         alert("please enter valid last  name")
    //         return false;
    //     }
    //      if(!phone || phone.match(/^[a-zA-Z]*$/) || phone.length>10 || phone.length<10){
    //        alert("please enter valid phone number")
    //        return false;
    //     }
    //      if(email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
    //         return true;
    //     }
    //     else{
    //         alert("please enter valid email")
    //         return false;
    //     }
    //     }
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <section className="regmain">
            <center><header style={{color:"red",fontWeight:700,fontSize:20}}>REGISTRATION</header></center>
            <form style={{marginTop:20}}>
                <div class="input-box">
                <label className="labell">First Name:</label>
                <input className="inputtext" type="text" placeholder="Enter first name"  onChange={(e)=>setfirstname(e.target.value)} />
                {errors.firstname && <p className="paragraph">{errors.firstname}</p>}
                 </div>

                <div class="input-box">
                <label className="labell">Last Name:</label>
                <input className="inputtext" type="text" placeholder="Enter last name" onChange={(e)=>setlastname(e.target.value)} />
                {errors.lastname && <p className="paragraph">{errors.lastname}</p>}
                </div>

                <div class="input-box">
                <label className="labell">Phone Number:</label>
                <input className="inputtext" type="text" placeholder="Enter phone number" onChange={(e)=>setphone(e.target.value)} />
                {errors.phone && <p className="paragraph">{errors.phone}</p>}
                </div>

                <div class="input-box">
                <label className="labell">Email:</label>
                <input className="inputtext" type="text" placeholder="Enter Email address" onChange={(e)=>setemail(e.target.value)} />
                {errors.email && <p className="paragraph">{errors.email}</p>}
                </div>

                <div class="input-box">
                <label className="labell">Password:</label>
                <input className="inputtext" type="text" placeholder="Enter password" onChange={(e)=>setpassword(e.target.value)} />
                {errors.password && <p className="paragraph">{errors.password}</p>}
                </div>

                <button onClick={handlevalidation} className="regbtn">sign up</button>
                <center><span>Already have an account ?</span><a style={{color:"red",textDecoration:"none",fontWeight:500}} href="./signin"> login</a></center>

             </form>
        </section>
        </div>
      


             {/* <center>
           <div style={{height:800,width:400,backgroundColor:"white",marginTop:50,borderRadius:12}}>
            <b> <span style={{display: "inline-block",marginTop:30,color:"red",fontSize:25}}>REGISTRATION</span> </b>
              span tag me margintop(vertical) nahi chalta to uske liye hum display ko inline block kiya hai.span tag inline element hai isliye horizontal(-)me hi chalta hai  
           <form onSubmit={handlevalidation} required>
            <div className="container">
                <div style={{}}> 
                <label style={{color:"red",marginRight:300,marginTop:40,display:"inline-block",marginLeft:15,width:100}} for="uname"><b>First Name:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)} ></input>{errors.firstname && <p style={{color:"red",marginRight:210,marginTop:1,width:150,height:20}}>{errors.firstname}</p>}
                 </div> 
                 <div style={{height:110}}> 
                <label style={{color:"red",marginRight:300,display:"inline-block",marginLeft:13,width:100}} for="uname"><b>Last Name:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Last name" onChange={(e)=>setlastname(e.target.value)} ></input>{errors.lastname && <p style={{color:"red",marginRight:210,marginTop:1}}>{errors.lastname}</p>}
                 </div> 
                 <div style={{height:110}}> 
                <label style={{color:"red",marginRight:300,display:"inline-block",marginLeft:4,width:150}} for="uname"><b>Phone Number:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Phone number" onChange={(e)=>setphone(e.target.value)} ></input>{errors.phone && <p style={{color:"red",marginRight:178,marginTop:1}}>{errors.phone}</p>}
                 </div> 
                 <div style={{height:110}}> 
                <label style={{color:"red",marginRight:300,display:"inline-block",marginLeft:1,width:150}} for="uname"><b>Email Address:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Email address" onChange={(e)=>setemail(e.target.value)} ></input>{errors.email && <p style={{color:"red",marginRight:240,marginTop:1}}>{errors.email}</p>}
                 </div> 
                 <div style={{height:110}}> 
                <label style={{color:"red",marginRight:300,display:"inline-block",marginLeft:8,width:100}} for="uname"><b>Password:</b></label>
                <input style={{width:350,border:"1px solid #ccc",display:"inline-block",padding:"10px",margin:10,borderRadius:5,}} type="text" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} r></input>{errors.password && <p style={{color:"red",marginRight:220,marginTop:1}}>{errors.password}</p>}
                 </div> 

                 <button style={{marginLeft:250,border:"none",background:"none",color:"red",fontStyle:"unset",margin:5}}>Forgot Password?</button> 
               <button  style={{backgroundColor:"red",color:"white",width:368,display:"inline-block",padding:10,margin:10,borderRadius:5,border:"none",}}><b style={{fontFamily:"-moz-initial",fontSize:16}}>Sign up</b></button>
                <button style={{color:"black",width:368,display:"inline-block",padding:10,margin:10,borderRadius:5,border:"none",}}><b style={{fontFamily:"-moz-initial",fontSize:16}}>Sign in via Google</b></button> 
               <label style={{color:"red",fontFamily:"-moz-initial"}}><b>Already have an account?<a style={{color:"red",textDecoration:"none"}} href="./signin"> login</a></b></label>
            </div>
           </form>
            </div>
           </center>    */}
        </> 
    )
}
export default Signup;
