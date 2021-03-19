import React from "react";
import Header from "../Header/Header";
import GoogleMap from "../GoogleMap/GoogleMap";
import { Link } from "react-router-dom";

const Destination = () => {
  const fromDestination = true;

  return (
    <div>
      <Header fromDestination={fromDestination}></Header>
      <div className="d-flex">
        <div className="w-25">
          <div class="jumbotron ">
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
                <Link to="/confirm">
                  {" "}
                  <button className="btn btn-primary m-3 px-4">Search</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div style={{ height: "500px" }} className="w-75">
          <GoogleMap></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Destination;
