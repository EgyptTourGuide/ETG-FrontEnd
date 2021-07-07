import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import gettoken from "../mostuse/gettoken";
import NotFound from "../mostuse/NotFound";
import Loading from "./../mostuse/loading";
import Search from "./../mostuse/Search";
class Plan extends Component {
  state = {
    plans: [],
    hotels: [],
    load: true,
    hotel: [],
    token: JSON.parse(localStorage.getItem("user")).token,
  };

  async componentDidMount() {
    await axios
      .get(`${backendurl}/profile/plans`, {
        headers: { Authorization: `${this.state.token}` },
      })
      .then((res) => {
        var hotel = [];
        res.data.hotels.map((rels) => {
          hotel.push(rels.hotel);
        });
        this.setState({
          plans: res.data.plans,
          hotels: res.data.hotels,
          hotel,
          load: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403 && gettoken()) var token = "";
        gettoken().then((res) => {
          token = res;
        });

        this.setState({ token });
      });
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
    console.log(this.state.hotel)
    if (!this.state.load) {
      return (
        <React.Fragment>
          <div className="container-fluid">

            {this.state.hotels.length > 0 || this.state.plans.length > 0 ? (
              <>
                {this.state.hotels.length > 0 ? (
                  <div className="row text-start">
                    <h3 className="text-white">
                      {" "}
                      <i
                        className="fas fa-hotel"
                        style={{ color: "#D99879" }}
                      ></i>{" "}
                      Hotels
                    </h3>
                    <div>
                    <div className="row my-3">
              <Search
                data={[...this.state.hotel]}
                type={"hotel"}
              ></Search>
            </div>
                      <div className="row justify-content-center justify-content-xl-start">
                        {this.state.hotels.map((hotels, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              {hotels.hotel.rooms.map((room, indx) => {
                                return (
                                  <span className="col-12 col-xl-4 p-1 m-0">
                                    <div
                                      className="card-hotel  d-flex p-2  flex-column justify-content-between"
                                      key={indx}
                                      style={{
                                        backgroundImage: `url(${
                                          room.media.length > 0
                                            ? room.media[0]
                                            : "/images/noimg.png"
                                        })`,
                                      }}
                                    >
                                      <div className="d-flex align-items-center justify-content-between card-data">
                                        <h5
                                          className="text-white fw-bold p-0 m-0 loca-hotel"
                                          onClick={() => {
                                            window.location.assign(
                                              `/hotel/${hotels.hotel.id}`
                                            );
                                          }}
                                        >
                                          {hotels.hotel.name}
                                        </h5>
                                        <p
                                          className="text-white fw-bold p-0 m-0 loca-hotel"
                                          onClick={() =>
                                            this.location(hotels.hotel.id)
                                          }
                                        >
                                          {" "}
                                          <i className="fas fa-map-marker-alt"></i>{" "}
                                          {hotels.city.name}
                                        </p>
                                      </div>

                                      <div className="d-flex align-items-end justify-content-between card-data">
                                        <div className="d-flex align-items-center p-0 m-0">
                                          <div>
                                            <p className="text-white p-0 m-0 ">
                                              <span className="from-to-color fw-bold p-0 m-0">
                                                From:
                                              </span>
                                              {this.data(room.from)}
                                            </p>
                                            <p className="text-white p-0 m-0 ">
                                              <span className="from-to-color fw-bold p-0 m-0">
                                                To:
                                              </span>
                                              {this.data(room.to)}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="text-end">
                                          <p className="p-0 m-0 fw-bold price-color">
                                            {room.price}$
                                          </p>

                                          <button
                                            className="p-0 m-0 btn-read"
                                            onClick={() => {
                                              window.location.assign(
                                                `/room/${room.id}/${hotels.hotel.id}`
                                              );
                                            }}
                                          >
                                            Read more
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <span></span>
                )}

                {this.state.plans.length > 0 ? (
                  <div className="row text-start">
                    <h3 className="text-white">
                      {" "}
                      <i
                        className="fas fa-table"
                        style={{ color: "#66DE93" }}
                      ></i>{" "}
                      Plans
                    </h3>
                  </div>
                ) : (
                  <span></span>
                )}
              </>
            ) : (
              <NotFound></NotFound>
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <Loading></Loading>
        </>
      );
    }
  }
}

export default Plan;
