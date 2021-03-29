import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import Scroll from "./../Header/scroll/scroll";
import "./Home.css";


const steps = [
  "Search About Your Dreams In Egypt.",
  9000,
  "With Egypt Tour Guide Everything Is Possiblel.",
  9000,
];

class Home extends Component {
  state = { city: this.props.city };
  handleChange = () => {};
  render() {
    return (
      <React.Fragment>
        <div className=" container-fluid  items p-0 m-0">
          <div className="row d-flex align-item-center justfiy-content-center m-0 p-0">
            <div className="col-12 p-2 m-0 text-center text-white fs-4 font-weight-bold  ">
              <Typical
                wrapper="span"
                steps={steps}
                loop={100}
                className={"caca"}
              />
            </div>
            <div className="col-12 d-flex align-item-center justfiy-content-center m-0 pr-4 ">
              <span id="search" className="col-12 text-center">
                <span className="search_icon m-1">
                  <Link className="black">
                    <svg
                      className="bi-search  font-weight-bold "
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Link>
                </span>
                <input
                  id="s-bar"
                  type="text"
                  className=" text-align-center px-3  pe-5"
                  placeholder="Search"
                />
              </span>
            </div>
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
