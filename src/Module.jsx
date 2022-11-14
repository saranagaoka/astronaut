import React from "react";
import "./Module.scss";

function Module() {
  return (
    <div className="container">
      <div className="stars"></div>
      <div className="center">
        <div className="planet">
          <div className="shadow"></div>
          <div className="astronaut">
            {" "}
            <div className="tank"></div>
            <div className="suit__center">
              <div className="helmet__center"></div>
              <div className="buttons"></div>
              <div className="handl"></div>
              <div className="handr"></div>
              <div className="legl"></div>
              <div className="legr"></div>
              <div className="pipe"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
