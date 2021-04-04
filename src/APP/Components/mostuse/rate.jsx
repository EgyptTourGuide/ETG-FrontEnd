import React, { Component } from "react";
import "./mostuse.css";
import $ from "jquery";

class Rate extends Component {
  state = { rate: this.props.rate, size: this.props.size };
  constructor(props) {
    super(props);
    $(".sicon").addClass(`fa-${this.state.size}`);
  }
  render() {
    this.state.rate = this.props.rate;
    return (
      <React.Fragment>
        <span className="allstar col  p-0 m-0">
          {[...Array(this.state.rate)].map((star) => {
            return (
              <span key={star} className=" col-1 p-0 m-0">
                <i className="ratemarrgen sicon fillstar fas fa-star"></i>
              </span>
            );
          })}
          {[...Array(5 - this.state.rate)].map((star) => {
            return (
              <span key={star} className=" col-1 p-0 m-0">
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
