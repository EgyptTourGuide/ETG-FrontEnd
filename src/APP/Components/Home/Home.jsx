import React, { Component } from "react";
import Typical from "react-typical";
import Scroll from "./../Header/scroll/scroll";
import "./Home.css";
import Search from "./../mostuse/Search";

const steps = [
  "Search About Your Dreams In Egypt.",
  9000,
  "With Egypt Tour Guide Everything Is Possiblel.",
  9000,
];

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" container-fluid  items p-0 m-0">
          <div className="row d-flex align-item-center justfiy-content-center m-0 p-0">
            <div className="col-12 p-2 m-0 text-center text-white fs-4 font-weight-bold  ">
              <Typical wrapper="span" steps={steps} loop={100} />
            </div>
            <Search
              city={this.props.city}
              adventure={this.props.adventure}
            ></Search>
          </div>
        </div>
        <div id="scroll" className="container-fluid text-center p-0 m-0">
          <div className="row p-0 m-0">
            <div>
              <Scroll></Scroll>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
