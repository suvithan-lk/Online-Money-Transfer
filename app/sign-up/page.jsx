"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DarkToggle from '../components/DarkToggle'

export default function SignUp() {
  const router = useRouter()
  return (
    <>
      <section className="signup-area">
        <button type="button" className="back-btn" onClick={() => router.back()} aria-label="Go back">
          ← Back
        </button>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-image">
              <img src="/assets/img/currency-transfer-provider/banner/banner-bg.jpg" alt="signup" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="signup-form">
                    <div className="logo black-logo">
                      <Link href="/">
                        <img src="/assets/img/logo.svg" alt="logo" />
                      </Link>
                    </div>
                    <div className="logo white-logo">
                      <Link href="/">
                        <img src="/assets/img/logo.svg" alt="logo" />
                      </Link>
                    </div>

                    <h3>Open up your Luvion Account now</h3>
                    <p>
                      Already signed up? <Link href="/login">Log in</Link>
                    </p>

                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your email address"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Create a password"
                          className="form-control"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>

                      <div className="connect-with-social">
                        <span>Or</span>
                        <button type="submit" className="facebook">
                          <i className="fab fa-facebook-square"></i> Connect with Facebook
                        </button>
                        <button type="submit" className="google">
                          <i className="fab fa-google"></i> Connect with Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DarkToggle />
    </>
  )
}
