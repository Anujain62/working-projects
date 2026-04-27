import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = ({info,updateInfo}) => {

  let userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  let [input,SetInput] = useState(userData)
  const navigate = useNavigate()
  const submitData = () =>{
    if(info.email==input.email){
      alert("User Already Exist!")
    }
    else if(input.email && input.password){
      updateInfo(input)
      alert("Account created Successfully!")
      navigate('/home')
    }else{
      alert("Something went wrong!!")
    }
  }

  const getDetail = (e) =>{
    let  {name,value}= e.target
    SetInput({...input,[name]:value})
  }

  return (
    <div id='signup'>
      <div id='signup-container'>
        <div id='left-signup'>
          <div id='top' className='circle'>
            <div className='one orbit'></div>
            <div className='two orbit'></div>
            <div className='three orbit'></div>
            <div className='four orbit'></div>
          </div>
         <p>Imagination in every pixel with Sassix.</p>
          <div id='bottom' className='circle'>
            <div className='one orbit'></div>
            <div className='two orbit'></div>
            <div className='three orbit'></div>
            <div className='four orbit'></div>
          </div>
        </div>
       <div id='right-signup'>
        <legend>First Name : 
         <input name='firstName' value={input.firstName} onChange={getDetail} type='text'/>
        </legend>
        <legend>Last Name : 
         <input name='lastName' value={input.lastName} onChange={getDetail} type='text'/>
        </legend>
        <legend>Email : 
          <input name='email' value={input.email} onChange={getDetail} type='email'/>
        </legend>
        <legend>Password :  
          <input name='password' value={input.password} onChange={getDetail} type='password'/>
        </legend>
        <div id='box'>
          <input type='checkBox'/>
          <p>I've read and agree to <b>Terms & Conditions</b></p>
        </div>
        <button onClick={submitData}>Create Account</button>
        <p>Already have an account? 
          <Link to={'/'} id='link'>Sign In</Link>
        </p>
        <hr/>
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

export default Signup
