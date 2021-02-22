import React from "react";
import { AllData } from "./AllData";

const Main = () => {
  return (
    <div className="cardContainer">
      {AllData.map((data) => {
        return (
          <div key={data.id} className="card">
            <div
              style={{ backgroundImage: `url(${data.image})` }}
              className="img"
            ></div>
            <div className="info">
              <a className="live" target="_blank" href={data.link}>
                {data.name}
              </a>
              <div className="links">
                <a href={data.github}>Github</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
