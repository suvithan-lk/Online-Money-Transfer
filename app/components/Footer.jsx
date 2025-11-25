import Link from 'next/link'

export default function Footer() {
  return (
    <div className="ctp-footer-area pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="ctp-footer-widget">
              <div className="logo">
                <Link href="/"><img src="./logo.svg" alt="logo" /></Link>
              </div>
              <ul className="social-links">
                <span>Find us on social media</span>
                <li><Link href="#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                <li><Link href="#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="ctp-footer-widget">
              <h3>Company</h3>
              <ul className="links">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="#">Mobile apps</Link></li>
                <li><Link href="#">Reviews</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="ctp-footer-widget">
              <h3>Support</h3>
              <ul className="links">
                <li><Link href="#">Terms and conditions</Link></li>
                <li><Link href="#">Privacy policy</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="ctp-footer-widget">
              <h3>Need help?</h3>
              <ul className="info">
                <li><span>Location: </span> 27 Division St, New York, NY 10002, USA</li>
                <li><span>Email: </span><Link href="mailto:info@ajeer.com">info@ajeer.com</Link></li>
                <li><span>Phone: </span><Link href="tel:321984754">+ (321) 984 754</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <p>© <span>Ajeer</span> is proudly created by <Link href="#" target="_blank">Suvithan</Link></p>
        </div>
      </div>
    </div>
  )
}

