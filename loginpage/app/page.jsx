import React from 'react';
import './login.css';
import { RiMailFill,RiLock2Fill } from "react-icons/ri";
import { BiSolidLock } from "react-icons/bi";


const Login = () => {
  return (
    
    <div>
      <title>Login Page version 1.0</title>
      <div className ="container">
        
          <div className ="loger-box">
              <div className="form-box login">
                  <form action="#">
                      <h1 > LOGIN </h1>
                      <div className="input-box" >
                          
                          <input className="inputCur" type="email"  name="email"  placeholder="Email" required/>
                          <div  ><RiMailFill className="icon"/></div>
                      </div>
                      <div className="input-box" >
                          <div   ><BiSolidLock className="icon"/></div>
                          <input className="inputCur" type="password" name="password"  placeholder="Password" required/>
                        
                        </div>
                      
                      <button type="submit" className="btn"> LOG IN</button>
                      <div className="register">
                          <h4 > you don’t have an account? <a href="#" className="register_link"> Sing up</a></h4>
                      </div>

                  </form> 
              </div>
          </div>

      </div>


</div>

  );
};

export default Login;