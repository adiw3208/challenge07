import React from "react";
import Tester1 from "../../assets/img/tester1.jpg";
import Tester2 from "../../assets/img/tester2.jpg";
import Tester3 from "../../assets/img/tester3.jpg";
import Tester4 from "../../assets/img/tester4.jpg";
import Tester5 from "../../assets/img/tester5.jpg";
import Tester6 from "../../assets/img/tester6.jpg";
import Tester7 from "../../assets/img/tester7.jpg";
import Tester8 from "../../assets/img/tester8.jpg";
import Tester9 from "../../assets/img/tester9.jpg";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <div className="container py-5 justify-content-center align-items-center">
          <h2>Testimonials</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
          <div className="container justify-content-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators visually-hidden">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active bg-primary"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="7"
                  aria-label="Slide 8"
                  className="bg-primary"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="8"
                  aria-label="Slide 9"
                  className="bg-primary"
                ></button>
              </div>
              <div className="carousel-inner">
                {/* <!-- tester1 --> */}
                <div className="carousel-item active">
                  <div className="card __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester1}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Susy H, Jakarta
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester1 --> */}
                {/* <!-- tester2 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester2}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Expedita ipsam iste incidunt ipsa aliquam? Non
                          quam officia ut reiciendis nisi atque autem, illum
                          suscipit. Cupiditate, in a. Quos, at unde.”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Fatimah A, Bandung
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester2 --> */}
                {/* <!-- tester3 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester3}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Iste suscipit adipisci nisi ipsam sint eum
                          facere laborum rerum cum cumque fugiat dignissimos
                          animi recusandae exercitationem, iusto soluta?
                          Repellat, animi et?”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Aisyah H, Semarang
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester3 --> */}
                {/* <!-- tester4 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester4}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ea deleniti ullam molestias accusantium tempora
                          repellat, maxime fugiat asperiores quis minus aperiam
                          beatae culpa atque facere suscipit, iusto nobis
                          adipisci nam.”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Maulia A, Surabaya
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester4 --> */}
                {/* <!-- tester5 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester5}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Tempora voluptates nobis id delectus cum
                          veritatis alias officia. Aut unde necessitatibus,
                          soluta, qui, perspiciatis mollitia deleniti cum
                          dignissimos hic odit fuga.”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Ella P, Jambi
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester5 --> */}
                {/* <!-- tester6 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester6}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis, eius explicabo. Tenetur quod est, iusto
                          nulla libero dolore minus eius consequuntur aliquam
                          nam non ratione assumenda fuga enim? Eligendi,
                          debitis!”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Syifa N H, Yogyakarta
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester6 --> */}
                {/* <!-- tester7 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester7}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tenetur, tempora repellendus! Suscipit unde
                          voluptate doloremque perspiciatis officiis sed
                          expedita libero ea perferendis aliquam reiciendis,
                          quam, nemo explicabo assumenda harum fugiat.”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Khofifah N, Surakarta
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester7 --> */}
                {/* <!-- tester8 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester8}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Et soluta aperiam atque perferendis ducimus
                          deserunt quas fugiat facere. Et fugit consectetur,
                          incidunt nam hic quaerat velit commodi! Dignissimos,
                          modi fuga.”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Nissa A F, Pekanbaru
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester8 --> */}
                {/* <!-- tester9 --> */}
                <div className="carousel-item">
                  <div className="card shadow __tmCard">
                    <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                      <div className="card-img mx-3">
                        <img
                          src={Tester9}
                          alt="1"
                          className="card-img rounded-circle"
                        />
                      </div>
                      <div className="card-text p-2">
                        <div className="__fiveStars">
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-star text-warning"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p className="text-start">
                          “Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quasi voluptas obcaecati praesentium quod,
                          officia ex sapiente non velit, reprehenderit, eos
                          magni adipisci! Autem, fuga dolores!”
                        </p>
                        <h6 className="text-start fw-bold card-title">
                          Miftahul J, Bali
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end tester9 --> */}
              </div>
            </div>
          </div>
          {/* <!-- Button Next Prev --> */}
          <div className="d-flex justify-content-center align-items-center py-3">
            <button
              className="carousel-control-prev bg-danger rounded-circle __preNext"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next bg-success rounded-circle __preNext"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- end bun Prev Next --> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
