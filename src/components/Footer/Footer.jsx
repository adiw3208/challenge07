import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-center text-lg-start text-white">
        <div class="container py-3">
          {/* <!-- Grid container --> */}
          <div class="container p-4">
            {/* <!--Grid row--> */}
            <div class="row mt-4">
              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  </li>
                  <li>
                    <p>binarcarrental@gmail.com</p>
                  </li>
                  <li>
                    <p>081-233-334-808</p>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <p>Connect With Us</p>
                <ul class="list-unstyled">
                  <li class="py-1">
                    {/* <!-- Facebook --> */}
                    <a
                      class="btn btn-primary btn-floating rounded-circle"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i aria-hidden="true">
                        <FontAwesomeIcon
                          icon={["fab", "facebook-f"]}
                          size="xl"
                          style={{ color: "white" }}
                        />
                      </i>
                    </a>

                    {/* <!-- Instagram --> */}
                    <a
                      class="btn btn-primary btn-floating rounded-circle"
                      style={{ backgroundColor: "#cb2644" }}
                      href="#!"
                      role="button"
                    >
                      <i aria-hidden="true">
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          size="md"
                          style={{ color: "white" }}
                        />
                      </i>
                    </a>

                    {/* <!-- Twitter --> */}
                    <a
                      class="btn btn-primary btn-floating rounded-circle"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <i aria-hidden="true">
                        <FontAwesomeIcon
                          icon={["fab", "twitter"]}
                          size="md"
                          style={{ color: "white" }}
                        />
                      </i>
                    </a>

                    {/* <!-- E-mail --> */}
                    <a
                      class="btn btn-primary btn-floating rounded-circle"
                      style={{ backgroundColor: "#ea4335" }}
                      href="#!"
                      role="button"
                    >
                      <i aria-hidden="true">
                        <FontAwesomeIcon
                          icon={["fas", "envelope"]}
                          size="md"
                          style={{ color: "white" }}
                        />
                      </i>
                    </a>

                    {/* <!-- Twich --> */}
                    <a
                      class="btn btn-primary btn-floating rounded-circle"
                      style={{ backgroundColor: "#8c44f7" }}
                      href="#!"
                      role="button"
                    >
                      <i aria-hidden="true">
                        <FontAwesomeIcon
                          icon={["fab", "twitch"]}
                          size="md"
                          style={{ color: "white" }}
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <p>Copyright Binar 2022</p>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
