import React from "react";

const BonusPage = () => {
  return (
    <>
      <section id="bonuspage">
        <div className="container py-5">
          <div className="card shadow bg-primary">
            <div className="d-block text-center p-5">
              <h1 className="fw-bold text-white">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p className="text-white py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                fugit ut possimus nobis corrupti laborum totam accusamus,
                placeat accusantium fugiat voluptatibus perspiciatis? Eveniet
                necessitatibus cupiditate recusandae dolorum maxime minus sunt.
              </p>
              <a href="/searchCars" className="shadow-lg">
                <span data-attr="Sewa">Sewa</span>
                <span data-attr="Sekarang">Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BonusPage;
