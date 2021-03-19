import React from "react";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, img, farePerHour } = props.data;
  return (
    <div className="col-md-3 col-sm-12">
      <div class="card">
        <img
          class="card-img-top"
          style={{ height: "150px" }}
          src={img}
          alt=""
        ></img>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Fare Per Hour : {farePerHour} $</p>
          <Link to="/destination" class="btn btn-primary">
            Use this Vehicle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
