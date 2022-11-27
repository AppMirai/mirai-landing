import React from "react";
import { useParams } from "react-router-dom";
import "./result.css";

function Result() {
  const {uid} = useParams();
  const imgUrl = (`http://20.89.56.97:8000/uid/${uid}`);

  return (
    <>
      <>
        <div className="bg-light">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
            <div className="container px-5">
              <img
                src="assets/assets/img/Mirai_Logo.png"
                alt="..."
                className="logoMirai"
              />
              <a className="navbar-brand fw-bold ms-4" href="/">
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
                    <a className="nav-link me-lg-3" href="#download">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row d-flex justify-content-center mt-100">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5>Result</h5>
              </div>
              <div className="card-block">
                <img src={imgUrl} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </>
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
                className="app-badge"
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
    </>
  );
}

export default Result;
