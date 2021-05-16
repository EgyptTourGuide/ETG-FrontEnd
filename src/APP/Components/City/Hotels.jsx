import React, { Component } from "react";
import Loading from "../mostuse/loading";
import { backendurl } from "./../call-backend/URLs";
import axios from "axios";
import InsideData from "./Data";
import './City.css'
import HotelData from "./HotelData";
class Hotels extends Component {
  state = { hotels: [], looding: true, error: "", options: [] };
  async componentDidMount() {
    const hotels = await axios.get(`${backendurl}/hotels?city=${this.props.path}`);
    const option = await axios.get(`${backendurl}/settings/hotels/feature`);
    if (hotels && option) {
      var options=[];
      option.data.features.map((e,ind)=>{options.push({"name":e,"id":ind})});
      this.setState({ hotels: hotels.data,options,looding: false})
    }
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
