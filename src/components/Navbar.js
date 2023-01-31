import React from 'react'
import logo from '../assets/img/new logo.png';
import carticon from '../assets/img/cart.svg'

export default function Navbar() {
  return (
    <div className='App header '>
        <div className='Logo'>
        <img src={logo} className='' alt="" />
        </div>
        
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Home</a>
            </div>
        </nav>
    </div>
                
  )
}
