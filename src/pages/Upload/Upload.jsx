import React from "react";
import './upload.css';

const Upload = () => {
    return(
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <img src="assets/img/Mirai_Logo.png" alt="..."/>
                <a className="navbar-brand fw-bold ms-4" href="index.html">Mirai</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Download</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Upload;