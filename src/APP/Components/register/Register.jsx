import React, { Component } from "react";
import "./register.css";
import Joi from "joi-browser";
import { country } from "./country.js";
import $ from "jquery";

import { Link } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
class Register extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    countryn: "",
    phone: "",
    password: "",
    cpassword: "",
    gender: "",
    errors: [],
    passworderror:"",
    cpassworderror:""
  };
  constructor(props) {
    super(props);
  }
schema = {
    fullname: Joi.string().min(10).max(100).required().error((errors) => {
      return errors.map(error => {
        switch (error.type)
         {case "string.min":return { message: " *Please enter your full name" };
          case "string.max":return { message: " *Please enter your correct full name" };
          case "any.empty":return { message: " *Your full name is required" };};
      })
    }
      ),
    username: Joi.string().max(100).required()
    .error((errors) => {
      return errors.map(error => {
        switch (error.type)
         {case "string.max":return { message: " *Please enter your correct full name" };
          case "any.empty":return { message: " *Your user name is required" };};
      })
    })
    ,
    email: Joi.string().email().max(100).required()
    .error((errors) => {
      return errors.map(error => {
        switch (error.type)
         {
          case "any.empty":return { message: " *Your email is required" }; 
          case "string.email":return { message: " *Please enter your correct email" };
       
        };
      })
    }),

    countryn: Joi.string().required().error((errors) => {
      return errors.map(error => {
        switch (error.type)
         { case "any.empty":return { message: " *Please choose your country" };};
      })
    }
      ),
      password: Joi.string().required().error((errors) => {
        return errors.map(error => {  
         
          switch (error.type)
           {
            case "any.empty":return { message: " *Your password is required" }; 
         
            
          };
        })
      }),
      cpassword: Joi.string().required().error((errors) => {
        return errors.map(error => {  
          switch (error.type)
           {
            case "any.empty":return { message: " *Your confirme password is required" }; 
      
           
          };
        })
      }),
    phone: Joi.string().min(10).required().error((errors) => {
      return errors.map(error => {  
        switch (error.type)
         {
          case "string.min":return { message: " *Please enter your correct phone number" };
          case "any.empty":return { message: " *Please choose your gender" }; 
        };
      })
    }),
    gender: Joi.string().required().error((errors) => {
      return errors.map(error => {  
        switch (error.type)
         {
          case "any.empty":return { message: " *Please choose your gender" }; 
        };
      })
    }),
  };
  handelsubmit = (e) => {
    e.preventDefault();
    this.validate();
    const errors = this.validate();
    const er=this.state.passworderror;
    const cer=this.state.cpassworderror;
    if (errors || er || cer) return;

    //Call Backend
   console.log("su");
  };
  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    delete state.passworderror;
    delete state.cpassworderror;
    const res = Joi.validate(state, this.schema );  
    if (res.error === null) {
      this.setState({ errors: {} });
      return;
    }
    for (const error of res.error.details) {
      errors[error.path]=error.message;
    
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

    var countryn = $("#countrySelect").val();
    if(countryn ==="Choose Your Country"){
      this.setState({ countryn :""});
    }
else{
  this.setState({ countryn });
}
   

    if(countryn !=="Choose Your Country"){
    var usercont = country.find((con) => con.name === countryn);
    var phone = usercont.dial_code;
    this.setState({ phone });
  }
  else{
  this.setState({ phone:"" });}
};

  handelpasswordchange=e=>{
    let password = { ...this.state.value };
    let passworderror="";
     password=e.currentTarget.value;
     if (password.length<8)
     {
      passworderror=" *your password is short"
       this.setState({passworderror});
     }
     else if(!password.match(/[A-Z]/)||!password.match(/[0-9]/) ||!password.match(/[-!$#@%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)){
      passworderror=" *your password must include an uppercase letter ,number and symbols"
      this.setState({passworderror});
     }
     else{
      this.setState({passworderror:""});
     }
    this.setState({password});
   
  }
  setpassword=e=>{

    let cpassword = { ...this.state.value };
    cpassword=e.currentTarget.value;
    if(cpassword===this.state.password){
      this.setState({cpassworderror:""})
      this.setState({cpassword});

    }
    else{
    this.setState({cpassworderror:"Password must be confirmed"})
    }
  
   
  
  }
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
                  <div className="d-flex c-p justify-content-between p-0 m-0 ">
                    <div className="inp  text-start  p-0 m-0 me-1">
                      <label className=" text-white p-0 m-0" htmlFor="r-f-name">
                        Full Name
                      </label>

                      
                      {this.state.errors.fullname && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.fullname}</p>)}

                      <input
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.handelchange}
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
                      {this.state.errors.username && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.username}</p>)}

                      <input
                        name="username"
                        onChange={this.handelchange}
                        value={this.state.username}
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
                    
                    {this.state.errors.email && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.email}</p>)}
                    
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handelchange}
                      className=" input p-2 m-0"
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
                      {this.state.errors.countryn && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.countryn}</p>)}

                      <select
                        className="custom-select input p-2"
                        onClick={() => this.countrychange()}
                        id="countrySelect"
                      >
                        <option value={null}>
                          Choose Your Country
                        </option>
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
                      {this.state.errors.phone && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.phone}</p>)}

                      <input
                      name="phone"
                        className=" input p-2"
                        type="text"
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
          {this.state.passworderror && (<p className="error-m text-danger d-inline mx-2">{this.state.passworderror}</p>)}
          {this.state.errors.password && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.password}</p>)}
                    <input
                      name="password"

                      onChange={this.handelpasswordchange}
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
                    {this.state.cpassworderror && (<p className="error-m text-danger d-inline mx-2">
                      {this.state.cpassworderror}
                     
                      </p>)}
                      {this.state.errors.password && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.password}</p>)}
                    <input
                      name="cpassword"
                      
                      onChange={this.setpassword}
                      className=" input p-2"
                      type="password"
                      placeholder="Enter Password again"
                      id="cpassword"
                    />
                  </div>

                  <div className="row  align-items-center  justify-content-center p-0  m-0">

                  <div className="col-12 col-xl-9 text-xl-start text-center p-0 m-0"> 
                  {this.state.errors.gender && (<p className="error-m text-danger d-inline mx-2">{this.state.errors.gender}</p>)}
                  
</div>

                    <div className="col-12 col-xl-6 d-flex justify-content-center  my-1 m-0 p-0 ">
      
                      <div className="col-6 d-flex justify-content-end align-items-center form-check  m-0 p-1">
                        <input
                          className=" form-check-input p-0 m-0"
                          value="male"
                          type="radio"
                          name="gender"
                          id="male"
                          onChange={this.handelchange}
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
                          onChange={this.handelchange}
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
