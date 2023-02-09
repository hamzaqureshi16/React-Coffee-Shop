import React from 'react';
import bg2 from '../assets/img/Coffee-Background2.jpg';
import bg3 from '../assets/img/Coffee-Background3.jpg';
import '../assets/css/FrontPage.css';


export default function Aboutus() {
  return (
    <div className='text-light'>
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5"><img className="rounded-circle img-fluid" src={bg2} alt=''/></div>
              </div>
              <div className="col-lg-6 order-lg-1" id="aboutus">
                <div className="p-5">
                  <h2 className="display-4 section-title">Our journey
                    ....</h2>
                  <p>We started our journey of a <b><u><span className="main">Cawfee Tawk</span> </u></b> in 2015.When we thought to provide an original coffee
                    experience for the customers of pakistan.We opened our first branch in abbottabad and we recieved overwelhming support from our loyal customers.We ought to provide a friendly, comfortable atmosphere where the customer can receive quality food, service and entertainment.s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1">
                <div className="p-5"><img className="rounded-circle img-fluid" src={bg3} alt=''/></div>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <h2 className="display-4">We remember....</h2>
                  <p>We remember the warm aroma of freshly brewed coffee, the cozy atmosphere of our shop, and the smiling faces of our dedicated baristas. We remember the laughter and conversations shared over a steaming cup, and the feeling of community that our shop has always brought. We will continue to strive for excellence in every cup and every customer experience, making our shop the perfect place to gather and make memories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
