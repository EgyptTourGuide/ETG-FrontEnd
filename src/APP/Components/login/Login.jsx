import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="text-center flex-container-c  ">
          <div>
            <p className="text-white m-1">
              Please login or{" "}
              <Link to="/register" className="register">
                Register
              </Link>
            </p>
          </div>
       
          <div className="inp  text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="l-email">
              Email Address
            </label>
            <input
              className=" input p-2"
              type="text"
              placeholder="Enter your email address"
              id="l-email"
            />
          </div>

          <div className="inp  text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="l-password">
              Password
            </label>
            <input
              className=" input p-2"
              type="password"
              placeholder="Enter your password"
              id="l-password"
            />
          </div>

          <div className="d-flex justify-content-center align-items-center p-0 m-0 my-2">
        
        
            <button className="log-btn me-2">Login</button>
              <p className="text-white p-0 m-0 mx-2">Or login by</p>
              <Link className="googel-icon p-0 m-0"><i className="fab fa-google fa-lg"></i></Link>
            </div>
      
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
