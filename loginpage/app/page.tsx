import React from 'react';
import './login.css';


const Login = () => {
  return (
    <>
    <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page version 1.0</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@400;700&family=Rubik:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
    <div>
    <div className ="container">
      <div className ="content"></div>
        <div className ="loger-box">
            <div className="form-box login">
                <form action="#">
                     <h2 > LOGIN </h2>
                     <div className="input-box" >
                        <span className="icon" ><i className='bx bx-envelope' style={{ color: '#000000' }}></i></span>
                        <input className="inputCur" type="email"  name="email"  placeholder="Email" required/>
                        
                    </div>
                    <div className="input-box" >
                        <span className="icon"  ><i className='bx bx-lock-alt' style={{ color: '#000000' }} ></i></span>
                        <input className="inputCur" type="password" name="password"  placeholder="Password" required/>
                       
                      </div>
                     
                     <button type="submit" className="btn"> LOG IN</button>
                     <div className="register">
                        <p > you don’t have an account? <a href="#" className="register_link"> Sing up</a></p>
                     </div>

                </form> 
            </div>
        </div>

    </div>


</div>
</>
  );
};

export default Login;