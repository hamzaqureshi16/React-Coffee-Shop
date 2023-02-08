import React from 'react';
import '../assets/css/FrontPage.css';


export default function TableReservationForm() {
  return (
    <div>
       <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className='text-light '>Reservation</h2>
            <p className='text-light'>Book a Table</p>
          </div>
          <form method="post" role="form" className="php-email-form" id="tableform">
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="date" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="time" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" min={1} max={20} data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" id="message" defaultValue={""} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" id="submit" value="submit">Book a Table</button></div>
          </form>
        </div>
      </section>
    </div>
  )
}
