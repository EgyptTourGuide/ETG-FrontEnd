import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import Cityshow from "../mostuse/cityshow";
import "./Citypage.css";
import Search from "../mostuse/Search";

const Adventurepage = props => {

  return (  <React.Fragment>
    <div className="s-h">
    <Header {...props} user={props.user} ></Header></div>
    <div className="container-fluid text-center text-white">
      <h2 className="fw-bold">What To Do</h2>
      <p className="text">It's Time To Escape</p>
    </div>
    <Search  data={props.adventure} user={props.user} path={"/adventure"}></Search>

        <Cityshow data={props.adventure} type={"adventure"}></Cityshow>
        <div className="footer-bg">
    <Footer ></Footer>
    </div>
  </React.Fragment> );
}
 
export default  Adventurepage;


