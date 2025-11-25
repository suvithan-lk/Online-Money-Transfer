"use client"

import Header from './components/Header'
import Footer from './components/Footer'
import GoTop from './components/GoTop'
import WhatsAppWidget from './components/WhatsAppWidget'
import DarkToggle from './components/DarkToggle'
import KeyFeaturesTabs from './components/KeyFeaturesTabs'
import FAQAccordion from './components/FAQAccordion'
import { useState } from 'react';
import PromotionCarousel from './components/PromotionCarousel'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchedCountry, setMatchedCountry] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12)
  // Transfer form state (make fees dynamic)
  const [transferAmount, setTransferAmount] = useState(100);
  const [transferCurrency, setTransferCurrency] = useState('GBP');
  const [recipientCurrency, setRecipientCurrency] = useState('USD');

  // 100 countries list (images reused cyclically from img1..img12)
  const countryNames = [
    'USA','UK','New Zealand','France','Germany','Italy','Greece','China','Kuwait','Argentina','Sweden','Thailand',
    'Spain','Portugal','Netherlands','Belgium','Switzerland','Norway','Denmark','Finland','Ireland','Poland','Czech Republic','Slovakia',
    'Hungary','Romania','Bulgaria','Austria','Russia','Ukraine','Belarus','Turkey','Israel','Saudi Arabia','UAE','Qatar',
    'Oman','Bahrain','Egypt','Morocco','Algeria','Tunisia','Libya','South Africa','Nigeria','Kenya','Tanzania','Uganda',
    'Ethiopia','Ghana','Ivory Coast','Senegal','Mali','Cameroon','Zimbabwe','Zambia','Botswana','Mauritius','Seychelles','India',
    'Pakistan','Bangladesh','Sri Lanka','Nepal','Bhutan','Maldives','Japan','South Korea','North Korea','Mongolia','Philippines','Indonesia',
    'Malaysia','Singapore','Vietnam','Cambodia','Laos','Myanmar','Taiwan','Hong Kong','Chile','Peru','Colombia','Venezuela',
    'Brazil','Mexico','Costa Rica','Panama','Guatemala','Honduras','El Salvador','Nicaragua','Cuba','Dominican Republic','Jamaica','Bahamas',
    'Iceland','Liechtenstein','Luxembourg','Monaco','San Marino','Andorra','Malta','Cyprus','Kazakhstan','Uzbekistan','Azerbaijan','Armenia'
  ]

  const countries = countryNames.map((name, i) => ({ img: `img${(i % 12) + 1}.png`, name }))

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

  // Search handler for input field (shows one result below search bar, does not affect grid)
  function handleCountrySearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value.trim()) {
      setMatchedCountry(null);
      return;
    }
    const lower = value.trim().toLowerCase();
    const found = countries.find(c => c.name.toLowerCase().includes(lower));
    setMatchedCountry(found || null);
  }
  

  const services = [
    {
      icon: 'mobile-payment.svg',
      title: 'Regular Payments',
      description:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar. quisque velit nisi, pretium ut lacinia in, elementum id enim. proin eget tortor risus. proin eget tortor risus.',
    },
    {
      icon: 'warning.svg',
      title: 'Rate Alerts',
      description:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar. quisque velit nisi, pretium ut lacinia in, elementum id enim. proin eget tortor risus. proin eget tortor risus.',
    },
    {
      icon: 'fluctuation.svg',
      title: 'Market Analysis',
      description:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar. quisque velit nisi, pretium ut lacinia in, elementum id enim. proin eget tortor risus. proin eget tortor risus.',
    },
    {
      icon: 'contract.svg',
      title: 'Spot Contracts',
      description:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar. quisque velit nisi, pretium ut lacinia in, elementum id enim. proin eget tortor risus. proin eget tortor risus.',
    },
  ]

  const workingPeopleFeatures = [
    {
      icon: 'save-time.svg',
      title: 'Save time',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. donec rutrum congue leo eget malesuada.',
    },
    {
      icon: 'money-saving.svg',
      title: 'Save money',
      description:
        'Nulla porttitor accumsan tincidunt. quisque velit nisi, pretium ut lacinia in, elementum id enim. praesent sapien massa, convallis a pellentesque nec, egestas non nisi. sed porttitor lectus nibh.',
    },
    {
      icon: 'secure.svg',
      title: 'Send securely',
      description:
        'Cras ultricies ligula sed magna dictum porta. donec rutrum congue leo eget malesuada. curabitur aliquet quam id dui posuere blandit. vivamus suscipit tortor eget felis porttitor volutpat.',
    },
  ]

  const protectionFeatures = [
    {
      number: '01',
      title: 'Safeguarded with leading banks',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: '',
    },
    {
      number: '02',
      title: 'Extra-secure transactions',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: 'color-two',
    },
    {
      number: '03',
      title: 'Audited regularly',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: 'color-two',
    },
    {
      number: '04',
      title: 'Data protection',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      colorClass: '',
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
      role: '(Founder at Luvion)',
    },
  ]

  return (
    <>
      <Header />

      {/* Start Currency Transfer Provider Banner Area */}
      <div className="ctp-banner-area jarallax" data-jarallax='{"speed": 0.3}' style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          src="/assets/img/currency-transfer-provider/banner/banner-bg.mp4"
          poster="/assets/img/currency-transfer-provider/banner/banner-bg.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="ctp-banner-content">
                <h1>
                  International Currency <span>Transfer</span> Provider
                </h1>
                <ul className="ctp-list">
                  <li>
                    <img
                      src="/assets/img/currency-transfer-provider/banner/circle-check.svg"
                      alt="check"
                    />{' '}
                    Great exchange rates
                  </li>
                  <li>
                    <img
                      src="/assets/img/currency-transfer-provider/banner/circle-check.svg"
                      alt="check"
                    />{' '}
                    No hidden fees
                  </li>
                  <li>
                    <img
                      src="/assets/img/currency-transfer-provider/banner/circle-check.svg"
                      alt="check"
                    />{' '}
                    24/7 Transfers
                  </li>
                  <li>
                    <img
                      src="/assets/img/currency-transfer-provider/banner/circle-check.svg"
                      alt="check"
                    />{' '}
                    5-star customer rating
                  </li>
                  <li>
                    <img
                      src="/assets/img/currency-transfer-provider/banner/circle-check.svg"
                      alt="check"
                    />{' '}
                    Award-winning service
                  </li>
                </ul>
                {/* Feature icons row (reliable, instant, easy, trustworthy) */}
                <div className="banner-features d-flex flex-wrap" role="list" aria-label="Why choose us">
                  <div className="feature-box" role="listitem">
                    <div className="icon">
                      <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                    </div>
                    <h4>Reliable</h4>
                  </div>

                  <div className="feature-box" role="listitem">
                    <div className="icon">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    </div>
                    <h4>Instant</h4>
                  </div>

                  <div className="feature-box" role="listitem">
                    <div className="icon">
                      <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                    </div>
                    <h4>Easy</h4>
                  </div>

                  <div className="feature-box" role="listitem">
                    <div className="icon">
                      <i className="fa-solid fa-trophy" aria-hidden="true"></i>
                    </div>
                    <h4>Trustworthy</h4>
                  </div>
                </div>
                {/* CTA buttons for hero */}
                <div className="hero-ctas d-flex align-items-center" style={{ marginTop: '18px' }}>
                  <a href="/send-money" className="btn btn-primary me-3">
                    Send Money Now
                  </a>

                  <a href="#learn" className="btn btn-outline-white">
                    Learn More
                  </a>
                </div>

                {/* video play button removed as requested */}
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <form className="ctp-banner-form" onSubmit={e => e.preventDefault()}>
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
                      type="number"
                      className="form-control"
                      autoComplete="off"
                      value={transferAmount}
                      min="0"
                      step="0.01"
                      onChange={e => setTransferAmount(Number(e.target.value))}
                    />
                    <div className="amount-currency-select">
                      <select value={transferCurrency} onChange={e => setTransferCurrency(e.target.value)}>
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="BRL">BRL</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group zero">
                    <label>Recipient Gets</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      value={(() => {
                        // simple conversion using displayed rate for GBP->USD
                        const rate = 1.29356;
                        const multiplier = (transferCurrency === 'GBP' && recipientCurrency === 'USD') ? rate : (transferCurrency === recipientCurrency ? 1 : rate);
                        return (transferAmount * multiplier).toFixed(2);
                      })()}
                      readOnly
                    />
                    <div className="amount-currency-select">
                      <select value={recipientCurrency} onChange={e => setRecipientCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="BRL">BRL</option>
                      </select>
                    </div>
                  </div>
                  {/* dynamic fees calculation */}
                  {(() => {
                    const ACH_FEE_RECIPIENT = 1.7; // fixed ACH fee in recipient currency (USD by default)
                    const OUR_FEE_PERCENT = 0.0627; // 6.27% of the transfer amount (in send currency)
                    const rate = 1.29356; // GBP -> USD

                    // convert our fee to recipient currency when needed
                    const ourFeeInSend = transferAmount * OUR_FEE_PERCENT;
                    const convertSendToRecipient = (value) => {
                      if (transferCurrency === recipientCurrency) return value;
                      // simple handling: GBP -> USD using rate, otherwise assume same
                      if (transferCurrency === 'GBP' && recipientCurrency === 'USD') return value * rate;
                      if (transferCurrency === 'USD' && recipientCurrency === 'GBP') return value / rate;
                      return value;
                    }

                    const ourFeeRecipient = convertSendToRecipient(ourFeeInSend);
                    const achFeeRecipient = ACH_FEE_RECIPIENT;
                    const totalFeesRecipient = ourFeeRecipient + achFeeRecipient;
                    const percentOfSend = (totalFeesRecipient / Math.max(transferAmount, 1)) * 100;

                    return (
                      <>
                        <div className="ctp-fees">
                          <div className="ctp-fees-row">
                            <span>Connected bank account (ACH) fee</span>
                            <span>{achFeeRecipient.toFixed(2)} {recipientCurrency}</span>
                          </div>
                          <div className="ctp-fees-row">
                            <span>Our fee</span>
                            <span>{ourFeeRecipient.toFixed(2)} {recipientCurrency}</span>
                          </div>
                          <div className="ctp-fees-total">
                            <span>Total included fees ({percentOfSend.toFixed(2)}%)</span>
                            <strong>{totalFeesRecipient.toFixed(2)} {recipientCurrency}</strong>
                          </div>
                        </div>

                        <div className="ctp-fees-warning" role="note" aria-live="polite">
                          <div className="icon">!</div>
                          <div className="text">We can't guarantee the rate in volatile periods. If you want an exact amount to arrive, pay using your Wise account.</div>
                        </div>
                      </>
                    )
                  })()}
                 
                  {/* Fees summary block (added) */}
                 

              
                  <button type="submit" className="btn btn-primary">
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Currency Transfer Provider Banner Area */}

      {/* Promotion carousel inserted after hero/banner */}
      <PromotionCarousel />

      <div className="currency-transfer-provider-with-background-color">
        {/* Start Countries Area */}
        <div className="ctp-countries-area pt-100 pb-75">
          <div className="container">
            <div className="section-title ctp-title d-flex justify-content-between align-items-center flex-wrap">
              <h2 className="mb-0">Popular Countries Our Customers Send Money</h2>
              <div className="ctp-search-bar">
                <form className="search-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search countries..."
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleCountrySearch}
                  />
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                {/* Show matched country below search bar, do not affect grid */}
                {matchedCountry && (
                  <div style={{marginTop: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #0001', padding: '10px', display: 'flex', alignItems: 'center', maxWidth: 220}}>
                    <img src={`/assets/img/currency-transfer-provider/countries/${matchedCountry.img}`} alt={matchedCountry.name} style={{width: 32, height: 32, marginRight: 10, borderRadius: '50%'}} />
                    <span style={{fontWeight: 500}}>{matchedCountry.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="row justify-content-center">
              {countries.slice(0, visibleCount).map((country, index) => (
                <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2">
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

            <div className="row mt-4">
              <div className="col-12 text-center">
                {visibleCount < countries.length && (
                  <button className="btn btn-outline-primary" onClick={() => setVisibleCount(c => Math.min(c + 12, countries.length))}>
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End Countries Area */}

        {/* Start Money Transfer Area */}
        <div className="ctp-money-transfer-area pb-75">
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

        {/* Start Choose Area */}
        <div className="ctp-choose-area pb-100">
          <div className="container-fluid">
            <div className="row justify-content-center m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div
                  className="ctp-choose-image jarallax"
                  data-jarallax='{"speed": 0.3}'
                ></div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="ctp-choose-content">
                  <h3>Why Choose Luvion</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. nulla porttitor accumsan tincidunt. lorem
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
                      cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                      amet ligula. donec rutrum congue leo eget malesuada.
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
            </div>
          </div>
        </div>
        {/* End Choose Area */}

        {/* Start Services Area */}
        <div className="ctp-services-area pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Personal Currency Transfers Services</h2>
            </div>

            <div className="row justify-content-center">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="ctp-services-card">
                    <h3>
                      <div className="icon">
                        <img
                          src={`/assets/img/currency-transfer-provider/services/${service.icon}`}
                          alt={service.title}
                        />
                      </div>
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Services Area */}

        {/* Start Key Features Area */}
        <div className="ctp-key-features-area ptb-100">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Money Transfer Company Key Features</h2>
            </div>

            <KeyFeaturesTabs />
          </div>
        </div>
        {/* End Key Features Area */}

        {/* Start Working People Area */}
        <div className="ctp-working-people-area ptb-100">
          <div className="container-fluid">
            <div className="row justify-content-center m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="ctp-working-people-content">
                  <h3>Being A Money Transfer Service For Hard Working People</h3>

                  {workingPeopleFeatures.map((feature, index) => (
                    <div key={index} className="working-people-inner-card">
                      <div className="icon">
                        <img
                          src={`/assets/img/currency-transfer-provider/working-people/${feature.icon}`}
                          alt={feature.title}
                        />
                      </div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div
                  className="ctp-working-people-image jarallax"
                  data-jarallax='{"speed": 0.3}'
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Working People Area */}

        {/* Start Protec Area */}
        <div className="ctp-protec-area pb-75">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Protecting Your Money</h2>
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
                    <div className="download-qr" aria-hidden="true">
                      <img src="/assets/img/qr-code.svg" alt="Download QR" className="qr-code" />
                    </div>
                    <a href="#" className="app-store-btn">
                      <i className="flaticon-apple"></i>
                      Download on
                      <span>App Store</span>
                    </a>

                    <a href="#" className="play-store-btn">
                      <i className="flaticon-play-store"></i>
                      Download on
                      <span>Google play</span>
                    </a>
                  </div>
                  <div className="info">
                    <span>Over 10 million downloads worldwide</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="ctp-app-image">
                  <img
                    src="/assets/img/currency-transfer-provider/app/app.png"
                    alt="app"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End App Area */}

        {/* Reviews section removed per request */}

        {/* Start FAQ Area */}
        <div className="ctp-faq-area pb-100">
          <div className="container">
            <div className="section-title ctp-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <FAQAccordion />
          </div>
        </div>
        {/* End FAQ Area */}
      </div>

      <Footer />
      <GoTop />
      <WhatsAppWidget />
      <DarkToggle />
    </>
  )
}
