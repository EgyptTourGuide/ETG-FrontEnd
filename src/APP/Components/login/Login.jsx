import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { backendurl } from "./../call-backend/URLs";




class Login extends Component {
  state = {username:"",password:"",backenderror:""}
  handelchange=(e)=> {
   let state={...this.state}
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  setuser=data=>{
    this.props.setuser(data)}
   login=async e=>{
    e.preventDefault();
    var state={...this.state}
    delete state.backenderror;
    var backenderror="";
    await axios
      .post(`${backendurl}/login`, state)
      .then((response) => {
        this.setuser(response.data);
        if(document.referrer==="http://localhost:3000/mustlogin"){
          window.location.replace("/")
        }
        else if(window.location.href==="http://localhost:3000/login"){
       console.log(document.referrer)
        // window.location.replace(document.referrer)
       
        }
     else{
      window.location.replace(window.location.href);
     }
      })
      .catch(function (error) {
         backenderror = error.response.data.errors[0];
    
      });
      
      this.setState({backenderror});
  };
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
          <form>
            <div className="inp  text-start  p-0 m-1">
              <label className=" text-white p-0 m-0" htmlFor="l-email">
                Email Address or Username
              </label>
              <input
                name="username"
                onChange={this.handelchange}
                className=" input p-2"
                type="text"
                placeholder="Enter your email address or Username"
                id="l-email"
              />
            </div>
  
            <div className="inp  text-start  p-0 m-1">
              <label className=" text-white p-0 m-0" htmlFor="l-password">
                Password
              </label>
              <input
                name="password"
                onChange={this.handelchange}
                className=" input p-2"
                type="password"
                placeholder="Enter your password"
                id="l-password"
              />
            </div>
  
            <div className="d-flex justify-content-center align-items-center p-0 m-0 my-2">
              <button className="log-btn me-2" onClick={this.login}>
                Login
              </button>
              <p className="text-white p-0 m-0 mx-2">Or login by</p>
              <Link className="googel-icon p-0 m-0">
                <i className="fab fa-google fa-lg"></i>
              </Link>
            </div>
            {this.state.backenderror && (
              <p className="text-danger">
                *Couldn’t find account. Please try again or register now.
              </p>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Login;





