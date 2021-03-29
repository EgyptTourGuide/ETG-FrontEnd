import React, {  Component } from "react";
import { Link } from "react-router-dom";
import { navitem } from "./headeritems.jsx";
import { Animate} from "react-simple-animate";
import $ from 'jquery';
import Logo from'./../logo/logo';
import "./Header.css";

class Header extends Component {
  state = {
    user:this.props.user,
    play: false,
    menu:"Menu"
  };
  

  ani = () => {
    this.setState(({ play }) => ({ play: !play }));
    this.slide();
  };
  slide = () => {
    let menu=this.state.menu;
    if (this.state.play === false) {

      /*cancel scroll*/
        
        const body = document.body;
        body.style.height = "100vh";
        body.style.overflowY = "hidden";

      menu="Close";
       /*show slide*/ 
       $(".sslid").removeClass("d-none");
       $(".bg").animate({width: '100vw'});
       $(".sslid").addClass("d-block");
      /* change color of logo*/
      setTimeout(function() {
        $(".loc").removeClass('whitw');
        $(".loc").addClass('black');
    }, 300)
   /* change color of close*/ 
      $("#menu").removeClass("text-white");
      
      $("#menu").addClass("text-danger");
      this.tosetstate=(menu)=> {
        this.setState({ menu });
      } 
    } else {
        /*show scroll */
      const body = document.body;
      body.style.position = "";
      body.style.top = "";
      body.style.height = "";
      body.style.overflowY = "";


      menu="Menu";
      /*show slide*/ 
      $(".sslid").removeClass("d-block");
      $(".bg").animate({width: '0vw'});
      setTimeout(function() {
        $(".sslid").addClass("d-none");
    }, 300)
   /* change color of logo*/
   
    $(".loc").removeClass('black');
    $(".loc").addClass('white');


   /* change color of close*/ 
      $("#menu").removeClass("text-danger");
    $("#menu").addClass("text-white");
    this.tosetstate=(menu)=> {
      this.setState({ menu });
    } 
     
    }
  };
  render() {
    return (
      
      <React.Fragment>
        <div className="header container-fluid  p-0 m-0">
          <div className="row m-2 p-0 d-flex align-items-center  justify-content-between">
            <div className="zim col-2">
              <Link className="link" to="/" >
              <span className="loc white"><Logo></Logo></span>
              </Link>
            </div>

            <span className="col-8 d-flex justify-content-end  d-none d-xl-block">
              <span className=" col-12 d-flex align-items-center justify-content-end   ">
                <div className="col-2 p-0 m-0 ">
                  <Link className="link d-inline text-white  fs-6" to="">
                    Where To Go
                  </Link>
                  <Link className="link d-inline text-white px-1 " to="">
                    <i className="fas fa-chevron-down"></i>
                  </Link>
                </div>
                <div className=" col-2  p-0 m-0  ">
                  <Link className="link d-inline text-white  fs-6" to="">
                    What To Do
                  </Link>
                  <Link className="link d-inline text-white  px-1" to="">
                    <i className="fas fa-chevron-down"></i>
                  </Link>
                </div>
                <div className="col-2 p-0 m-0 ">
                  <Link className="link d-inline text-white  fs-6" to="">
                    Visit Planner
                  </Link>
                </div>
                <div className="col-2 p-0 m-0 ">
                   <Link className="link d-inline text-white p-0 m-0 fs-6" to=""> 
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
                  <Link className="link d-inline text-white  fs-6" to="">
                    EN
                  </Link>
                  <Link className="link d-inline text-white  mx-2" to="">
                    <i className="fas fa-chevron-down"></i>
                  </Link>
                </div>
              </span>
            </span>

            <span className="zim col-10 d-flex justify-content-end align-items-center  d-xl-none d-block">
          
            <span id="menu"  className=" col-2  d-flex justify-content-center  text-white ">{this.state.menu}</span>
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

          <div className="sslid d-none d-xl-none slid d-flex justify-content-center   row p-0 m-0">
            <span className="col-12 d-flex justify-content-center m-0 p-0 ">
             
              <Animate
                play={this.state.play}
                start={{
                  transform: "translateX(75vw)",
                  opacity: "0",
                  willChange: "transform, opacity",
                }}
                end={{
                  transform: "translateX(35vw)",
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
                          item.cname + " my-3   d-flex justify-content-center"
                        }
                      >
                        <Link
                          to={item.path}
                          className=" link  black  fs-5"
                        >
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
            
          
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
