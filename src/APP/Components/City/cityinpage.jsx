import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Places from "./Places";
import Hotels from "./Hotels";
import Delight from "./Delight";

class CityInPage extends Component {
  state = {
    cityinfo: this.props.cityinfo,
    places: this.props.places,
    backgroundmedia: this.props.cityinfo.media[0],
  };
  changebackground = (ind) => {
    var backgroundmedia = this.state.cityinfo.media[ind];
    this.setState({ backgroundmedia });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="allmedia row justify-content-center p-0 m-0">
            <div className=" row  align-content-between mt-1 p-3 justify-content-center  p-0 m-0">
              <div className="d-flex justify-content-between">
                <div
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps?q=${this.state.cityinfo.location.coordinates[0]},${this.state.cityinfo.location.coordinates[1]}`,
                      "_blank"
                    );
                  }}
                >
                  <h3 className=" location-city">
                    <i className="fas fa-map-marker-alt"></i> Location
                  </h3>
                </div>
                <div>
                  <i class="text-white fas fa-search fa-lg"></i>
                </div>
              </div>

              {this.state.backgroundmedia === this.props.cityinfo.media[0] ? (
                <div className="info-bg-city   row text-center  ">
                  <h1 className="text-white fw-bold ">
                    {this.state.cityinfo.name}
                  </h1>
                  <p className="text-white" style={{ opacity: "0.8" }}>
                    {this.state.cityinfo.description}
                  </p>
                </div>
              ) : (
                <span></span>
              )}

              <div className="d-flex justify-content-center ">
                {this.state.cityinfo.media.map((e, index) => {
                  if ("jpeg jpg png gif".includes(e.split(".").pop())) {
                    return (
                      <div
                        key={index}
                        className="hov-media square-media p-0 m-0 mx-1"
                        onClick={() => this.changebackground(index)}
                        style={{ backgroundImage: `url(${e})` }}
                      ></div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className="hov-media d-flex align-items-center justify-content-center p-0 m-0 mx-1 "
                      >
                        <div className="vplay-icon">
                          <i
                            className="fas fa-play text-white p-0 m-0"
                            style={{ fontSize: "10px" }}
                          ></i>
                        </div>
                        <video
                          onClick={() => this.changebackground(index)}
                          muted
                          loop
                          className="square-media vide "
                        >
                          <source src={`${e}`} type="video/mp4" />
                        </video>
                      </div>
                    );
                  }
                })}
              </div>

              {"jpeg jpg png gif".includes(
                this.state.backgroundmedia.split(".").pop()
              ) ? (
                <div
                  className=" pg-me-ci"
                  style={{
                    backgroundImage: `url(${this.state.backgroundmedia})`,
                  }}
                ></div>
              ) : (
                <video autoPlay muted loop className="pg-me-ci vide  p-0 m-0">
                  <source
                    src={`${this.state.backgroundmedia}`}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>
          <div className="container-fluid">
            <nav className="row navbar navbar-expand navbar-dark ">
              <div className="col-12">
                <ul className="col-12 navbar-nav text-center">
                  <li className="col-4 nav-item">
                    <NavLink
                      id="home"
                      className="nav-link fs-3"
                      activeStyle={{ fontWeight: "bold", color: "white" }}
                      exact
                      to={`/city/${this.state.cityinfo.id}`}
                    >
                      Places
                    </NavLink>
                  </li>
                  <li className="col-4 nav-item">
                    <NavLink
                      id="hotels"
                      className="nav-link fs-3"
                      activeStyle={{ fontWeight: "bold", color: "white" }}
                      exact
                      to={`/city/${this.state.cityinfo.id}/hotels`}
                    >
                      Hotels
                    </NavLink>
                  </li>
                  <li className="col-4 nav-item">
                    <NavLink
                      id="delight"
                      className="nav-link fs-3"
                      activeStyle={{ fontWeight: "bold", color: "white" }}
                      exact
                      to={`/city/${this.state.cityinfo.id}/delight`}
                    >
                      Delight
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <Route
                path={`/city/${this.state.cityinfo.id}`}
                exact
                render={(props) => (
                  <Places
                    places={this.state.places}
                    path={this.state.cityinfo.id}
                  />
                )}
              />
              <Route
                path={`/city/${this.state.cityinfo.id}/hotels`}
                exact
                render={(props) => <Hotels path={this.state.cityinfo.id} />}
              />
              <Route
                path={`/city/${this.state.cityinfo.id}/delight`}
                exact
                render={(props) => (
                  <Delight
                    places={this.state.places}
                    path={this.state.cityinfo.id}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CityInPage;
