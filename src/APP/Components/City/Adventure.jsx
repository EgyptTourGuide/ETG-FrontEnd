import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import Cityshow from "../mostuse/cityshow";
import "./city.css";
import Search from "../mostuse/Search";

const Adventure = props => {

  return (  <React.Fragment>
    <Header user={props.user} className="position-relative"></Header>
    <div className="container-fluid text-center text-white">
      <h2 className="fw-bold">Whate To Do</h2>
      <p className="text">It's Time To Escape</p>
    </div>
    <Search data={props.adventure} user={props.user} path={"/adventure"}></Search>

        <Cityshow data={props.adventure} {...props}></Cityshow>
        
    <Footer></Footer>
  </React.Fragment> );
}
 
export default  Adventure;


