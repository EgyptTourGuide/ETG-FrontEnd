import React, { Component } from "react";
import Loading from "../mostuse/loading";
import { backendurl } from "./../call-backend/URLs";
import axios from "axios";
import InsideData from "./Data";
import './City.css'
import HotelData from "./HotelData";
class Hotels extends Component {
  state = { hotels: [], looding: true, error: "",chup:false ,bed:"",features:[],
  from:"",to:"",done:false,edit:false};
  async componentDidMount() {
    await axios.get(`${backendurl}/hotels?city=${this.props.path}`)
    .then((res)=>{this.setState({ hotels: res.data,looding:false})});
    
  }
handlefromto=()=>{
this.setState({chup:true});
}
  handelchange = (e) => {
   
     var state = { ...this.state };
     if(e.currentTarget)
     state[e.currentTarget.name] = e.currentTarget.value;
     else
   {state["features"]=[];
     e.map(ele=>{state["features"].push(ele.name)})}

     this.setState(state);
  };
 
   handlefilter=async e=>{
    e.preventDefault();
    if(!this.state.chup&&localStorage.getItem("visitduration"))
{
  await axios.get(`${backendurl}/hotels?city=${this.props.path}&bed=${this.state.bed}&from=${JSON.parse(localStorage.getItem("visitduration")).from} &to=${JSON.parse(localStorage.getItem("visitduration")).to} &features=${this.state.features}`)
  .then((res)=>{this.setState({ hotels: res.data,looding:false,error:"",done:true})});

}
else if(this.state.chup||!localStorage.getItem("visitduration")){
  if(Date.parse(this.state.from) <= Date.parse(new Date())){
    this.setState({error:"*Please enter future date"})
  }
else if(this.state.from&&this.state.to&& Date.parse(this.state.from)<=Date.parse(this.state.to) && Date.parse(this.state.from)!==Date.parse(this.state.to)){
  await axios.get(`${backendurl}/hotels?city=${this.props.path}&bed=${this.state.bed}&from=${this.state.from} &to=${this.state.to} &features=${this.state.features}`)
  .then((res)=>{this.setState({ hotels: res.data,looding:false,error:"",done:true})});
 
}
else{
  this.setState({error:"*Please enter correct date"})
}
}


  }
  render() {
  
    if (!this.state.looding&&this.state.hotels.length>0) {
        return (
        <React.Fragment>

{this.state.done?(
<>
<div className="w-100 text-center">
<h4 className="text-white">The Best For You <i className="filter-icon  fas fa-filter" onClick={()=>{this.setState({done:false})}}></i></h4></div>
</>):(<HotelData handelchange={this.handelchange}handlefromto={this.handlefromto} handlefilter={this.handlefilter} checkedit={this.checkedit} error={this.state.error}></HotelData>)}
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
