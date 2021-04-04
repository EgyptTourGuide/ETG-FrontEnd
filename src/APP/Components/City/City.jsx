import React, { Component } from "react";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
import Cityshow from "./../mostuse/cityshow";
import "./city.css";
import Search from "./../mostuse/Search";
class City extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header user={this.props.user} className="position-relative"></Header>
        <Search city={this.props.city} user={this.props.user}></Search>
        <div className="container-fluid text-center position-relative">
          <div className="row justify-content-center p-0 m-0">
            <Cityshow city={this.props.city}></Cityshow>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default City;
