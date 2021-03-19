import React from "react";
import fakeData from "../../FakeData/FakeData";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import imgUrl from "./Frame.png";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div
      className="home-div"
      style={{
        width: "100%",

        backgroundImage: `url(${imgUrl})`,
      }}
    >
      {<Header></Header>}
      <div className="row w-75 mx-auto mt-5">
        {fakeData.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
