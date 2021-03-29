import React, { Component } from "react";
import "./scroll.css";

class Scroll extends Component {
  scroll() {
    window.scrollTo(0,500);
  }
  render() {
    return (
      <React.Fragment>
       
          <span onClick={this.scroll} className="t-scroll">
              <span className="shape"></span>
            <span className="scr_tex">Scroll</span>
          </span>
      
      </React.Fragment>
    );
  }
}

export default Scroll;
