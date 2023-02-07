import React from 'react'
import coffeeimg from '../assets/img/CoffeeLogo.png' 

var CheckUser = () =>{
   console.log('login');
}
 
export default function LoginForm() {
  return (
    <div>
        <div id="topnav">
          <button className="darkmode" onclick="Dark(this)" id="darkmode">Dark Mode</button>
          <img src={coffeeimg} alt="" />
        </div>
        <h1>Login</h1>
        <form  method="post" className="form" id="loginform">
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
