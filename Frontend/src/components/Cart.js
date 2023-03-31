import React from 'react'
import '../assets/css/ShoppingCart.css';
import { useEffect } from 'react';
import {getCart,removefromCart,quantity} from '../Service/Api';
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0);

  useEffect(() =>{
   renderCart();
   CalculateTotal();
  
  },[]);

  const renderCart = async () =>{
    const result = await getCart();
    setCart(result.data); 
    CalculateTotal();
    
    
  }

  const CalculateTotal = () =>{
    let tot = 0;
    cart.map((item) => {
      tot = tot + (item.price * item.quantity);
    })
    console.log(tot);
    setTotal(tot);
  }
  

  const removeItem = async (id) => {  
    await removefromCart(id).then(res => console.log(res)); 
    renderCart(); 
  }

  const increaseQuantity = async (id) =>{
    await quantity(id,'increase').then( async (response)=> {
      console.log(response);}) 
      renderCart();
  }

  const decreaseQuantity = async (id) =>{
    await quantity(id,'decrease').then( async (response)=> {console.log(response) 
    renderCart();
  } 
    );
  }

  const VerifyCoupon = () =>{
    
  }

  const CheckOut = () => {

  }



  return (  <div className="shopping-cart text-dark">
  <div className="px-4 px-lg-0">
    <div className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            {/* Shopping cart table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody id="products">
                  {cart.map( (item) =>(
                    <tr key={item.id}>
                      <th scope="row" className="border-0">
                    <div className="p-2">
                      <img src={process.env.PUBLIC_URL+item.url} alt="" height={40} width={40} className="m-2 img-fluid rounded shadow-sm" />
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href='/' className="text-dark d-inline-block align-middle" id={item.id}>{item.name}</a></h5>
                      </div>
                    </div>
                    </th>
                    <td id={item.id}>PKR {item.price}</td>
                    <td id={item.id}>{item.quantity}</td>
                    <td><button className="rounded-pill border-1 border-danger" onClick={()=>decreaseQuantity(item.id)} >-</button><button className="fa fa-trash rounded-pill border-warning mx-2" onClick={() =>removeItem(item.id)} /><button className="rounded-pill border-1 border-success" onClick={()=>increaseQuantity(item.id)}>+</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* End */}
          </div>
        </div>
        <div className="row py-5 p-4 bg-white rounded shadow-sm">
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
            <div className="p-4">
              <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
              <div className="input-group mb-4 border rounded-pill p-2">
                <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" id="couponInput" />
                <div className="input-group-append border-0">
                  <button id="couponButton" type="button" className="btn btn-dark px-4 rounded-pill" onClick={()=>VerifyCoupon()}><i className="fa fa-gift mr-2" />Apply coupon</button>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
            <div className="p-4">
              <label className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</label>
              <textarea title="Instructions" cols={30} rows={2} className="form-control" id="instructions" defaultValue={""} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold tick" data-value={0} data-did-init="setupFlip">Order summary </div>
            <div className="p-4" data-repeat="true" aria-hidden="true">
              <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong>  
                    <strong>{total}</strong>
                    
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong id="shipping" >{cart.length}</strong></li>
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong id="tax" >{total*0.12}</strong></li>
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold" id="grandTotal" >{total}</h5>
                </li>
                <input type="radio" style={{width: '20px'}} name="toDeliver" defaultValue="delivery" id="toDeliver" defaultChecked />Delivery
                <input type="radio" name="toDeliver" style={{width: '20px'}} id="toDeliver" defaultValue="dinein" />Dine in
              </ul><button type="button" href="#" className="btn btn-dark rounded-pill py-2" onClick={()=>CheckOut()}>Procceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
