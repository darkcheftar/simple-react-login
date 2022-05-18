import './Login.css';
import apple from "../../images/apple.webp"
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Login({setuser}) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function usernameOnChange(e) {
    setUsername(e.target.value);
  }
  function passwordOnChange(e) {
    setPassword(e.target.value)
  }
  function validate(){
    //business logic
    //temporary cred guest guest
    console.log(username,password)
    if(username==='guest'&&password==='guest'){
      setuser(username);
      return true;
    }
    return false;
  }
  function formOnSubmit(e){
    e.preventDefault();
  if(validate()){
    navigate('/details');
  }
  }
  return (
    <section className="login-section">
      <form action="post" className='login-form'>
        <img src={apple} alt="logo" height={100} className='logo' />
        <hr />
        <div>Enter Details to Login</div>
        <div>
          <label htmlFor="username">Username :</label>
          <input 
          type="text" 
          value={username}
          onChange={usernameOnChange} 
          name='username' />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input 
          type="password" 
          value={password} 
          onChange={passwordOnChange}
          name='password' />
        </div>
        <button type='submit'
         onClick={formOnSubmit}
        >Login now</button>
      </form>
    </section>
  )
}

export default Login