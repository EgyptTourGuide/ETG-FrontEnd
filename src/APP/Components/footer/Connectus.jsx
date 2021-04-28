import React, { Component } from "react";
import "./footer.css";

class ConnectUS extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="conus">
        <form >
        <div className="flex-container-c text-center p-0 m-0">
          <div className=" clos-con text-end ">
            <span className="clo-icon" onClick={()=>this.props.closeconnectus()}>
            <i className="fas fa-times fa-lg"></i>
            </span>
          </div>
          <div className=" p-0 m-1">
            <h5 className="text-white p-0 m-0">Personal Information</h5>
          </div>
          <div>
          <div className="text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="c-name">Full Name</label>
            <input className=" input p-2" type="text" placeholder="Enter your full name"  id="c-name" />

          </div>
          <div className="text-start  p-0 m-1">
            <label className=" text-white p-0 m-0" htmlFor="c-email">Email</label>
            <input className=" input p-2" type="text" placeholder="Enter your Email"  id="c-email" />
          </div>
          <div className=" p-0 m-0">
            <h5 className="text-white p-0 m-1">Your Message</h5>
          </div>
          <div>
          <textarea  className="tex-are p-2"  placeholder="Enter your Message"/>
          </div>
         <div className=" p-0 m-1">
          <button className="sendbtn">Send</button>
         </div>
         
          </div>
       
        </div>
        </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ConnectUS;
