import React, { Component } from "react";
import "./register.css";

import { country } from "./country.js";
import $ from "jquery";

import { Link } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
class Register extends Component {
  state = { phone: "" };
  constructor(props) {
    super(props);
  }
  countrychange = () => {
    var name = $("#countrySelect").val();
    var usercont = country.find((con) => con.name === name);
    var phone = usercont.dial_code;
    this.setState({ phone });
  };

  handelphonenumper = (e) => {
    let phone = { ...this.state.value };
    phone = e.currentTarget.value;
    this.setState({ phone });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className=" register-bg-img "
          style={{ backgroundImage: `url(/images/6.jpg)` }}
        >
          <div className=" register-bg-color ">
            <Header {...this.props} user={this.props.user}></Header>

            <div className="row align-items-center justify-content-center p-0  m-0">
              <div className=" col-12 col-xl-6 text-white d-flex justify-content-center my-5  m-0 p-0">
                <span>
                  <span className="r-e font-face-rh ">Egypt</span>
                  <br />
                  <span className="r-tg font-face-ab">TOUR GUIDE</span>
                </span>
              </div>

              <div className="col-12 col-xl-6 text-center px-3 p-0 m-0">
                <h3 className="text-white fw-bold">Create an Account</h3>

                <div className="d-flex justify-content-between p-0 m-0 ">
                  <div className="inp  text-start  p-0 m-0 me-1">
                    <label className=" text-white p-0 m-0" htmlFor="r-f-name">
                      Full Name
                    </label>
                    <input
                      className=" input p-2 "
                      type="text"
                      placeholder="Enter your Full Name"
                      id="r-f-name"
                    />
                  </div>
                  <div className="inp  text-start w-100 p-0 m-0 ms-1">
                    <label className=" text-white p-0 m-0" htmlFor="u-name">
                      User Name
                    </label>
                    <input
                      className=" input p-2"
                      type="text"
                      placeholder="Enter User Name"
                      id="u-name"
                    />
                  </div>
                </div>


                <div className="inp text-start  p-0 m-0 my-2">
                  <label className=" text-white p-0 m-0" htmlFor="r-email">
                    Email Address
                  </label>
                  <input
                    className=" input p-2 m-0"
                    type="email"
                    placeholder="Enter  Email Address"
                    id="r-email"
                  />
                </div>


                <div className="d-flex justify-content-between p-0 m-0 my-2">
                  <div className="inp  text-start  p-0 m-0 me-1">
                    <label
                      className=" text-white p-0 m-0"
                      htmlFor="countrySelect"
                    >
                      Your Country
                    </label>

                    <select
                      className="custom-select input p-2"
                      onChange={() => this.countrychange()}
                      id="countrySelect"
                    >
                      <option  defaultValue="Choose Your Country">Choose Your Country</option>
                      {country.map((e, index) => {
                        return (
                          <option key={index} value={e.name}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="inp  text-start  p-0 m-0 ms-1">
                    <label className=" text-white p-0 m-0" htmlFor="phone">
                      Phone Numper
                    </label>
                    <input
                      className=" input p-2"
                      type="text"
                      placeholder="Phone Numper"
                      id="phone"
                      onChange={this.handelphonenumper}
                      value={this.state.phone}
                    />
                  </div>
                </div>

                <div className="inp  text-start  p-0 m-0 my-2">
                  <label className=" text-white p-0 m-0" htmlFor="r-password">
                    Password
                  </label>
                  <input
                    className=" input p-2"
                    type="password"
                    placeholder="Enter Password"
                    id="r-password"
                  />
                </div>

                <div className="inp  text-start p-0 m-0 my-2">
                  <label className=" text-white p-0 m-0" htmlFor="cpassword">
                    Confirm Password
                  </label>
                  <input
                    className=" input p-2"
                    type="password"
                    placeholder="Enter Password again"
                    id="cpassword"
                  />
                </div>

                <div className="row  align-items-center  justify-content-center p-0  m-0">
                  <div className="col-12 col-xl-6 d-flex justify-content-center  my-1 m-0 p-0 ">
                    <div className="col-6 d-flex justify-content-end align-items-center form-check  m-0 p-1">
                      <input
                        className=" form-check-input p-0 m-0"
                        value="male"
                        type="radio"
                        name="gender"
                        id="male"
                     
                      />
                      <label
                        className="text-white  form-check-label p-0 mx-2 m-0"
                        htmlFor="male"
                      >
                        Male
                      </label>
                    </div>

                    <div className="col-6 d-flex justify-content-star align-items-center form-check  m-0 p-1">
                      <input
                        className="form-check-input p-0 m-0"
                        value="famale"
                        type="radio"
                        name="gender"
                        id="famale"
                 
                      />
                      <label
                        className="text-white form-check-label mx-2 p-0 m-0"
                        htmlFor="famale"
                      >
                        Famale
                      </label>
                    </div>
                  </div>
            
                  <div className="col-12 col-xl-6 d-flex justify-content-center  align-items-center my-1 p-0 m-0">
                    <button className="  sin-btn  p-0 m-0">Signup</button>
                    <p className="text-white p-0 mx-3 m-0 ">Or Signup by</p>
                    <Link className="googel-icon p-0 m-0 ">
                      <i className="fab fa-google fa-lg"></i>
                    </Link>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>

            <Footer></Footer>
            </div>
 
    
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
