import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoTop from '../components/GoTop'
import WhatsAppWidget from '../components/WhatsAppWidget'
import DarkToggle from '../components/DarkToggle'

export default function About() {
  const countries = [
    { img: 'img1.png', name: 'USA' },
    { img: 'img2.png', name: 'UK' },
    { img: 'img3.png', name: 'New Zealand' },
    { img: 'img4.png', name: 'France' },
    { img: 'img5.png', name: 'Germany' },
    { img: 'img6.png', name: 'Italy' },
    { img: 'img7.png', name: 'Greece' },
    { img: 'img8.png', name: 'China' },
    { img: 'img9.png', name: 'Kuwait' },
    { img: 'img10.png', name: 'Argentina' },
    { img: 'img11.png', name: 'Sweden' },
    { img: 'img12.png', name: 'Thailand' },
  ]

  const teamMembers = [
    { img: 'team1.jpg', name: 'Michele Allen', role: 'Chairman' },
    { img: 'team2.jpg', name: 'James Tucker', role: 'Chief Executive Officer' },
    { img: 'team3.jpg', name: 'Doris Dickinson', role: 'Director' },
    { img: 'team4.jpg', name: 'William Pipes', role: 'Head of Compliance' },
  ]

  const investors = [
    { img: 'investors1.png' },
    { img: 'investors2.png' },
    { img: 'investors3.png' },
    { img: 'investors4.png' },
    { img: 'investors5.png' },
    { img: 'investors6.png' },
  ]

  return (
    <>
      <Header />

      {/* Start Page Banner Area */}
      <div className="ctp-page-banner-area jarallax" data-jarallax='{"speed": 0.3}'>
        <div className="container">
          <div className="ctp-page-banner-content">
            <h3>About us</h3>
            <ul className="list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Page Banner Area */}

      <div className="currency-transfer-provider-with-background-color">
        {/* Start About Area */}
        <div className="ctp-about-area ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="ctp-about-image"></div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="ctp-about-content">
                  <span>About us</span>
                  <h3>We help transfer money for a better world</h3>
                  <p>
                    Donec sollicitudin molestie malesuada. proin eget tortor risus. nulla quis lorem
                    ut libero malesuada feugiat. donec rutrum congue leo eget malesuada.
                  </p>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat. vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit
                    neque, ultrices posuere cubilia curae donec auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. pellentesque in ipsum id orci porta dapibus.
                  </p>
                  <h4>Our mission</h4>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat. vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. lorem ipsum
                    dolor sit amet, ultrices posuere cubilia curae donec consectetur adipiscing
                    elit. pellentesque in ipsum id orci porta dapibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Fun Facts Area */}
        <div className="ctp-funfacts-area">
          <div className="container">
            <div className="ctp-funfacts-inner-box pt-100 pb-75">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                  <div className="ctp-funfact-card">
                    <h3>
                      <span className="odometer" data-count="180">
                        00
                      </span>
                      K+
                    </h3>
                    <p>Happy Customers</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                  <div className="ctp-funfact-card">
                    <h3>
                      <span className="odometer" data-count="50">
                        00
                      </span>
                      +
                    </h3>
                    <p>Currencies Offered</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                  <div className="ctp-funfact-card">
                    <h3>
                      <span className="odometer" data-count="1">
                        00
                      </span>
                      M+
                    </h3>
                    <p>Customers Globally</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                  <div className="ctp-funfact-card">
                    <h3>
                      <span className="odometer" data-count="30">
                        00
                      </span>
                      K+
                    </h3>
                    <p>5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Fun Facts Area */}

        {/* Start Choose Area */}
        <div className="ctp-choose-area ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="ctp-choose-content without-padding">
                  <h3>Why Choose ajeer</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. nulla porttitor accumsan tincidunt. lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <div className="choose-inner-card">
                    <h4>
                      <div className="icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Bank beating rates
                    </h4>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                      cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper
                      sit amet ligula. donec rutrum congue leo eget malesuada.
                    </p>
                  </div>
                  <div className="choose-inner-card">
                    <h4>
                      <div className="icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      We&apos;re Fast
                    </h4>
                    <p>
                      Nulla porttitor accumsan tincidunt. quisque velit nisi, pretium ut lacinia
                      in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi sed porttitor lectus nibh.
                    </p>
                  </div>
                  <div className="choose-inner-card">
                    <h4>
                      <div className="icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Easy to use
                    </h4>
                    <p>
                      Cras ultricies ligula sed magna dictum porta. donec rutrum congue leo eget
                      malesuada. curabitur aliquet quam id dui posuere blandit. vivamus suscipit
                      tortor eget felis porttitor volutpat. donec sollicitudin molestie malesuada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="ctp-choose-image with-border-radius"></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Choose Area */}

        {/* Start Countries Area */}
        <div className="ctp-countries-area pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Popular Countries Our Customers Send Money</h2>
            </div>

            <div className="row justify-content-center">
              {countries.map((country, index) => (
                <div key={index} className="col-lg-2 col-sm-6 col-md-4">
                  <div className="ctp-countries-card">
                    <img
                      src={`/assets/img/currency-transfer-provider/countries/${country.img}`}
                      alt={country.name}
                    />
                    <span>{country.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Countries Area */}

        {/* Start Team Area */}
        <div className="ctp-team-area pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Executive Team</h2>
            </div>

            <div className="row justify-content-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="ctp-team-card">
                    <div className="team-image">
                      <img
                        src={`/assets/img/currency-transfer-provider/team/${member.img}`}
                        alt={member.name}
                      />
                    </div>
                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>

                      <div className="icon">
                        <Link href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Team Area */}

        {/* Start App Area */}
        <div className="ctp-app-area">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="ctp-app-content">
                  <span className="sub">Download App</span>
                  <h3>Let&apos;s get your free copy from apple and play store</h3>
                  <p>
                    Instant free download from store cloud based storage for your data backup just
                    log in with your mail account from play store and using whatever you want for
                    your business purpose.
                  </p>
                  <div className="btn-box">
                    <Link href="#" className="app-store-btn">
                      <i className="flaticon-apple"></i>
                      Download on
                      <span>App Store</span>
                    </Link>

                    <Link href="#" className="play-store-btn">
                      <i className="flaticon-play-store"></i>
                      Download on
                      <span>Google play</span>
                    </Link>
                  </div>
                  <div className="info">
                    <span>Over 10 million downloads worldwide</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="ctp-app-image">
                  <img src="/assets/img/currency-transfer-provider/app/app.png" alt="app" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End App Area */}

        {/* Start Investors Area */}
        <div className="ctp-investors-area pt-100 pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Investors</h2>
            </div>

            <div className="row justify-content-center">
              {investors.map((investor, index) => (
                <div key={index} className="col-lg-2 col-sm-6 col-md-4">
                  <div className="ctp-investors-card">
                    <Link href="#">
                      <img
                        src={`/assets/img/currency-transfer-provider/investors/${investor.img}`}
                        alt="investor"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Investors Area */}
      </div>

      <Footer />
      <GoTop />
      <WhatsAppWidget />
      <DarkToggle />
    </>
  )
}
