import React, { Component } from "react";
import "./register.css";
import Joi from "joi-browser";
import { countries } from "./country.js";
import $ from "jquery";
import { Link } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
import FileUpload from "../mostuse/fileupdate";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
class Register extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    cpassword: "",
    errors: [],
    passworderror: "",
    cpassworderror: "",
    avatar: null,
    backenderror: "",
  };
  schema = {
    fullname: Joi.string()
      .min(10)
      .max(100)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: " *Please enter your full name" };
            case "string.max":
              return { message: " *Please enter your correct full name" };
            case "any.empty":
              return { message: " *Your full name is required" };
              default:
              return { message: " *Please enter your full name" };
            }
        });
      }),
    username: Joi.string()
      .min(3)
      .max(100)
      .regex(/^[a-z0-9]+$/g)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.regex.base":
              return {
                message:
                  " *Username should be lowercase letters and number only",
              };
            case "string.max":
              return { message: " *Please enter correct Username" };
            case "string.min":
              return { message: " *Please enter correct Username" };
            case "any.empty":
              return { message: " *Username is required" };
              default:
                return { message: " *Please enter correct Username" };
          }
        });
      }),
    email: Joi.string()
      .email()
      .max(100)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "any.empty":
              return { message: " *Your email is required" };
            case "string.email":
              return { message: " *Please enter your correct email" };
              default:
                return { message: " *Please enter your correct email" };
          }
        });
      }),

    country: Joi.string()
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "any.empty":
              return { message: " *Please choose your country" };
              default:
                return { message: " *Please choose your country" };
          }
        });
      }),
    password: Joi.string()
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "any.empty":
              return { message: " *Your password is required" };
              default:
                return { message: " *Your password is required" };
          }
        });
      }),
    phone: Joi.string()
      .min(10)
      .regex(/^\+?[0-9]+$/g)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.regex.base":
              return { message: " *Please enter your correct phone number" };
            case "string.min":
              return { message: " *Please enter your correct phone number" };
            case "any.empty":
              return { message: " *Please enter your phone number" };
              default:
                return { message: " *Please enter your phone number"  };
          }
        });
      }),

    cpassword: Joi.string()
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "any.empty":
              return { message: " *Your confirme password is required" };
              default:
                return { message: " *Your confirme password is required"  };
          }
        });
      }),
  };
  setavatar = (e) => {
    this.setState({ avatar: e.target.files[0] });
  };
  handelsubmit = (e) => {
    e.preventDefault();
    this.validate();
    const errors = this.validate();
    const er = this.state.passworderror;
    const cer = this.state.cpassworderror;

    if (errors || er || cer) return;

    //Call Backend
    const state = { ...this.state };
    delete state.errors;
    delete state.passworderror;
    delete state.cpassworderror;
    delete state.cpassword;
    delete state.backenderror;
    this.signup(state);
  };
  async signup(state) {
    const user = new FormData();

    Object.keys(state).map((key) => {
      user.append(key, state[key]);
    });
    var backenderror = "";
    await axios
      .post(`${backendurl}/signup`, user)
      .then(async (response) => {
        await axios.post(`${backendurl}/login`, {username:`${state.username}`,password:`${state.password}`})
        .then((res)=>{this.props.setuser(res.data);})
        window.location.replace("/home");
      })
      .catch(function (error) {
        if (error.response) {
          backenderror = error.response.data.errors;
        }
      });

    this.setState({ backenderror });
  }
  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    delete state.avatar;
    delete state.passworderror;
    delete state.cpassworderror;
    delete state.backenderror;
    const res = Joi.validate(state, this.schema);
    if (res.error === null) {
      this.setState({ errors: {} });
      return;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    this.setState({ errors });

    return errors;
  };
  handelchange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  countrychange = () => {
    const country = $("#countrySelect").val();
    if (country === "Choose Your Country") {
      this.setState({ country: "" });
    } else {
      this.setState({ country });
    }

    if (country !== "Choose Your Country") {
      var usercont = countries.find((con) => con.name === country);
      var phone = usercont.dial_code;
      this.setState({ phone });
    } else {
      this.setState({ phone: "" });
    }
  };

  handelpasswordchange = (e) => {
    let password = { ...this.state.value };
    let passworderror = "";
    password = e.currentTarget.value;
    if (password.length < 8) {
      passworderror = " *your password is short";
      this.setState({ passworderror });
    } else if (
      !password.match(/[A-Z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[-!$#@%^&*()_+|~=`{}:";'<>?,.]/)
    ) {
      passworderror =
        " *your password must include an uppercase letter ,number and symbols";
      this.setState({ passworderror });
    } else {
      this.setState({ passworderror: "" });
    }
    this.setState({ password });
  };
  setpassword = (e) => {
    let cpassword = { ...this.state.value };
    cpassword = e.currentTarget.value;
    if (cpassword === this.state.password) {
      this.setState({ cpassworderror: "" });
      this.setState({ cpassword });
    } else {
      this.setState({ cpassworderror: "Password must be confirmed" });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="container-fluid register-bg-img p-0 m-0"
          style={{ backgroundImage: `url(/images/6.jpg)` }}
        >
          <div className="container-fluid register-bg-color p-0 m-0 ">
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

                <form onSubmit={this.handelsubmit} className="p-0 m-0">
                  <FileUpload setavatar={this.setavatar} />

                  <div className="d-flex c-p justify-content-between p-0 m-0 ">
                    <div className="inp  text-start  p-0 m-0 me-1">
                      <label className=" text-white p-0 m-0" htmlFor="r-f-name">
                        Full Name
                      </label>

                      {this.state.errors.fullname && (
                        <p className="error-m text-danger d-inline mx-2">
                          {" "}
                          {this.state.errors.fullname}{" "}
                        </p>
                      )}
                      <span className="d-none">
                        {this.state.errors.fullname
                          ? `${$(".fullname").addClass("inputerror")}`
                          : ` ${$(".fullname").removeClass("inputerror")}`}
                      </span>
                      <input
                        name="fullname"
                        onChange={this.handelchange}
                        className="fullname input p-2 "
                        type="text"
                        placeholder="Enter your Full Name"
                        id="r-f-name"
                      />
                    </div>
                    <div className="inp  text-start w-100 p-0 m-0 ms-1">
                      <label className=" text-white p-0 m-0" htmlFor="u-name">
                        User Name
                      </label>
                      {this.state.errors.username && (
                        <p className="error-m text-danger d-inline mx-2">
                          {this.state.errors.username}
                        </p>
                      )}
                      <span className="d-none">
                        {this.state.errors.username ||
                        (this.state.backenderror &&
                          this.state.backenderror[0].startsWith("Username"))
                          ? `${$(".username").addClass("inputerror")}`
                          : ` ${$(".username").removeClass("inputerror")}`}
                      </span>
                      {this.state.backenderror &&
                        this.state.backenderror[0].startsWith("Username") && (
                          <p className="error-m text-danger d-inline mx-2">
                            *{this.state.backenderror}
                          </p>
                        )}
                      <input
                        name="username"
                        onChange={this.handelchange}
                        className="username input p-2"
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

                    {this.state.errors.email && (
                      <p className="error-m text-danger d-inline mx-2">
                        {this.state.errors.email}
                      </p>
                    )}
                    <span className="d-none">
                      {this.state.errors.email ||
                      (this.state.backenderror &&
                        this.state.backenderror[0].startsWith("Email"))
                        ? `${$(".email").addClass("inputerror")}`
                        : ` ${$(".email").removeClass("inputerror")}`}
                    </span>
                    {this.state.backenderror &&
                      this.state.backenderror[0].startsWith("Email") && (
                        <p className="error-m text-danger d-inline mx-2">
                          *{this.state.backenderror}
                        </p>
                      )}
                    <input
                      name="email"
                      onChange={this.handelchange}
                      className="email input p-2 m-0"
                      type="text"
                      placeholder="Enter  Email Address"
                      id="r-email"
                    />
                  </div>
               
                  <div className="d-flex c-p justify-content-between p-0 m-0 my-2">
                    <div className="inp  text-start  p-0 m-0 me-1">
                      <label
                        className=" text-white p-0 m-0"
                        htmlFor="countrySelect"
                      >
                        Your Country
                      </label>
                      {this.state.errors.country && (
                        <p className="error-m text-danger d-inline mx-2">
                          {this.state.errors.country}
                        </p>
                      )}
                      <span className="d-none">
                        {this.state.errors.country
                          ? `${$(".country").addClass("inputerror")}`
                          : ` ${$(".country").removeClass("inputerror")}`}
                      </span>
                      <select
                        className="custom-select input p-2"
                        onClick={() => this.countrychange()}
                        id="countrySelect"
                      >
                        <option value={null}>Choose Your Country</option>
                        {countries.map((e, index) => {
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
                      {this.state.errors.phone && (
                        <p className="error-m text-danger d-inline mx-2">
                          {this.state.errors.phone}
                        </p>
                      )}
                      <span className="d-none">
                        {this.state.errors.phone
                          ? `${$(".phone").addClass("inputerror")}`
                          : ` ${$(".phone").removeClass("inputerror")}`}
                      </span>
                      <input
                        name="phone"
                        className="phone input p-2"
                        placeholder="Phone Numper"
                        id="phone"
                        value={this.state.phone}
                        onChange={this.handelchange}
                      />
                    </div>
                  </div>
                  <div className="inp  text-start  p-0 m-0 my-2">
                    <label className=" text-white p-0 m-0" htmlFor="r-password">
                      Password
                    </label>
                    {this.state.passworderror && (
                      <p className="error-m text-danger d-inline mx-2">
                        {this.state.passworderror}
                      </p>
                    )}
                    {this.state.errors.password && (
                      <p className="error-m text-danger d-inline mx-2">
                        {this.state.errors.password}
                      </p>
                    )}
                    <span className="d-none">
                      {this.state.errors.password
                        ? `${$(".password").addClass("inputerror")}`
                        : ` ${$(".password").removeClass("inputerror")}`}
                    </span>
                    <input
                      name="password"
                      onChange={this.handelpasswordchange}
                      className="password input p-2"
                      type="password"
                      placeholder="Enter Password"
                      id="r-password"
                    />
                  </div>
                  <div className="inp  text-start p-0 m-0 my-2">
                    <label className=" text-white p-0 m-0" htmlFor="cpassword">
                      Confirm Password
                    </label>
                    {this.state.cpassworderror && (
                      <p className="error-m text-danger d-inline mx-2">
                        {this.state.cpassworderror}
                      </p>
                    )}
                    {this.state.errors.cpassword && (
                      <p className="error-m text-danger d-inline mx-2">
                        {this.state.errors.cpassword}
                      </p>
                    )}
                    <span className="d-none">
                      {this.state.errors.cpassword
                        ? `${$(".cpassword").addClass("inputerror")}`
                        : ` ${$(".cpassword").removeClass("inputerror")}`}
                    </span>
                    <input
                      name="cpassword"
                      onChange={this.setpassword}
                      className="cpassword input p-2"
                      type="password"
                      placeholder="Enter Password again"
                      id="cpassword"
                    />
                  </div>
                  <div className="row  align-items-center  justify-content-center p-0  m-0">
                    <div className="col-12 col-xl-6 d-flex justify-content-center  align-items-center my-1 p-0 m-0">
                      <button className="  sin-btn  p-0 m-0">Signup</button>
                      <p className="text-white p-0 mx-3 m-0 ">Or Signup by</p>
                      <Link className="googel-icon p-0 m-0 ">
                        <i className="fab fa-google fa-lg"></i>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="foot">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Register;
