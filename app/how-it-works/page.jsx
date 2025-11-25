import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoTop from '../components/GoTop'
import WhatsAppWidget from '../components/WhatsAppWidget'
import DarkToggle from '../components/DarkToggle'

export default function HowItWorks() {
  const moneyTransferSteps = [
    {
      title: 'Create a free account',
      img: 'customer.png',
      number: '01',
      description:
        'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.',
    },
    {
      title: 'Send your funds',
      img: 'profits.png',
      number: '02',
      description:
        'Vivamus suscipit tortor eget felis porttitor volutpat. sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.',
    },
    {
      title: 'Track your transfer',
      img: 'data.png',
      number: '03',
      description:
        'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. vivamus suscipit tortor eget felis porttitor volutpat.',
    },
  ]

  const protectionFeatures = [
    {
      number: '01',
      title: 'Personal Service',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: '',
    },
    {
      number: '02',
      title: 'Efficient Transfers',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: 'color-two',
    },
  ]

  const reviews = [
    {
      rating: 15,
      title: 'Great exchange rates',
      description:
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum leo eget malesuada.',
      author: 'Alisha Ingram',
      role: '(CEO & Founder)',
    },
    {
      rating: 10,
      title: 'Safe and secure',
      description:
        'Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris blandit aliquet elit.',
      author: 'Sharon Bass',
      role: '(Manager)',
    },
    {
      rating: 16,
      title: 'Award-winning service',
      description:
        'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. praesent sapien massa, convallis a pellentesque nec, egestas non nisi. proin eget tortor risus.',
      author: 'Nancy Artiaga',
      role: '(Founder at ajeer)',
    },
  ]

  return (
    <>
      <Header />

      {/* Start Page Banner Area */}
      <div className="ctp-page-banner-area jarallax" data-jarallax='{"speed": 0.3}'>
        <div className="container">
          <div className="ctp-page-banner-content">
            <h3>How It Works</h3>
            <ul className="list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>How It Works</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Page Banner Area */}

      <div className="currency-transfer-provider-with-background-color">
        {/* Start Money Transfer Area */}
        <div className="ctp-money-transfer-area pt-100 pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>How Does Money Transfer Work?</h2>
            </div>

            <div className="row justify-content-center">
              {moneyTransferSteps.map((step, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="ctp-money-transfer-card">
                    <h3>{step.title}</h3>
                    <div className="image">
                      <img
                        src={`/assets/img/currency-transfer-provider/money-transfer/${step.img}`}
                        alt={step.title}
                      />
                      <div className="number">{step.number}</div>
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Money Transfer Area */}

        {/* Start Protec Area */}
        <div className="ctp-protec-area pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>We Don&apos;t Just Save Your Money</h2>
            </div>

            <div className="row justify-content-center">
              {protectionFeatures.map((feature, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="ctp-protec-card">
                    <div className="content">
                      <div className={`number ${feature.colorClass}`}>
                        <span>{feature.number}</span>
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Protec Area */}

        {/* Start Send Money Online Area */}
        <div className="ctp-send-money-online-area ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="ctp-send-money-online-content">
                  <h1>There are only a few steps you can take to send money online</h1>
                  <ul className="ctp-list">
                    <li>
                      <img
                        src="/assets/img/currency-transfer-provider/circle-check.svg"
                        alt="check"
                      />{' '}
                      Move money on-the-go
                    </li>
                    <li>
                      <img
                        src="/assets/img/currency-transfer-provider/circle-check.svg"
                        alt="check"
                      />{' '}
                      Currency wallets
                    </li>
                    <li>
                      <img
                        src="/assets/img/currency-transfer-provider/circle-check.svg"
                        alt="check"
                      />{' '}
                      Set rate alerts
                    </li>
                  </ul>
                  <div className="video-view">
                    <Link
                      href="https://www.youtube.com/watch?v=bk7McNUjWgw"
                      className="video-btn popup-youtube"
                    >
                      <i className="fas fa-play"></i>
                      <span>See how it works</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <form className="ctp-send-money-online-form">
                  <div className="form-header">
                    <span>Exchange Rate</span>
                    <h3>1 GBP = 1.29356 USD</h3>
                  </div>
                  <div className="form-content">
                    <div className="form-group">
                      <label>Delivery Method</label>
                      <select>
                        <option>Bank Transfer</option>
                        <option>Send Money</option>
                        <option>Interest Money</option>
                        <option>Invest Money</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>You Transfer</label>
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue="100"
                      />
                      <div className="amount-currency-select">
                        <select>
                          <option>GBP</option>
                          <option>USD</option>
                          <option>EUR</option>
                          <option>BRL</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group zero">
                      <label>Recipient Gets</label>
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        defaultValue="129.35"
                      />
                      <div className="amount-currency-select">
                        <select>
                          <option>USD</option>
                          <option>GBP</option>
                          <option>EUR</option>
                          <option>BRL</option>
                        </select>
                      </div>
                    </div>
                    <div className="info">
                      <p>
                        <span>Delivery Time:</span> 1 Working Days
                      </p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Send Money Online Area */}

        {/* Start Reviews Area */}
        <div className="ctp-reviews-area pt-100 pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Ratings And Reviews</h2>
            </div>

            <div className="row justify-content-center">
              {reviews.map((review, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="ctp-reviews-box">
                    <ul className="rating">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <img
                            src="/assets/img/currency-transfer-provider/star.svg"
                            alt="star"
                          />
                        </li>
                      ))}
                      <li>
                        <span>Reviews {review.rating}</span>
                      </li>
                    </ul>
                    <h3>{review.title}</h3>
                    <p>{review.description}</p>
                    <h4>
                      {review.author} <span>{review.role}</span>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Reviews Area */}
      </div>

      <Footer />
      <GoTop />
      <WhatsAppWidget />
      <DarkToggle />
    </>
  )
}
