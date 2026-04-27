import { Link, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'
const Login = ({info,updateInfo}) => {

  const navigate = useNavigate()
 let [input,SetInput]=   useState({
  email:"",
  password:""
 })  
 function openHomePage (){
    if(info.email===input.email && info.password===input.password){
      alert("Login Successfully!")
      navigate('/home')
    }else if(!info.email){
      alert("Create An Account!")
    }
    else{
      alert("Try again!")
    }
  }
  const getDetail = (e) =>{
    let  {name,value}= e.target
    SetInput({...input,[name]:value})
  }

 async function Data(){
   try {
      console.log("DATA GOING TO BACKEND:", input);

      const res = await axios.post("http://localhost:4000/login", input, {
      });

      console.log("SERVER RESPONSE →", res.data);

    } catch (error) {
      console.log("ERROR:", error);
    }
 }

  return (
    <div id='login'>
      <div id='login-container'>
        <div id='left-login'>
        <img src='profile.png'/>
        <p>Login</p>
      </div>
      <div id='right-login'>
        <div id='detail'>
          <p>UserName</p>
          <input name='email' value={input.email} onChange={getDetail} type='email' placeholder='abc@gmail.com'/>
          <p>Password</p>
          <input name='password' value={input.password} onChange={getDetail} type='password' placeholder='Enter password' />
        </div>
        <div id='pass'>
          <div>
            <input type='checkBox'/>
            <p>Remember me</p>
          </div>
          <p id='for-pass'>Forget Password?</p>
        </div>
        <button onClick={openHomePage}>Login</button>
        <p>
          <Link id='link' to={'/signup'} >Signup</Link>
          or sign in with
        </p>
        <div id='logo'>
          <img src='facebook.png' />
          <img src='google.png' />
          <img src='twitter.png' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
