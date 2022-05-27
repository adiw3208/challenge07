import * as React from "react";
import LogoBinar from "../../assets/img/logo-binar.png";
import "../../assets/img/logo-binar.png";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      localStorage.setItem("token", token);
      setIsLoggedIn(token);
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/");
    // window.location.reload();
    <GoogleLogout />;
  }
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow sticky-top">
          <div className="container">
            <a href="/" className="navbar-brand">
              <div className="logo">
                <img src={LogoBinar} className="logo" alt="logo" />
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-dark navbar-dark p-2 rounded"
              id="navbarNavAltMarkup"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-2">
                  <a href="#ourservices" className="nav-link">
                    Our Services{" "}
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="#whyus" className="nav-link">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="#testimonials" className="nav-link">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="#faq" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mx-2">
                  {/* <a
                    href="/"
                    className="nav-link __register px-4 text-dark text-center"
                  >
                    Register
                  </a> */}
                  {!isLoggedIn ? (
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={haldleSuccessGoogle}
                      onFailure={haldleFailureGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  ) : (
                    <Button color="inherit" onClick={handleLogout}>
                      Logout
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
