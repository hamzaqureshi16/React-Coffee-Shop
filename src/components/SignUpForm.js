import React from 'react';
import '../assets/css/LoginStyle.css';
import {Dark} from '../assets/js/DarkMode';

export default function SignUpForm() {
  return (
    <div className='loginpage text-dark'>
    <div id="topnav">
      <button className="darkmode" style={{height:'50px'}} onClick={(e) =>Dark(e.target)} value='Dark Mode' id="darkmode"></button>
      <img src="./assets//img//CoffeeLogo.png" alt="" />
    </div>
    <h1>Sign Up</h1>
    <form  method="POST" className="form" id="loginform">
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
      <input type="submit" defaultValue="Sign Up" id="submit" />
    </form>
  </div>
  )
}
