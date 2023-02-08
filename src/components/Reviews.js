import React from 'react'
import reviewsbg from '../assets/img/review.jpg';
import star from '../assets/img/star-01.png';
import emptystar from '../assets/img/star_empty-01.png';  
import '../assets/css/FrontPage.css';

export default function Reviews() {
  return (
    <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)),url(${reviewsbg}) no-repeat center center fixed #000`, backgroundSize: 'cover'}} id="reviews">
        <div className="container" style={{paddingRight: '30px', paddingLeft: '30px', paddingTop: '35px', paddingBottom: '35px'}}>
          <h1 style={{color: 'rgb(255,255,255)', marginBottom: '5px', fontSize: '48px', fontWeight: 'bold', textAlign: 'center'}}>Reviews</h1>
          <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color: 'rgb(255,255,255)', marginBottom: '30px'}}>See what the hype is all about</p>
          <div className="row">
            <div className="col col-12 col-md-6" style={{marginBottom: '15px'}}>
              <div className="border rounded yelp_review bg-dark text-light border-2 p-3">
                <div className="yelp_basic">
                  <div className="yelp_first">
                    <h3>Trisha W. </h3>
                    <h4>Las Vegas, NV</h4>
                  </div>
                <div className="yelp_first">
                    <img className="yelp_star" src={star} alt='' />
                    <img className="yelp_star" src={star} alt=''/>
                    <img className="yelp_star" src={star} alt=''/>
                    <img className="yelp_star" src={star} alt=''/>
                    <img className="yelp_star" src={star} alt=''/>
                </div>
                </div>
                <div className="yelp_descript">
                  <p>We Yelped this on our way to San Francisco. 5 stars is for the food. Everything we ordered was made to order and very, very good! We had the fettuccine Alfredo, lasagna, spaghetti and meatballs, pepperoni pizza and garlic bread sticks.<br /></p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6" style={{marginBottom: '15px'}}>
              <div className="border rounded yelp_review bg-dark text-light border-2 p-3">
                <div className="yelp_basic">
                  <div className="yelp_first">
                    <h3>Amy N.</h3>
                    <h4>San Jose, CA</h4>
                  </div>
                <div className="yelp_first">
                    <img className="yelp_star" src={emptystar} alt='' />
                    <img className="yelp_star" src={emptystar} alt='' />
                    <img className="yelp_star" src={emptystar} alt='' />
                    <img className="yelp_star" src={emptystar} alt='' />
                    <img className="yelp_star" src={emptystar} alt='' />
                </div>
                </div>
                <div className="yelp_descript">
                  <p>Very pleasant, we went here for lunch today, party of 3. We had an order of cheesy bread which was crisp pizza crust with cheese and a some marinara for dipping, It was just the right amount of appetizer. &nbsp;<br /><br /></p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6" style={{marginBottom: '15px'}}>
              <div className="border rounded yelp_review bg-dark text-light border-2 p-3">
                <div className="yelp_basic">
                  <div className="yelp_first">
                    <h3>Jean B.</h3>
                    <h4>San Jose, CA</h4>
                  </div>
                  <div className="yelp_first"><img className="yelp_star" src={star} alt='' />
                  <img className="yelp_star" src={star} alt='' />
                  <img className="yelp_star" src={star} alt='' />
                  <img className="yelp_star" src={star} alt='' />
                  <img className="yelp_star" src={star} alt='' />
                  </div>
                </div>
                <div className="yelp_descript">
                  <p>Spouse &amp; I were hungry on the way home from a shopping excursion and decided to stop here for lunch on a whim. Glad we did! He had a chicken parm sandwich, I had a veggie calzone, and we split a mista salad. Delicious all around!<br /></p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6" style={{marginBottom: '15px'}}>
              <div className="border rounded yelp_review bg-dark text-light border-2 p-3">
                <div className="yelp_basic">
                  <div className="yelp_first">
                    <h3>Greg H.</h3>
                    <h4>Los Gatos, CA</h4>
                  </div>
                  <div className="yelp_first">
                    <img className="yelp_star" src={star} alt ='' />
                    <img className="yelp_star" src={star} alt ='' />
                    <img className="yelp_star" src={star} alt ='' />
                    <img className="yelp_star" src={star} alt ='' />
                    <img className="yelp_star" src={star} alt ='' />
                    </div>
                </div>
                <div className="yelp_descript">
                  <p>We had a wonderful meal with our family. Everyone enjoyed their meals. We will definitely be back.<br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
