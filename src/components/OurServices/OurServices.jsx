import React from "react";
import HappyGirl from "../../assets/img/Happy Girl.svg";
import IconCheck from "../../assets/img/check.svg";

const OurServices = () => {
  return (
    <>
      <section id="ourservices">
        <div className="container d-flex my-5">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
            <div className="col my-5">
              <img className="img-fluid" src={HappyGirl} alt="Car" />
            </div>
            <div className="col my-5">
              <h2 className="__osHeader my-5">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h2>
              <p className="__osParagraph">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>

              <ul className="list-group">
                <li className="list-group-item __osSuperiority">
                  <span className="__osIcon bg-primary bg-opacity-25">
                    <img src={IconCheck} alt="" />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li className="list-group-item __osSuperiority">
                  <span className="__osIcon bg-primary bg-opacity-25">
                    <img src={IconCheck} alt="" />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li className="list-group-item __osSuperiority">
                  <span className="__osIcon bg-primary bg-opacity-25">
                    <img src={IconCheck} alt="" />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li className="list-group-item __osSuperiority">
                  <span className="__osIcon bg-primary bg-opacity-25">
                    <img src={IconCheck} alt="" />
                  </span>
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li className="list-group-item __osSuperiority">
                  <span className="__osIcon bg-primary bg-opacity-25">
                    <img src={IconCheck} alt="" />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
