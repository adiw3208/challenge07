import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormSearchCars = () => {
  return (
    <>
      <section className="container" id="carimobil">
        <div className="card container shadow">
          <div className="d-flex flex-column flex-md-row bd-highlight">
            <div className="p-3 flex-fill bd-highlight">
              <label for="form_driver" className="form-label">
                Tipe Driver
              </label>
              <select className="form-select" id="form_driver">
                <option value="">Pilih Tipe Driver</option>
                <option value="true">Dengan Sopir</option>
                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="p-3 flex-fill bd-highlightA">
              <label for="form_date" className="form-label">
                Tanggal
              </label>
              <input
                type="date"
                className="form-control"
                id="form_date"
                placeholder="Pilih Tanggal"
              />
            </div>
            <div className="p-3 flex-fill bd-highlight">
              <label for="form_time" className="form-label">
                Waktu Jemput/Ambil
              </label>
              <input
                type="time"
                className="form-control"
                id="form_time"
                placeholder="Pilih Waktu"
              />
            </div>
            <div className="p-3 flex-fill bd-highlight">
              <label for="form_pass" className="form-label">
                Jumlah Penumpang (Opsional)
              </label>
              <input
                type="number"
                className="form-control"
                id="form_pass"
                placeholder="Jumlah Penumpang"
              />
            </div>
            <div
              className="p-3 flex-fill bd-highlight"
              style={{ margin: "auto", textAlign: "center" }}
            >
              <div className="d-grid gap-2 mx-auto">
                <button
                  className="btn btn-sm btn-outline-success"
                  type="button"
                  id="load-btn"
                >
                  Cari Mobil{" "}
                  <i aria-hidden="true">
                    <FontAwesomeIcon icon={["fas", "car"]} size="md" />
                  </i>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  type="button"
                  id="clear-btn"
                >
                  Reset{" "}
                  <i aria-hidden="true">
                    <FontAwesomeIcon icon={["fas", "rotate-left"]} size="md" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* penampung hasil search */}
    </>
  );
};

export default FormSearchCars;
