import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoTop from '../components/GoTop'
import WhatsAppWidget from '../components/WhatsAppWidget'
import DarkToggle from '../components/DarkToggle'

export default function Contact() {
  return (
    <>
      <Header />

      {/* Start Page Banner Area */}
      <div className="ctp-page-banner-area" data-jarallax='{"speed": 0.3}'>
        <div className="container">
          <div className="ctp-page-banner-content">
            <h3>Contact Us</h3>
            <ul className="list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Page Banner Area */}

      <div className="currency-transfer-provider-with-background-color">
        {/* Start Contact Area */}
        <div className="ctp-contact-area ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="ctp-contact-form">
                  <h3>Get In Touch With Us</h3>

                  <form id="contactForm">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Sergio Laughlin"
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                      <label>Surname</label>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        className="form-control"
                        required
                        data-error="Please enter your surname"
                        placeholder="George"
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="luvion@gmail.com"
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                      <label>Telephone</label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="+ (321) 984 754"
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="6"
                        required
                        data-error="Write your message"
                        placeholder="Write message here"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Send Us Your Enquiry
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="ctp-contact-information">
                  <div className="information-box">
                    <h3>Our Contact Details</h3>

                    <ul className="contact-info">
                      <li className="address">
                        <span className="sub">Address:</span> 27 Division St, New York, NY 10002,
                        USA
                      </li>
                      <li className="email">
                        <span className="sub">Email:</span>
                        <div className="info">
                          <span>Personal</span>
                          <Link href="mailto:info@ajeer.com">info@ajeer.com</Link>
                        </div>
                        <div className="info">
                          <span>Business</span>
                          <Link href="mailto:business@ajeer.com">business@ajeer.com</Link>
                        </div>
                      </li>
                      <li className="phone">
                        <span className="sub">Phone:</span>
                        <div className="info">
                          <span>Personal</span>
                          <Link href="tel:321984754">+ (321) 984 754</Link>
                        </div>
                        <div className="info">
                          <span>Business</span>
                          <Link href="tel:32154984">+ (321) 754 984</Link>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="information-box">
                    <h3>Office Opening Hours</h3>

                    <ul className="time-info">
                      <li className="d-flex align-items-center justify-content-between">
                        <span className="color">Monday - Thursday:</span>
                        <span>8:00am - 8:00pm</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span className="color">Friday:</span>
                        <span>10:00am - 6:00pm</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span className="color">Saturday:</span>
                        <span>10:00am - 2:00pm</span>
                      </li>
                    </ul>
                  </div>

                  <div className="information-map">
                    <iframe
                      className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183428676291!2d-73.9983046843594!3d40.71397834543098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1659370483233!5m2!1sen!2sbd"
                      title="Location Map"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Area */}
      </div>

      <Footer />
      <GoTop />
      <WhatsAppWidget />
      <DarkToggle />
    </>
  )
}
