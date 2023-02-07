import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/new logo.png';
import carticon from '../assets/img/cart.svg'
 


export default function Navbar() {
  return (
   
    <div>
      
  <nav className="navbar navbar-expand-lg bg-transparent" style={{minHeight:'8vh'}}>
  <div className="container-fluid ">
  <img className='mb-2 App-logo' src={logo} width='50px' height='50px' alt="" />
    <h1 className="navbar-brand bg-dark rounded text-light p-2" >  
      Cawfee Tawk</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <Link to='/home' className="nav-link active text-light fs-4" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link text-light fs-4">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-light fs-4">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/reviews" className="nav-link text-light fs-4">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link text-light fs-4">Order Here</Link>
        </li>
        <li className="nav-item">
          <Link to="/reservation" className="nav-link text-light fs-4">Table Reservation</Link>
                 
         </li> 
      </ul>


      <div>
        <Link to='/login'><button>login</button></Link>
        <input type="button" value="Login" className="btn btn-success ml-auto rounded" />
        <input type="button" value="Sign Up" className='btn btn-success rounded ' style={{marginLeft:"5px"}} />
        <img src={carticon} width='30px' height='30px' alt="" style={{marginLeft:'10px'}} />
      </div>
    </div>
  </div>
</nav>
    </div>
     
    );
                
  
}
