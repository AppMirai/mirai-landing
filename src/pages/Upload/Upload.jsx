import axios from "axios";
import React, {useState } from "react";
import Compressor from 'compressorjs';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import "./upload.css";

function  Upload() {
  const navigate = useNavigate();
  const uid = uuidv4();
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    uid,
    images: null,
  });

  const blobToFile = ({theBlob, fileName}) => {
    return new File([theBlob], fileName, {lastModified: new Date()});
}

  const submitHandler = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      setIsLoading(true);

      formData.append("uid", payload.uid);
      formData.append("images", payload.images);

      await axios.post('http://20.89.56.97:8000/add/', formData)
      .then((res) => {if (res.status === 200) navigate(`/result/${payload.uid}`)})
      .catch((err) => console.log(err));
  }

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
                <form onSubmit={(e) => submitHandler(e)}>
                  <div
                    className="dropzone dz-clickable position-relative cursor-pointer"
                  >
                    <div className="dz-default dz-message">
                      {payload.images === null ? (
                        <input type="file" onChange={async (e) => {
                            const image = e.target.files[0]
                            const imageSize = image.size;
                            let compressionRatio = 0;

                            if (imageSize >= 1024000) compressionRatio = 0.1;
                            else compressionRatio = 0.4;

                            new Compressor(image, {
                              mimeType: 'File',
                              quality: compressionRatio,
                              success: (compressedResult) => {
                                const convertedFile = blobToFile({
                                  theBlob: compressedResult, 
                                  fileName: compressedResult.name
                                });
                                setPayload({...payload, images: convertedFile})
                              },
                            });
                          }
                        }
                        required />
                      ) : (
                        <div>
                          <img src={URL.createObjectURL(payload.images)} className="w-100" alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center m-t-20">
                    <button type="submit" className="mx-auto btn btn-primary d-flex align-items-center">
                      {
                        !isLoading ? 
                        <span className="me-2">Upload Now</span> :
                        <>
                          <span className="me-2">Touching Up</span>
                          <div className="lds-ripple">
                            <div></div>
                            <div></div>
                          </div>
                        </>
                      }
                    </button>
                  </div>
                </form>
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
