import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="login  flex-container-c text-center p-3">
          <div>
            <p className="text-white m-1">
              Please login or{" "}
              <Link to="signup" className="register">
                Register
              </Link>
            </p>
          </div>
       
          <div className="inp  text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="email">
              Email Address
            </label>
            <input
              className=" input p-2"
              type="text"
              placeholder="Enter your email address"
              id="email"
            />
          </div>

          <div className="inp  text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="password">
              Password
            </label>
            <input
              className=" input p-2"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>

          <div className="d-flex align-items-center p-0 m-2">
            <div className=" p-0 m-0">
              <button className="log-btn">Login</button>
            </div>
            <div className="d-flex p-0 m-0">
              <p className="text-white p-0 m-0 mx-2">Or login by</p>
              <Link className="googel-icon p-0 m-0"><i className="fab fa-google fa-lg"></i></Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
