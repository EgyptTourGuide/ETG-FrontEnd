import React, { Component } from "react";
import "./Home.css";
class BackGround extends Component {
  render() {
    return (
      <React.Fragment>
  
          <video autoPlay muted loop id="myVideo">
            <source src="/images/7.mp4" type="video/mp4" />
          </video>
       
      </React.Fragment>
    );
  }
}

export default BackGround;
