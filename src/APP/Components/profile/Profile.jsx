import React, { Component } from "react";
import { Route } from "react-router";
import Favorite from "../likes-plan/favorite";
import MustLogin from "../mostuse/MustLogin";
import Header from "./../Header/Header";
import "./profile.css";
import { NavLink } from "react-router-dom";
import Plan from "./../likes-plan/plan";
import EditProfile from "./editprofile";
import Footer from "./../footer/footer";
import Notificationshow from './../notifications/Notificationshow';
class Profile extends Component {
  state = { user: this.props.user, token: "" };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.setState({ token: JSON.parse(localStorage.getItem("user")).token });
    }
  }
  render() {
    if (this.state.user) {
      return (
        <React.Fragment>
          <Header
            {...this.props}
            setuser={this.props.setuser}
            user={this.state.user}
          ></Header>

          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-2   p-2 p-0 m-0">
                <span
                  className="d-flex align-items-center"
                  style={{ height: "54vh" }}
                >
                  <div className="nav-profile p-2 p-xl-3 d-flex flex-column justify-content-center justify-content-xl-start">
                    <NavLink
                      className="linkst nav-l-p p-2"
                      activeStyle={{ borderBottom: "white 2px solid" }}
                      exact
                      to={`/etg/${this.state.user.fullname
                        .toLowerCase()
                        .replace(/\s/g, "")}`}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            id="img-user-p"
                            className="profile "
                            src={
                              this.state.user.picture
                                ? this.state.user.picture
                                : "/images/user.png"
                            }
                            alt={this.state.user.fullname}
                          />
                        </div>

                        <div className="text-start mx-2  d-none d-xl-block">
                          <p
                            style={{
                              fontSize: "18px",
                              textTransform: "capitalize",
                            }}
                            className="p-0 m-0  fw-bold"
                          >
                            {this.state.user.fullname
                              .split(" ")
                              .slice(0, 2)
                              .join(" ")}{" "}
                          </p>
                          <p style={{ fontSize: "10px" }} className=" p-0 m-0">
                            {this.state.user.email}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                    <hr className=" my-2 p-0" />
                    <NavLink
                      className="nav-l-p"
                      activeStyle={{
                        borderBottom: "white 2px solid",
                        fontWeight: "bold",
                        color: "tomato",
                      }}
                      exact
                      to={`/etg/notifications`}
                    >
                    <div className="d-flex align-items-center justify-content-xl-start justify-content-center linkst">
                      <div className=" col-xl-1 d-flex justify-content-center">
                        <i
                          style={{ color: "#8ab6d6" }}
                          className="far fa-bell fa-2x"
                        ></i>
                      </div>
                      <div className=" ms-4 fw-bold d-none d-xl-block">
                        <p className="p-0 m-0">Notification</p>
                      </div>
                    </div>
</NavLink>
                    <hr className=" my-2 p-0" />

                    <NavLink
                      className="nav-l-p"
                      activeStyle={{
                        borderBottom: "white 2px solid",
                        fontWeight: "bold",
                        color: "tomato",
                      }}
                      exact
                      to={`/etg/plans`}
                    >
                      <div className="d-flex align-items-center justify-content-xl-start justify-content-center linkst my-1">
                        <div className="col-xl-1 d-flex justify-content-center ">
                          <i
                            className=" far fa-map  fa-2x"
                            style={{ color: "#289672" }}
                          ></i>
                        </div>
                        <div className="ms-4 fw-bold d-none d-xl-block">
                          My Plans
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className="nav-l-p"
                      activeStyle={{
                        borderBottom: "white 2px solid",
                        fontWeight: "bold",
                        color: "tomato",
                      }}
                      exact
                      to={`/etg/favorite`}
                    >
                      <div className="d-flex align-items-center justify-content-xl-start justify-content-center linkst my-1">
                        <div className="col-xl-1 d-flex justify-content-center ">
                          <i
                            className=" far fa-heart  fa-2x"
                            style={{ color: "#ce1212" }}
                          ></i>
                        </div>
                        <div className=" ms-4 fw-bold d-none d-xl-block ">
                          Favorites
                        </div>
                      </div>
                    </NavLink>
                    <hr className=" my-2 p-0" />

                    <div
                      className="d-flex linkst align-items-center justify-content-xl-start justify-content-center linkst my-1"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.replace("/");
                      }}
                    >
                      <div className="col-1 p-0 m-0 d-flex justify-content-center">
                        <i
                          className="fas fa-sign-out-alt"
                          style={{
                            color: "#e84545",
                            fontSize: "25px",
                            transform: "rotate(180deg)",
                          }}
                        ></i>
                      </div>

                      <div className=" ms-4 fw-bold d-none d-xl-block  ">
                        Logout
                      </div>
                    </div>
                  </div>
                </span>
              </div>

              <div className="col-10 p-1  m-0">
                <Route
                  path={`/etg/${this.state.user.fullname
                    .toLowerCase()
                    .replace(/\s/g, "")}`}
                  render={(props) => (
                    <EditProfile
                      token={this.state.token}
                      setuser={this.props.setuser}
                    ></EditProfile>
                  )}
                ></Route>
                <Route
                  path="/etg/favorite"
                  exact
                  render={(props) => (
                    <Favorite token={this.state.token}></Favorite>
                  )}
                ></Route>
                <Route
                  path="/etg/notifications"
                  exact
                  render={(props) => (
                    <Notificationshow></Notificationshow>
                  )}
                ></Route>
                <Route
                  path="/etg/plans"
                  exact
                  render={(props) => <Plan token={this.state.token}></Plan>}
                ></Route>
              </div>
            </div>
          </div>

          <div className="footer-bg">
            <Footer />
          </div>
        </React.Fragment>
      );
    } else {
      return <MustLogin />;
    }
  }
}

export default Profile;
