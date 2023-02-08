import React from 'react';
import {Dark} from '../assets/js/DarkMode';
import '../assets/css/LoginStyle.css';
import coffeeimg from '../assets/img/CoffeeLogo.png'; 


var CheckUser = () =>{
   console.log('login');
}
 
export default function LoginForm() { 



  return (
    <div className='loginpage'>
        <div id="topnav">
          <input type="button" className="darkmode" style={{height:'50px'}} onClick={(e) => Dark(e.target)} value='Dark Mode' id="darkmode"></input>
          <img src={coffeeimg} alt="" />
        </div>
        <h1>Login</h1>
        <form  method="post" className="text-dark form" id="loginform">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <br />
          <input type="submit" onSubmit={CheckUser()} defaultValue="Login" id="Login" />
        </form>
      </div>
  )
}
