import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Cityshow extends Component {
  state = { city: this.props.city };

  constructor(props) {
    super(props);
    AOS.init({
      duration: 1000,
    });
  }

  redirect = (url) => {
    console.log(url);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.city.map((city, index) => {
          return (
            <div
              onClick={(event) =>
                (window.location.href = `/city/${city.cityname.toLowerCase()}`)
              }
              data-aos="zoom-in"
              key={index}
              style={{ backgroundImage: `url(${city.urlimg})` }}
              className="d-flex align-items-end col-11 col-md-5 col-xl-5 city-card text-white p-0 m-2"
            >
              <div className="card-contant">
                <h5 className="upe">{city.cityname}</h5>
                <p> {city.about}</p>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Cityshow;
