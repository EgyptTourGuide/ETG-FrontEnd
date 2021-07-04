import React, { Component } from "react";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
import "./likes-plane.css";
import { NavLink, Route } from "react-router-dom";
import Favorite from "./favorite";
import Plan from "./plan";

class LikesPlan extends Component {
  state = { token: "" };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.setState({ token: JSON.parse(localStorage.getItem("user")).token });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header
          {...this.props}
          setuser={this.props.setuser}
          user={this.props.user}
        />
        <div className="container-fluid px-4">
          <div className="row ">
            <div className="col-5 text-center ">
              <NavLink
                className="nav-link text-white fs-4 m-0 p-0"
                activeStyle={{ fontWeight: "bold", color: "white" }}
                exact
                to={`/in/favorite`}
              >
                Favorites
              </NavLink>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div className="text-break p-0 m-0 "></div>
            </div>
            <div className="col-5 text-center">
              <NavLink
                className="nav-link text-white fs-4 m-0 p-0"
                activeStyle={{ fontWeight: "bold", color: "white" }}
                exact
                to={`/in/plans`}
              >
                Plans
              </NavLink>
            </div>
          </div>
          <div className="row text-center">
            <Route
              path="/in/favorite"
              render={(props) => <Favorite token={this.state.token}></Favorite>}
            ></Route>
            <Route
              path="/in/plans"
              render={(props) => <Plan token={this.state.token}></Plan>}
            ></Route>
          </div>
        </div>

        <div className="footer-bg">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default LikesPlan;
