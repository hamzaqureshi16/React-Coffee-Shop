import React from 'react'  
import '../assets/css/FrontPage.css';


export default function Contactus() {
  return (
    <section>
        <div>
          <div className="container text-light">
            <h1>Contact for Franchising</h1>
            <hr />
            <form id="contactForm-1" method="get"><input className="form-control" type="hidden" name="Introduction" defaultValue="This email was sent from www.awebsite.com" /><input className="form-control" type="hidden" name="subject" defaultValue="Awebsite.com Contact Form" /><input className="form-control" type="hidden" name="to" defaultValue="email@awebsite.com" />
              <div className="row">
                <div className="col-md-6">
                  <div id="successfail-1" />
                </div>
              </div>
              <div className="row" id="contactus">
                <div className="col-12 col-md-6" id="message-1">
                  <h2 className="h4"><i className="fa fa-envelope" /> Contact Us<small><small className="required-input">&nbsp;(*required)</small></small></h2>
                  <div className="form-group mb-3"><label className="form-label" htmlFor="from-name">Name</label><span className="required-input">*</span>
                    <div className="input-group"><span className="input-group-text"><i className="fa fa-user-o" /></span><input className="form-control" type="text" id="from-name-1" name="name" required placeholder="Full Name" /></div>
                  </div>
                  <div className="form-group mb-3"><label className="form-label" htmlFor="from-email">Email</label><span className="required-input">*</span>
                    <div className="input-group"><span className="input-group-text"><i className="fa fa-envelope-o" /></span><input className="form-control" type="text" id="from-email-1" name="email" required placeholder="Email Address" /></div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                      <div className="form-group mb-3"><label className="form-label" htmlFor="from-phone">Phone</label><span className="required-input">*</span>
                        <div className="input-group"><span className="input-group-text"><i className="fa fa-phone" /></span><input className="form-control" type="text" id="from-phone-1" name="phone" required placeholder="Primary Phone" /></div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                      <div className="form-group mb-3"><label className="form-label" htmlFor="from-calltime">Best Time to Call</label>
                        <div className="input-group">
                          <div className="input-group-prepend "><span className="input-group-text "><i className="fa fa-clock-o" /></span></div><select className="form-select rounded bg-dark-text-light"  id="from-calltime-1" name="call time">
                            <optgroup label="Best Time to Call" className='bg-dark text-light'>
                              <option value="Morning" selected>Morning</option>
                              <option value="Afternoon">Afternoon</option>
                              <option value="Evening">Evening</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3"><label className="form-label" htmlFor="from-comments">Comments</label><textarea className="form-control" id="from-comments-1" name="comments" placeholder="Enter Comments" rows={5} defaultValue={""} /></div>
                  <div className="form-group mb-3">
                    <div className="row">
                      <div className="col"><button className="btn btn-primary d-block w-100" type="reset"><i className="fa fa-undo" /> Reset</button></div>
                      <div className="col"><button className="btn btn-primary d-block w-100" type="submit">Submit <i className="fa fa-chevron-circle-right" /></button></div>
                    </div>
                  </div>
                  <hr className="d-flex d-md-none" />
                </div>
                <div className="col-12 col-md-6">
                  <h2 className="h4"><i className="fa fa-location-arrow" /> Locate Us</h2>
                  <div className="row">
                    <div className="col-12">
                      <div className="static-map"> <iframe title='map' src="https://www.google.com/maps/d/embed?mid=1HwEZzDIn8wXD1-PqAk0hGh9PZ9IYdew&ehbc=2E312F" width={640} height={480} />
                      </div>
                    </div>
                    <hr  />
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <h2 className="h4"><i className="fa fa-user" /> Our Info</h2>
                      <div><span><strong>Name</strong></span></div>
                      <div><span>CawfeeTawk@CawfeeTawk.com</span></div>
                      <div><span>www.CawfeeTawk.com</span></div>
                      <hr className="d-sm-none d-md-block d-lg-none" />
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <h2 className="h4"><i className="fa fa-location-arrow" /> Our Address</h2>
                      <div><span><strong>Office Name</strong></span></div>
                      <div><span>Shop 55, Jadoon plaza phase 2</span></div>
                      <div><span>Abbottabad, Pakistan</span></div>
                      <div><abbr data-toggle="tooltip" data-placement="top" title="Office Phone: 555-867-5309">O:</abbr> 03335037773</div>
                      <hr className="d-sm-none" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal fade" role="dialog" tabIndex={-1} id="modal1">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Contact Information</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form id="contactForm-2"  method="get"><input className="form-control" type="hidden" name="Introduction" defaultValue="This email was sent from www.awebsite.com" /><input className="form-control" type="hidden" name="subject" defaultValue="Awebsite.com Contact Form" /><input className="form-control" type="hidden" name="to" defaultValue="email@awebsite.com" />
                    <div className="row">
                      <div className="col-md-6">
                        <div id="successfail-2" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6" id="message-2">
                        <h2 className="h4"><i className="fa fa-envelope" /> Contact Us<small><small className="required-input">&nbsp;(*required)</small></small></h2>
                        <div className="form-group mb-3"><label className="form-label" htmlFor="from-name">Name</label><span className="required-input">*</span>
                          <div className="input-group"><span className="input-group-text"><i className="fa fa-user-o" /></span><input className="form-control" type="text" id="from-name-2" name="name" required placeholder="Full Name" /></div>
                        </div>
                        <div className="form-group mb-3"><label className="form-label" htmlFor="from-email">Email</label><span className="required-input">*</span>
                          <div className="input-group"><span className="input-group-text"><i className="fa fa-envelope-o" /></span><input className="form-control" type="text" id="from-email-2" name="email" required placeholder="Email Address" /></div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                            <div className="form-group mb-3"><label className="form-label" htmlFor="from-phone">Phone</label><span className="required-input">*</span>
                              <div className="input-group"><span className="input-group-text"><i className="fa fa-phone" /></span><input className="form-control" type="text" id="from-phone-2" name="phone" required placeholder="Primary Phone" /></div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                            <div className="form-group mb-3"><label className="form-label" htmlFor="from-calltime">Best Time to Call</label>
                              <div className="input-group">
                                <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-clock-o" /></span></div><select className="form-select" id="from-calltime-2" name="call time">
                                  <optgroup label="Best Time to Call">
                                    <option value="Morning" selected>Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                  </optgroup>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3"><label className="form-label" htmlFor="from-comments">Comments</label><textarea className="form-control" id="from-comments-2" name="comments" placeholder="Enter Comments" rows={5} defaultValue={""} /></div>
                        <div className="form-group mb-3">
                          <div className="row">
                            <div className="col"><button className="btn btn-primary d-block w-100" type="reset"><i className="fa fa-undo" /> Reset</button></div>
                            <div className="col"><button className="btn btn-primary d-block w-100" type="submit">Submit <i className="fa fa-chevron-circle-right" /></button></div>
                          </div>
                        </div>
                        <hr className="d-flex d-md-none" />
                      </div>
                      <div className="col-12 col-md-6">
                        <h2 className="h4"><i className="fa fa-location-arrow" /> Locate Us</h2>
                        <div className="row">
                          <div className="col-12">
                            <iframe title='map' src="https://www.google.com/maps/d/embed?mid=1HwEZzDIn8wXD1-PqAk0hGh9PZ9IYdew&ehbc=2E312F" width={640} height={480} />
                          </div>
                          <div className="col-sm-6 col-md-12 col-lg-6">
                            <h2 className="h4"><i className="fa fa-user" /> Our Info</h2>
                            <div><span><strong>Name</strong></span></div>
                            <div><span>CawfeeTawk@CawfeeTawk.com</span></div>
                            <div><span>www.Cawfeetawk.com</span></div>
                            <hr className="d-sm-none d-md-block d-lg-none" />
                          </div>
                          <div className="col-sm-6 col-md-12 col-lg-6">
                            <h2 className="h4"><i className="fa fa-location-arrow" /> Our Address</h2>
                            <div><span><strong>Office Name</strong></span></div>
                            <div><span>Shop 55, Jadoon plaza phase 2</span></div>
                            <div><span>Abbottabad, Pakistan</span></div>
                            <div><abbr data-toggle="tooltip" data-placement="top" title="Office Phone: 555-867-5309">O:</abbr>03335037773</div>
                            <hr className="d-sm-none" />
                          </div>
                        </div>
                      </div>
                    </div></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
