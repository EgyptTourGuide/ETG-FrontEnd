import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Cityshow = props => {
  AOS.init({duration: 500 });
  return (
    <React.Fragment>
      <div className="container-fluid text-center position-relative m-0 p-0 my-2">
  
  <div className="row justify-content-center p-0 m-0">
      {props.data.map((e, index) => {
        return (
          <div
          key={index}
            onClick={(event) =>(window.location.href = `${props.location.pathname}/${e.name.toLowerCase()}`)}
            e-aos="zoom-in"
            key={index}
            style={{ backgroundImage: `url(${e.urlimg})` }}
            className="d-flex align-items-end col-11 col-md-5 col-xl-5 city-card text-white p-0 m-2"
          >
            <div className="card-contant">
              <h5 className="upe">{e.name}</h5>
              <p> {e.about}</p>
            </div>
          </div>
        );
      })}
      </div>

      </div>
    </React.Fragment>
  );
}
 
export default Cityshow ;

