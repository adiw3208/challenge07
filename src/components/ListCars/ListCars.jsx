import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getListCars } from "../../actions/carsAction";
import { getListCars } from "../../actions/carsAction";
import "./ListCars.css";

function ListCars() {
  const { listCarsResult, listCarsLoading, listCarsError } = useSelector(
    (state) => state.carReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // get action list cars
    console.log("1. use effect component did mount");
    dispatch(getListCars());
  }, [dispatch]);

  return (
    <>
      <section class="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4" id="cars-container">
          {listCarsResult ? (
            listCarsResult.map((car) => {
              return (
                <>
                  <div className="cardCars">
                    <img
                      className="img-fluid card-img"
                      src={car.image}
                      alt={car.plate}
                    />
                    <div className="float-end  text-capitalize">
                      <table className="p-3 m-2">
                        <tr className="row-cols-4">
                          <td className="col-2">Car Type</td>
                          <td className="col-8">: {car.type}</td>
                        </tr>
                        <tr className="row-cols-4">
                          <td className="col-2">model</td>
                          <td className="col-8">: {car.model}</td>
                        </tr>
                        <tr className="row-cols-4">
                          <td className="col-2">plate</td>
                          <td className="col-8">: {car.plate}</td>
                        </tr>
                        <tr className="row-cols-4">
                          <td className="col-2">id</td>
                          <td className="col-8">: {car.id}</td>
                        </tr>
                        <tr className="row-cols-4">
                          <td className="col-2">available at</td>
                          <td className="col-8">: {car.availableAt}</td>
                        </tr>
                      </table>
                      <button className="btn btn-success w-100 float-end">
                        Pilih Mobil
                      </button>
                    </div>
                  </div>
                  {/* new  */}
                </>
              );
            })
          ) : listCarsLoading ? (
            <p>Loading . . . </p>
          ) : (
            <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
          )}
        </div>
      </section>
    </>
  );
}

export default ListCars;
