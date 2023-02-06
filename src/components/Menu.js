import React, { useEffect } from "react";
import cappuchino from "../assets/img/flatwhite-coffee.jpg";

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

const BuyNow = () =>{};
const AddtoCart = () =>{};

export default function Menu() {
  useEffect(() => {}, []);
  const ProductCatalog = [
    {
      id: 1,
      name: "Flat White",
      price: "$4.50",
      ingredients: "Espresso, steamed milk",
      category: "starters",
    },
    {
      id: 2,
      name: "Latte",
      price: "$4.75",
      ingredients: "Espresso, steamed milk, foam",
      category: "salads",
    },
    {
      id: 3,
      name: "Mocha",
      price: "$5.00",
      ingredients: "Espresso, steamed milk, chocolate syrup, foam",
      category: "salads",
    },
  ];

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
    {ProductCatalog.map((item, index) => (
      <div className="col-lg-6 menu-item filter-starters" style={menuitemstyle}>
        <img
          src={cappuchino}
          className="rounded-circle"
          height="85px"
          width="85px"
          class="menu-img"
          alt=""
        />
        <div className="menu-content">
          <a href="/">{item.name}</a>
          <span>{item.price}</span>
        </div>
        <div className="menu-ingredients">{item.ingredients}</div>
        &nbsp; &nbsp;
        <button className="bg-success rounded" onClick={() => BuyNow(item.id)}>
          buy
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
