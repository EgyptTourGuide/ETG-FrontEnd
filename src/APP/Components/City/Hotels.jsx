import React, { Component } from "react";
import Loading from "../mostuse/loading";
import { backendurl } from "./../call-backend/URLs";
import axios from "axios";
import InsideData from "./Data";
import './City.css'
import HotelData from "./HotelData";
class Hotels extends Component {
  state = { hotels: [], looding: true, error: "" };
  async componentDidMount() {
    await axios.get(`${backendurl}/hotels?city=${this.props.path}`)
    .then((res)=>{this.setState({ hotels: res.data,looding:false})});
    
  }
  handelchange=e=>{
      console.log("D");

  }
  render() {
    if (!this.state.looding&&this.state.hotels.length>0) {
        return (
        <React.Fragment>
       <HotelData handelchange={this.handelchange}></HotelData>
          <InsideData
            data={this.state.hotels}
            type={`hotel`}
          />
        </React.Fragment>
      );
    } else {
      return( <Loading/>);
    
     
      
    }
  }
}

export default Hotels;
