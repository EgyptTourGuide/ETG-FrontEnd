import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import $ from "jquery";
class SingleHotel extends Component {
  state = {};
  componentDidMount() {
    if (this.props.show) {
      $("h5").removeClass("loca-hotel");
    }
  }
  data = (e) => {
    const da = `${new Date(e).getDate()}/${
      new Date(e).getMonth() + 1
    }/${new Date(e).getFullYear()}`;
    return da;
  };
  location = async (id) => {
    await axios.get(`${backendurl}/hotels/${id}`).then((res) => {
      window.open(
        `https://www.google.com/maps?q=${res.data.location.coordinates[0]},${res.data.location.coordinates[1]}`,
        "_blank"
      );
    });
  };
  render() {
    return (
      <>
        <div
          key={this.props.indx}
          className="card-hotel  d-flex p-2  flex-column justify-content-between"
          style={{
            backgroundImage: `url(${
              this.props.room.media.length > 0
                ? this.props.room.media[0]
                : "/images/noimg.png"
            })`,
          }}
        >
          <div className="d-flex align-items-center justify-content-between card-data">
            <h5
              className="text-white fw-bold p-0 m-0 loca-hotel"
              onClick={() =>
                this.props.show
                  ? ""
                  : window.location.assign(
                      `/hotel/${
                        this.props.hotels.hotel
                          ? this.props.hotels.hotel.id
                          : this.props.hotels.id
                      }`
                    )
              }
            >
              {this.props.hotels.hotel
                ? this.props.hotels.hotel.name
                : this.props.hotels.name}
            </h5>
            <p
              className="text-white fw-bold p-0 m-0 loca-hotel"
              onClick={() =>
                this.location(
                  this.props.hotels.hotel
                    ? this.props.hotels.hotel.id
                    : this.props.hotels.id
                )
              }
            >
              {" "}
              <i className="fas fa-map-marker-alt"></i>{" "}
              {this.props.hotels.city
                ? this.props.hotels.city.name
                : this.props.city.name}
            </p>
          </div>

          <div className="d-flex align-items-end justify-content-between card-data">
            <div className="d-flex align-items-center p-0 m-0">
              <div>
                <p className="text-white p-0 m-0 ">
                  <span className="from-to-color fw-bold p-0 m-0">From:</span>
                  {this.props.from?(this.data(this.props.from)):(this.data(this.props.room.from))}
                </p>
                <p className="text-white p-0 m-0 ">
                  <span className="from-to-color fw-bold p-0 m-0">To:</span>
                  {this.props.to?(this.data(this.props.to)):(this.data(this.props.room.to))}
                </p>
              </div>
            </div>

            <div className="text-end">
            {!this.props.show?(""):(
              <p className="p-0 m-0 fw-bold price-color">
                {this.props.room.price}$
              </p>)}


              {this.props.show ? (
                ""
              ) : (
                <button
                  className="p-0 m-0 btn-read"
                  onClick={() => {
                    window.location.assign(
                      `/room/${this.props.room.id}/${
                        this.props.hotels.hotel
                          ? this.props.hotels.hotel.id
                          : this.props.hotels.id
                      }}`
                    );
                  }}
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleHotel;
