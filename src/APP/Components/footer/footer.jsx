import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./footer.css";

import ConnectUS from "./Connectus";

class Footer extends Component {
  backtotop = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  };
  showconnectus(){
    $(".con-s").fadeToggle();
    $("#message-icon").toggleClass('fa-envelope-open fa-envelope');
  }
  closeconnectus(){
    $(".con-s").fadeOut();
    $("#message-icon").toggleClass('fa-envelope fa-envelope-open ');
  }


  componentDidMount(){
    $(window).scroll(function(){
      $(".con-s").fadeOut();
      $("#message-icon").removeClass(' fa-envelope-open ');
      $("#message-icon").addClass('fa-envelope ');
     });
  }
  render() {
    return (
      <React.Fragment>

<div className=" d-flex align-items-end">
<div className="con-s">
           <ConnectUS closeconnectus={()=>this.closeconnectus()} />
           </div>
        <div className="container-fluid p-0  m-0">
       
       
          <div className="row justify-content-center align-items-center   p-3 m-0">
            <div className="row justify-content-between  m-0 p-0">
              <div className="col-6 p-0 m-0">
                <p className="text-white d-inline">Find Us On</p>
                <Link className="mx-1  social-icon facebook ">
                  {" "}
                  <i className="fab fa-facebook-f fa-lg"></i>
                </Link>
                <Link className="mx-1 social-icon ">
                  {" "}
                  <i className="icon-p fab fa-twitter fa-lg"></i>
                </Link>
                <Link className="mx-1 social-icon ">
                  <i className="icon-p fab fa-linkedin-in fa-lg"></i>
                </Link>
              </div>

              <div className="col p-0 m-0 d-flex justify-content-end">
                <p className="text-white">Download App Now</p>
              </div>
            </div>
            <div className="row justify-content-between align-items-center  m-0 p-0">
              <div className="col p-0 m-0">
                <span className="connectus " onClick={()=>this.showconnectus()}>
                <i id="message-icon" className="icon-p far fa-envelope me-2"></i>
                 
                  Connect Us
                </span>
              </div>

              <div className="col d-flex justify-content-end  p-0 m-0">
                <Link className="me-0 mx-2 social-icon ">
                  <i className="icon-p fab fa-android fa-2x"></i>
                </Link>
                
               <Link className="me-0 mx-2 social-icon">
                  <i className="icon-p fab fa-apple fa-2x "></i>
                </Link>
              </div>
            </div>

            <div className="row text-center p-0 m-0 text-white">
              <p className="Rights p-0 m-0">
                Copyright Egypt Tour Guide {new Date().getFullYear()}. All
                Rights reserved
              </p>
            </div>
          </div>
         
        </div>
  
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
