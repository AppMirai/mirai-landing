import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div className="container px-5">
          <img
            src="assets/assets/img/Mirai_Logo.png"
            alt="..."
            className="logoMirai"
          />
          <a className="navbar-brand fw-bold ms-4" href="#page-top">
            Mirai
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#download">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="display-1 lh-1 mb-3">
                Showcase your app beautifully.
              </h1>
              <p className="lead fw-normal text-muted mb-5">
                Launch your mobile app landing page faster with this free, open
                source theme from Start Bootstrap!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="masthead-device-mockup">
              <svg
                className="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop className="gradient-start-color" offset="0%"></stop>
                    <stop className="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg
                class="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect>
              </svg>
              <svg
                class="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div class="device-wrapper">
                <div
                  class="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div class="screen bg-black">
                    <video
                      style={{ width: "100%", height: "100%" }}
                      muted="muted"
                      autoplay=""
                      loop=""
                    >
                      <source
                        src="assets/assets/img/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                "An intuitive solution to a common problem that we all face,
                wrapped up in a single app!"
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section id="features">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
              <div className="container-fluid px-5">
                <div className="row gx-5">
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Step 1</h3>
                      <p className="text-muted mb-0">
                        Untuk saat ini pemakaian Mirai hanya dapat di gawai
                        android.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Step 2</h3>
                      <p className="text-muted mb-0">
                        Menambahkan foto dalam fitur khusus untuk menghasilkan
                        filter Make Up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-5 mb-md-0">
                    <div className="text-center">
                      <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Step 3</h3>
                      <p className="text-muted mb-0">
                        Apilkasi yang gratis digunakan untuk mencocokan Make Up
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Step 4</h3>
                      <p className="text-muted mb-0">
                        Apilkasi ini dikembangkan oleh mahasiswa Politeknik
                        Elektronika Negeri Surabaya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-0">
              <div className="features-device-mockup">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="circleGradient"
                      gradientTransform="rotate(45)"
                    >
                      <stop class="gradient-start-color" offset="0%"></stop>
                      <stop class="gradient-end-color" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  className="shape-1 d-none d-sm-block"
                  viewBox="0 0 240.83 240.83"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(120.42 -49.88) rotate(45)"
                  ></rect>
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(-49.88 120.42) rotate(-45)"
                  ></rect>
                </svg>
                <svg
                  className="shape-2 d-none d-sm-block"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="device-wrapper">
                  <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen bg-black d-flex flex-column align-items-center">
                      <video
                        style={{ width: "100%", height: "100%" }}
                        muted="muted"
                        autoplay=""
                        loop=""
                      >
                        <source
                          src="assets/assets/img/demo-screen.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="mt-4 d-flex flex-column flex-lg-row align-items-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#">
                          <img
                            className="app-badge"
                            src="assets/assets/img/button2.png"
                            alt="..."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container px-5">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <h2 className="display-4 lh-1 mb-4">
                The Future of cosmetic application
              </h2>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                With Mirai in your fingertips you can tryout and test bolder
                color for your lipstick without spending a penny.
              </p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="ms-5 px-sm-0">
                <img
                  class="img-fluid rounded-circle"
                  src="assets/assets/img/Mirai_Logo.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            Get the app now!
          </h2>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <a
              className="me-lg-3 mb-4 mb-lg-0"
              href="https://play.google.com/store/apps/details?id=com.mirai.mirai_app"
            >
              <img
                class="app-badge"
                src="assets/assets/img/google-play-badge.svg"
                alt="..."
              />
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-white-50 small">
            <div className="mb-2">&copy; Informatic Engineering 3 D4 A</div>
            <a href="#!">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a href="#!">Terms</a>
            <span className="mx-1">&middot;</span>
            <a href="#!">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;