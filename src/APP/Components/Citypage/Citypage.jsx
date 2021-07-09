import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import Cityshow from "../mostuse/cityshow";
import "./Citypage.css";
import Search from "../mostuse/Search";
const Citypage = props => {
  return (  <React.Fragment>
    <div className="s-h">
    <Header {...props} user={props.user} ></Header>
    </div>
    <div className="container-fluid text-center text-white">
      <h2 className="fw-bold">Where To Go</h2>
      <p className="text">Egypt Is The Land Of Dreams.</p>
    </div>
   
    <Search data={props.city} user={props.user} type={"city"}></Search>
     <Cityshow  data={props.city} type="city" {...props}></Cityshow>
   
     <div className="footer-bg">
    <Footer ></Footer>
    </div>
  </React.Fragment> );
}
 
export default Citypage;


