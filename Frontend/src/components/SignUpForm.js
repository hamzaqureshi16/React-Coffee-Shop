import React from 'react';
import '../assets/css/LoginStyle.css';
import {Dark} from '../assets/js/DarkMode';
import { checkIfEmpty, verifyNumber, verifyAddres, verifyPassword, VerifyCard, verifyExpiry, verifyCVV } from '../assets/js/validations';
import { register } from '../Service/Api';

const RegisterUser = (e) => {
  if(checkIfEmpty()){
    console.log("not empty");
    console.log("num"+verifyNumber(document.getElementById('contact')));
    console.log("pass"+verifyPassword());
    console.log("add"+verifyAddres());
    console.log("card"+VerifyCard(document.getElementById('card')));
    console.log("exp"+verifyExpiry(document.getElementById('expiry')));
    console.log("cvv"+verifyCVV(document.getElementById('cvv')));
    
    if(verifyNumber(document.getElementById('contact')) && verifyPassword() && verifyAddres() && VerifyCard(document.getElementById('card')) && verifyExpiry(document.getElementById('expiry'))
    && verifyCVV(document.getElementById('cvv'))){
      console.log("all true");
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const email = document.getElementById('email').value;
      const branch = document.getElementById('branch').value;
      const contact = document.getElementById('contact').value;
      const address = document.getElementById('address').value;
      const card = document.getElementById('card').value;
      const expiry = document.getElementById('expiry').value;
      const cvv = document.getElementById('cvv').value;
      const data = {username,password,email,branch,contact,address,card,expiry,cvv};
      console.log(data);
      register(data).then((res) => {
        if(res.data === 'saved'){
          //clear all inputs
          document.getElementById('username').value = '';
          document.getElementById('password').value = '';
          document.getElementById('confirm_password').value = '';
          document.getElementById('email').value = '';
          document.getElementById('contact').value = '';
          document.getElementById('address').value = '';
          document.getElementById('card').value = '';

          document.getElementById('expiry').value = '';
          document.getElementById('cvv').value = '';
          alert('User Registered Successfully');

        }
        else{
          alert(res.data);
        }

      })
    }
}
}
export default function SignUpForm() {
  
  return (
    <div className='loginpage text-dark'>
    <div id="topnav">
      <input type='button' className="darkmode" style={{height:'50px'}} onClick={(e) =>Dark(e.target)} value='Dark Mode' id="darkmode"></input>
      <img src="./assets//img//CoffeeLogo.png" alt="" />
    </div>
    <h1>Sign Up</h1>
    <div  method="POST" className="form" id="loginform">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="minimum 8 characterss" name="password" id="password" />
      <label htmlFor="confirm_password">Confirm Password</label>
      <input type="password" name="confirm_password" id="confirm_password" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="branch">Branch</label>
      <select name="branch" id="branch">
        <option value="Abbottabad" selected>Abbottabad</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Sialkot">Sialkot</option>
        <option value="Rawalpindi">Rawalpindi</option>
      </select>
      <label htmlFor="address">Address</label>
      <input type="text" placeholder="minimum 10 characters" name="address" id="address" />
      <label htmlFor="contact">Contact</label>
      <input type="tel" name="contact" id="contact" />
      <label htmlFor="card">Card</label>
      <input type="text" placeholder="abcd-efgh-ikjl" name="card" id="card" maxLength={19} required />
      <label htmlFor="expiry">Expiry</label>
      <input type="date" name="expiry" id="expiry" required />
      <label htmlFor="cvv">CVV</label>
      <input type="number" min={10} placeholder="yyy" name="cvv" id="cvv" required />
      <input type="submit" defaultValue="Sign Up" id="submit" onClick={(e) => RegisterUser(e)} />
    </div>
  </div>
  )
}
