import React, { useEffect } from "react";
import '../assets/css/FrontPage.css';
import { useState } from "react";
import  {getCatalog} from '../Service/Api'
import { SendtoCart } from "../Service/Api";
import { useNavigate } from "react-router-dom";


const menuitemstyle = {
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "white",
  textShadow: "2px 2px 4px #000000",
  fontFamily: "Times New Roman",
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  border: "none",
  borderRadius: "0.5rem",
}; 

export default function Menu() {
  const [ProductCatalog,setProductCatalog] = useState([]);
  const navigate = useNavigate();

  const BuyNow = async (id) =>{
    const item = {id:id};
   await SendtoCart(item);
    navigate('/cart');
  };
  const AddtoCart = async (id) =>{
    const item = {id:id};
    await SendtoCart(item);
  };
  
  useEffect(() => {
    getProducts()}, []);

  const getProducts = async () =>{
    const result = await getCatalog();
    setProductCatalog(result.data);
  }

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
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-starters">Coffee's</li>
                <li data-filter=".filter-salads">Beans</li>
                <li data-filter=".filter-specialty">Deserts</li>
              </ul>
            </div>
          </div>
          </div>
          <div className="container">
  <div className="row menu-container">
    {ProductCatalog.map((item) => (
      <div className="col-lg-6 menu-item filter-starters" style={menuitemstyle}>
        <img
          src={process.env.PUBLIC_URL+item.url}
          className="menu-img rounded-circle"
          height="85px"
          width="85px"
          alt=""
        />
        <div className="menu-content">
          <a href="/">{item.name}</a>
          <span>PKR {item.price}</span>
        </div>
        <div className="menu-ingredients">{item.ingredients}</div>
        &nbsp; &nbsp;
        <button className="bg-success rounded" onClick={() => BuyNow(item.id)}>
          Buy Now
        </button>
        <button className="bg-primary rounded" onClick={() => AddtoCart(item.id)}>
          Add to cart
        </button>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
