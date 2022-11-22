import React from "react";
import { useState } from "react";
import "./upload.css";

function  Upload() {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

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
                <h5>File Upload</h5>
              </div>
              <div className="card-block">
                <form
                  className="dropzone dz-clickable position-relative cursor-pointer"
                >
                  <div className="dz-default dz-message">
                    {image === null ? (
                      <input type="file" onChange={handleChange} />
                    ) : (
                      <div>
                        <img src={URL.createObjectURL(image)} alt="" />
                      </div>
                    )}
                  </div>
                </form>
                <div className="text-center m-t-20">
                  <img id="file-ip-1-preview" />
                  <a href="/result" className="btn btn-primary">Upload Now</a>
                </div>
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

export default Upload;
