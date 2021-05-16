import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cityshow from "./../mostuse/cityshow";
class Homecity extends Component {
  state = { city: this.props.city, filtercity: [] };
  constructor(props) {
    super(props);

    const len=this.state.city.length;
var val;
    if(len<8){
val=len;
    }
    else{
      val=8;
    }
    /*choose best 8 of city*/
    let filtercity = this.state.filtercity;
    for (let i = 0; i < val; i++) {
      filtercity.push(this.state.city[i]);
      /*end choose */
    }
    this.tosetstate = (filtercity) => {
      this.setState({ filtercity });
    };

    //end of filter
    AOS.init({
      duration: 500,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-0 p-0 text-center">
          <div className="row text-center  m-0 p-0">
            <div className="col-12 text-center text-white  m-0 p-0">
              <h2 data-aos="fade-in" className="text-white m-0 p-0">
                The Most Amazing In Egypt.
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                className="tex text-white"
              >
                Everyday Is a Journey And Your Journey Starts Here
              </p>
            </div>
            <div className="row  justify-content-center p-0 m-0">
              <Cityshow data={this.state.filtercity} type={"city"}></Cityshow>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Homecity;
