import React, { Component } from "react";
import BackGround from "./background";
import Homecity from "./Homecity";
import Header from "./../Header/Header";
import Home from "./Home";
import Adventuresslide from "./Adventuresslide";
import Footer from "../footer/footer.jsx";

class Allhome extends Component {
  state = {
    city: this.props.city,
    bgimg: this.props.bgimg,
    user: this.props.user,
  };
  constructor(props){
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Home {...this.props} />
        <Header {...this.props} />
        <BackGround bgimg={this.state.bgimg}> </BackGround>
        <Homecity city={this.state.city}></Homecity>
        <Adventuresslide adventure={this.props.adventure}></Adventuresslide>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Allhome;