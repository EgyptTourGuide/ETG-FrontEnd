import React, { Component } from "react";
import "./mostuse.css";
import $ from "jquery";

class Rate extends Component {
  state = { size: this.props.size };
  componentDidMount() {
    $(".sicon").addClass(`fa-${this.state.size}`);
  }
  render() {
    return (
      <React.Fragment>
        <span className="allstar col  p-0 m-0">
          {[...Array(Math.round(this.props.rate))].map((star, indexOf) => {
            return (
              <span key={indexOf} className=" col-1 p-0 m-0">
                <i className="ratemarrgen sicon fillstar fas fa-star"></i>
              </span>
            );
          })}
          {[...Array(5 - Math.round(this.props.rate))].map((star, indexOf) => {
            return (
              <span key={indexOf} className=" col-1 p-0 m-0">
                <i className="ratemarrgen sicon strokestar fas fa-star"></i>
              </span>
            );
          })}
        </span>
      </React.Fragment>
    );
  }
}

export default Rate;
