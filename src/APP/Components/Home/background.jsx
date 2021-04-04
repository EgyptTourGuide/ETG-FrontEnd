import React, { Component } from "react";
import "./Home.css";
class BackGround extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="video-bg ">
          <video autoPlay muted loop id="myVideo">
            <source src="/images/7.mp4" type="video/mp4" />
          </video>
        </div>
      </React.Fragment>
    );
  }
}

export default BackGround;
