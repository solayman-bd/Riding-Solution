import React, { useState } from "react";
import Header from "../Header/Header";
import GoogleMap from "../GoogleMap/GoogleMap";
import { Link, useParams } from "react-router-dom";
import fakeData from "../../FakeData/FakeData";

const Destination = () => {
  const fromDestination = true;
  const { vehicleName } = useParams();
  const [confirmation, setConfirmation] = useState(false);

  const foundData = fakeData.filter((data) => data.name === vehicleName);

  const { name, img, farePerHour } = foundData[0];
  return (
    <div>
      <Header fromDestination={fromDestination}></Header>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div class="jumbotron ">
            {confirmation ? (
              <div>
                <h4>{name}</h4>
                <img
                  style={{ height: "30px", width: "30px" }}
                  src={img}
                  alt=""
                />
                <h5>Fare per hour : {farePerHour}$</h5>
                <h3>Have a safe Journey</h3>
              </div>
            ) : (
              <form action="">
                <div class="form-group">
                  <label for="exampleInputEmail1">From</label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="From"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">To</label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="To"
                  ></input>
                  <Link>
                    {" "}
                    <button
                      onClick={() => setConfirmation(!confirmation)}
                      className="btn btn-primary m-3 px-4"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
        <div style={{ height: "500px" }} className="col-sm-12 col-md-8">
          <GoogleMap></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Destination;
