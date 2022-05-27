import React from "react";
import MercedesCar from "../../assets/img/Mercedes Car EQC 300kW Edition - 900x598 1.svg";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="container d-flex">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
          <div className="col my-5">
            <h2 className="my-5 fw-bold">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h2>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="/searchCars" className="shadow-lg">
              <span data-attr="Sewa">Sewa</span>
              <span data-attr="Sekarang">Sekarang</span>
            </a>
          </div>
          <div className="col my-5">
            <img className="img-fluid __car" src={MercedesCar} alt="Car" />
          </div>
        </div>
      </div>
      <div className="__stand bg-primary"></div>
    </section>
  );
};

export default HeroSection;
