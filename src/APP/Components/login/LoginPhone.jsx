import React from "react";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import Login from "./Login";
import "./login.css";
const LoginPhone = (props) => {
  return (
    <React.Fragment>
        <div className="back-login" style={{ backgroundImage: "url(/images/login.jpg)" }}>
      <div className="loginphone d-flex justify-content-center align-content-between flex-wrap" >
        <Header {...props} user={props.user}></Header>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="loginpage">
            <Login></Login>
          </div>
        </div>
        <div className="cc w-100">
        <Footer></Footer>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPhone;
