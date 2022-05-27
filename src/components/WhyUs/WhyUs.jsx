import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyUs = () => {
  return (
    <>
      <section id="whyus">
        <div class="container">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div class="row">
            {/* <!-- item 1 --> */}
            <div class="col-md-6 col-xl-3">
              <div class="card bg-c-blue order-card">
                <div class="card-block">
                  <span class="__wuIcon bg-warning">
                    <i aria-hidden="true">
                      <FontAwesomeIcon
                        icon={["fas", "thumbs-up"]}
                        size="sm"
                        style={{ color: "white" }}
                      />
                    </i>
                  </span>
                  <h6 class="fw-bold mt-3">Mobil Lengkap</h6>
                  <p class="m-b-0 text-start">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item2 --> */}
            <div class="col-md-6 col-xl-3">
              <div class="card bg-c-green order-card">
                <div class="card-block">
                  <span class="__wuIcon bg-danger">
                    <i aria-hidden="true">
                      <FontAwesomeIcon
                        icon={["fas", "tag"]}
                        size="sm"
                        style={{ color: "white" }}
                      />
                    </i>
                  </span>
                  <h6 class="fw-bold mt-3">Mobil Lengkap</h6>
                  <p class="m-b-0 text-start">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item3 --> */}
            <div class="col-md-6 col-xl-3">
              <div class="card bg-c-yellow order-card">
                <div class="card-block">
                  <span class="__wuIcon bg-primary">
                    <i aria-hidden="true">
                      <FontAwesomeIcon
                        icon={["fas", "clock"]}
                        size="sm"
                        style={{ color: "white" }}
                      />
                    </i>
                  </span>
                  <h6 class="fw-bold mt-3">Layanan 24 Jam</h6>
                  <p class="m-b-0 text-start">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item4 --> */}
            <div class="col-md-6 col-xl-3">
              <div class="card bg-c-pink order-card">
                <div class="card-block">
                  <span class="__wuIcon bg-c-green">
                    <i aria-hidden="true">
                      <FontAwesomeIcon
                        icon={["fas", "trophy"]}
                        size="sm"
                        style={{ color: "white" }}
                      />
                    </i>
                  </span>
                  <h6 class="fw-bold mt-3">Sopir Profesional</h6>
                  <p class="m-b-0 text-start">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end item --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
