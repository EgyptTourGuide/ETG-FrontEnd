import React, { Component } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Places from "./Places";
import Hotels from "./Hotels";
import Rate from "../mostuse/rate";
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
            <div
              className="media row  align-content-between mt-1 p-3 justify-content-center p-0 m-0"
              style={{ backgroundImage: `url(${this.state.backgroundmedia})` }}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="text-white">
                    <i className="fas fa-map-marker-alt"></i> Location
                  </h3>
                </div>
                <div>
                  <i class="text-white fas fa-search fa-lg"></i>
                </div>
              </div>

              <div className="row text-center  ">
                <h1 className="text-white fw-bold ">
                  {this.state.cityinfo.name}
                </h1>
                <p className="text-white" style={{ opacity: "0.8" }}>
                  {this.state.cityinfo.description}
                </p>
              </div>

              <div className="d-flex justify-content-center ">
                {this.state.cityinfo.media.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="square-media p-0 m-0 my-1"
                      onClick={() => this.changebackground(index)}
                      style={{ backgroundImage: `url(${e})` }}
                    ></div>
                  );
                })}
              </div>
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
