import React from 'react';
import cappuchino from '../assets/img/flatwhite-coffee.jpg';
const menuitemstyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    fontFamily: 'cursive',
    textTransform: 'uppercase',
    letterSpacing: '0.2rem', 
    border: 'none',
    borderRadius: '0.5rem',

}
const menuimgstyle = {
    height: '5rem',
    width: '6rem',
    borderRadius: '0.5rem',
    border: '1px solid black',
    boxShadow: '2px 2px 4px #000000'
}

export default function Menu() {
  return (
    <div>
      <div id="menu" className="menu ">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-starters">Coffee's</li>
                <li data-filter=".filter-salads">Beans</li>
                <li data-filter=".filter-specialty">Deserts</li>
              </ul>
            </div>
          </div>
        </div></div>
        <div style={menuitemstyle}>
        <div className="container" data-aos="fade-up">
            <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-6 menu-item filter-starters">
                    <img style={menuimgstyle} src={cappuchino} className="menu-img" alt="" />
                    <div className="menu-content">
                        <a href="/">Cappuccino</a><span>$3.99</span>
                        </div>
                    <div className="menu-ingredients">
                        A small amount of espresso with a lot of steamed milk and a light layer of foam.
                        </div>
                        </div>
                        </div>
                        </div>
        </div>
        
        
        
    </div>
  )
}
