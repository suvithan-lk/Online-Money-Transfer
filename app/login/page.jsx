"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DarkToggle from '../components/DarkToggle'

export default function Login() {
  const router = useRouter()
  return (
    <>
      <section className="login-area">
        <button type="button" className="back-btn" onClick={() => router.back()} aria-label="Go back">
          ← Back
        </button>
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="login-image">
              <img src="/assets/img/currency-transfer-provider/banner/banner-bg.jpg" alt="login" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="login-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="login-form">
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

                    <h3>Welcome back</h3>
                    <p>
                      New to Luvion? <Link href="/sign-up">Sign up</Link>
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
                          placeholder="Your password"
                          className="form-control"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>

                      <div className="forgot-password">
                        <Link href="#">Forgot Password?</Link>
                      </div>

                      <div className="connect-with-social">
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
