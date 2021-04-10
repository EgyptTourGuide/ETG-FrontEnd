import React, { Component } from "react";
import { Link } from "react-router-dom";
import { navitem } from "./headeritems.jsx";
import { Animate } from "react-simple-animate";
import $ from "jquery";
import Logo from "./../logo/logo";
import "./Header.css";

class Header extends Component {
  state = {
    user: this.props.user,
    play: false,
    menu: "Menu",
  };

  ani = () => {
    this.setState(({ play }) => ({ play: !play }));
    this.slide();
  };
  slide = () => {
    
    if (this.state.play === false) {
      /*cancel scroll*/

      const body = document.body;
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
      /*show slide*/
      $(".sslid").removeClass("d-none");
      $(".bg").animate({ width: "100vw" });
      /* change color of logo*/
      setTimeout(function () {
        $(".loc").removeClass("white");
        $(".loc").addClass("black");
      }, 300);
      /* change color of close*/
      $("#menu").removeClass("text-white");

      $("#menu").addClass("text-danger");
      this.tosetstate = (menu) => {
        this.setState({ menu });
      };
    } else {
      /*show scroll */
      const body = document.body;
      body.style.position = "";
      body.style.top = "";
      body.style.height = "";
      body.style.overflowY = "";
      /*show slide*/
      $(".bg").animate({ width: "0vw" });
      setTimeout(function () {
        $(".sslid").addClass("d-none");
      }, 300);
      /* change color of logo*/

      $(".loc").removeClass("black");
      $(".loc").addClass("white");

      /* change color of close*/
      $("#menu").removeClass("text-danger");
      $("#menu").addClass("text-white");
      this.tosetstate = (menu) => {
        this.setState({ menu });
      };
    }
  };
 
  componentDidMount(){
    $("#w-g").toggle(
      function(){
        $("#c-slide").show();
        $(".h-slide").animate({height:200});
        
},
      function(){
        $(".h-slide").animate({height:0});
        $("#c-slide").hide();
       
        
      });
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="header container-fluid  p-0 m-0">
          <div className="row m-0 p-2 d-flex align-items-center  justify-content-between">
            <div className="zim col-2">
              <Link className="nodiewction" to="/">
                <span className="loc  white">
                  <Logo></Logo>
                </span>
              </Link>
            </div>

            <span className="col-8 d-flex justify-content-end  d-none d-xl-block">
              <span className=" col-12 d-flex align-items-center justify-content-end   ">
                <div className="col-2 p-0 m-0 ">
                  <Link className="linkst d-inline   fs-6" to="/city">
                    Where To Go
                  </Link>
                  <span id="w-g" className="linkst d-inline  px-1 ">
                    <i className="fas fa-chevron-down"></i>
                  </span>

                </div>
                <div className=" col-2  p-0 m-0  ">
                  <Link className="linkst d-inline  fs-6" to="/">
                    What To Do
                  </Link>
                  <span className="linkst d-inline  px-1" >
                    <i className="fas fa-chevron-down"></i>

                  </span>
                </div>
                <div className="col-2 p-0 m-0 ">
                  <Link className="linkst d-inline  fs-6" to="">
                    Visit Planner
                  </Link>
                </div>
                <div className="col-2 p-0 m-0 ">
                  <Link
                    className="linkst d-inline p-0 m-0 fs-6"
                    to=""
                  >
                    <img
                      className="profile "
                      src={this.state.user.imgurl}
                      width="50px"
                      alt={this.state.user.name}
                    />
                    {this.state.user.name}
                  </Link>
                </div>
                {/* language */}
                <div className="col-1 p-0 m-0 justify-content-end">
                  <Link className="linkst d-inline text-white  fs-6" to="">
                    EN
                  </Link>
                  <Link className="linkst d-inline text-white  mx-2" to="">
                    <i className="fas fa-chevron-down"></i>
                  </Link>
                </div>
              </span>
          
          
            </span>

            <span className="zim col-10 d-flex justify-content-end align-items-center  d-xl-none d-block">
              <span
                id="menu"
                className=" col-2  d-flex justify-content-center  text-white "
              >
                {this.state.menu}
              </span>
              <div className="demo" onClick={this.ani}>
                <div className="menu-icon">
                  <input className="menu-icon__cheeckbox" type="checkbox" />
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </span>
          </div>

          {/* menu */}

          <div className="sslid d-none d-xl-none slid row  p-0 m-0">
            <span className="col-12 d-flex justify-content-center m-0 p-0 ">
              <Animate
                play={this.state.play}
                start={{
                  transform: "translateX(38vw)",
                  opacity: "0",
                  willChange: "transform, opacity",
                }}
                end={{
                  transform: "translateX(38vw)",
                  opacity: "1",
                  willChange: "transform, opacity",
                }}
              >
                <ul className=" m-0 p-0">
                  {navitem.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          item.cname +
                          " my-3   d-flex justify-content-center align-items-center"
                        }
                      >
                        <Link to={item.path} className=" linkst  black  fs-5">
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Animate>
            </span>
          </div>

          <div className="sslid d-xl-none d-none bg"></div>
       
       
           {/* Slides */}
           <div id="c-slide">
          <div  className="h-slide p-0 m-0 "> 
         <div className=" ph-item" style={{ backgroundImage: `url(${this.props.city[0].urlimg})` }}>
         </div>
<div className="l-name text-center">
  <p className="black p-0 m-0 fw-bold" >{this.props.city[0].name}</p>
  <button className="btn-r" onClick={(event) =>(window.location.href = `/city/${this.props.city[0].name.toLowerCase()}`)} >Read More</button>
  </div>
       <div className="h-data">
         {this.props.city.map((e,index)=>{
           return(
            <div key={index} className="s-data " onClick={(event) =>(window.location.href = `/city/${e.name.toLowerCase()}`)} ><p className="d-name black p-0 " >{e.name}</p></div>
           );
         })}
       
    
       </div>
        </div>
          </div>
          </div>
     
        
        

      </React.Fragment>
    );
  }
}

export default Header;
