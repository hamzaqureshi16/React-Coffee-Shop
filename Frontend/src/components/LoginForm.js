import React from 'react';
import {Dark} from '../assets/js/DarkMode';
import '../assets/css/LoginStyle.css';
import coffeeimg from '../assets/img/CoffeeLogo.png'; 
import {login} from '../Service/Api'; 



const CheckUser = (e) =>{
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const data = {email,password};
  console.log('data in checkuser'+data); 
  login(data).then((res) => {
    if(res.data === 'found'){
      window.location.href = '/home';
     alert('found'); 
   
     }
     else{
        alert('not found');
     }
     
  })
}
 
export default function LoginForm() { 



  return (
    <div className='loginpage'>
        <div id="topnav">
          <input type="button" className="darkmode" style={{height:'50px'}} onClick={(e) => Dark(e.target)} value='Dark Mode' id="darkmode"></input>
          <img src={coffeeimg} alt="" />
        </div>
        <h1>Login</h1>
        <div  method="post" className="text-dark form" id="loginform">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <br />
          <input type="submit" onClick={(e)=>CheckUser(e)} defaultValue="Login" id="Login" />
        </div>
      </div>
  )
}
