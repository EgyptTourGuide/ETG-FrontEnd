import React from "react";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
import Cityshow from "./../mostuse/cityshow";
import "./city.css";
import Search from "./../mostuse/Search";
const City = props => {
  return (  <React.Fragment>
    <Header user={props.user} className="position-relative"></Header>
    <div className="container-fluid text-center text-white">
      <h2 className="fw-bold">Where To Go</h2>
      <p className="text">Egypt Is The Land Of Dreams.</p>
    </div>
    <Search data={props.city} user={props.user} path={"/city"}></Search>

        <Cityshow data={props.city} {...props}></Cityshow>
  
    <Footer></Footer>
  </React.Fragment> );
}
 
export default City;


