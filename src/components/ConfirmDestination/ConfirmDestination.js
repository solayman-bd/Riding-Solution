import React from "react";
import Header from "../Header/Header";
import GoogleMap from "./../GoogleMap/GoogleMap";

const ConfirmDestination = () => {
  const fromDestination = true;
  return (
    <div>
      <Header fromDestination={fromDestination}></Header>
      <div className="d-flex">
        <div className="w-25">
          <div class="jumbotron ">
            <img style={{ height: "100px", width: "100px" }} src="" alt="" />
          </div>
        </div>
        <div style={{ height: "500px" }} className="w-75">
          <GoogleMap></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDestination;
