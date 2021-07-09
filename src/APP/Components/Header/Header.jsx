import React, { Component} from "react";
import { Link} from "react-router-dom";
import { navitem } from "./headeritems.jsx";
import { Animate } from "react-simple-animate";
import $ from "jquery";
import Logo from "./../logo/logo";
import "./Header.css";
import Login from "../login/Login.jsx";
import UserorLogin from "./userorlogin.jsx";
import Profile from './Profile';
class Header extends Component {
constructor(props){
super(props);
const city=props.city.slice(0,7)
const adv=props.adventure.slice(0,7)
this.state={play: false, menu: "Menu",scity:city,sadventure:adv ,city:this.props.city,adventure:this.props.adventure};

}

showscroll(){
  const body = document.body;
  body.style.overflowY = "auto";
}



  ani = () => {
    this.setState(({ play }) => ({ play: !play }));
    this.slide();
  };

 
  slide = () => {
    
    if (!this.state.play) {
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
      this.showscroll();
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
  showslide=(t)=>{
    $(t).fadeToggle();
 }

componentDidMount(){
 
  $(window).scroll(function(){
    $("#c-slide").fadeOut();
   $("#a-slide").fadeOut(); 
   $("#lo-slide").fadeOut();
   $("#p-slide").fadeOut();
  });
  $(document).mouseup(function (e)
  {
  if (!$("#ac").is(e.target) && $("#c-slide").has(e.target).length === 0) 
  {
    $("#c-slide").fadeOut(); 
  }
  if (!$("#aa").is(e.target) && $("#a-slide").has(e.target).length === 0) 
  {
    $("#a-slide").fadeOut(); 
  }
  if (!$("#al").is(e.target) && $("#lo-slide").has(e.target).length === 0) 
  {
    $("#lo-slide").fadeOut(); 
  }
  if (!$(".img-name").is(e.target)  && $("#pr-slide").has(e.target).length === 0) 
  {
  
    $("#pr-slide").fadeOut(); 
  }
  })

  
}

showscrollclick=(item)=>{
  if(!window.location.href.includes(item.path))
  {this.showscroll()}
}

  render() {
    return (
      <React.Fragment>
        <div className="header s-h container-fluid solve p-0 m-0">
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
                  <span   className=" linkst d-inline  px-1" onClick={()=>this.showslide("#c-slide")}>
                    <i id="ac" className="fas fa-chevron-down"></i>
                  </span>

                </div>
                <div className=" col-2  p-0 m-0  text-center">
                  <Link className="linkst d-inline  fs-6" to="/adventure">
                    What To Do
                  </Link>
                  <span className="linkst d-inline  px-1" onClick={()=>this.showslide("#a-slide")} >
                    <i id="aa" className="fas fa-chevron-down"></i>

                  </span>
                </div>
                <div className="col-1 p-0 m-0 text-center">
                  <Link className="linkst d-inline  fs-6" to="/trip">
                  Trip
                  </Link>
                </div>
                <div className="col-2 p-0 m-0 text-center">
                  <Link className="linkst d-inline  fs-6" to="/visitplanner">
                    Visit Planner
                  </Link>
                </div>
                <div className=" p-0 m-0  text-center " >
                  {/* show login or user */}
              
                   <UserorLogin showslide={this.showslide}/>
                   
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
                  transform: "translateX(68vw)",
                  opacity: "0",
                  willChange: "transform, opacity",
                }}
                end={{
                  transform: "translateX(33.5vw)",
                  opacity: "1",
                  willChange: "transform, opacity",
                }}
              >
                <ul className=" m-0 p-0">
                <li  className= " nav-text my-3 text-center  d-flex justify-content-center align-items-center"onClick={this.ani} >
                          <UserorLogin/> 
                      
                 
                 </li>
                  {navitem.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          item.cname + "  my-3   d-flex justify-content-center align-items-center"
                        }
                      >
                        <Link to={item.path} onClick={()=>this.showscrollclick(item)}  className=" linkst  black  fs-5">
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
       
       
           {/* Slide city */}
     <span id="c-slide">
          <div  className="h-slide p-0 m-0  "> 
         <div className=" ph-item" style={{ backgroundImage: `url(${this.state.scity[0].media[0]})` }}>
         </div>
<div className="l-name text-center">
  <p className="black p-0 m-0 fw-bold" >{this.state.scity[0].name}</p>
  <button className="btn-r" onClick={(event) =>(window.location.href = `/city/${this.state.scity[0].id}`)} >Read More</button>
  </div>
       <div className="container-fluid mb-4">
         <div className="row">
         {this.state.scity.map((e,index)=>{
           return(
            <div key={index} className="col-6 " 
            onClick={(event) =>(window.location.href = `/city/${e.id}`)} >
              <p className="d-name black p-0 m-0" >{e.name}</p></div>
           );
         })}
                     <div  className="col-6 " 
                     onClick={(event) =>(window.location.href = '/city')} >
                       <p className="d-name black p-0 m-0 fw-bold see-more" >See More</p></div>

         </div>

    
       </div>
        </div>
        </span>


 {/* Slide adv */}
 <span id="a-slide">
          <div  className="a-slide p-0 m-0  "> 
         <div className=" ph-item" style={{ backgroundImage: `url(${ this.state.sadventure[0].media})` }}>
         </div>
<div className="l-name text-center">
  <p className="black p-0 m-0 fw-bold" >{ this.state.sadventure[0].name}</p>
  <button className="btn-r" onClick={(event) =>(window.location.href = `/adventure/${ this.state.sadventure[0].id}`)} >Read More</button>
  </div>
  <div className="container-fluid mb-4">
         <div className="row">
         { this.state.sadventure.map((e,index)=>{
           return(
            <div key={index} className="col-6 " onClick={(event) =>(window.location.href = `/adventure/${e.id}`)} ><p className="d-name black p-0 m-0" >{e.name}</p></div>
           );
         })}
            <div  className="col-6 " onClick={(event) =>(window.location.href = '/adventure')} ><p className="d-name black p-0 m-0 fw-bold see-more" >See More</p></div>

    </div>
       </div>
        </div>
        </span>



 {/* Slide login */}
 <div id="lo-slide">
   <div className="login">
 <Login setuser={this.props.setuser} />
 </div>
 </div>


  {/* Slide login */}
  
  <div id="pr-slide" >
   <div className="pro">
 <Profile/>
 </div>
 </div>
          </div>
     
        
        

      </React.Fragment>
    );
  }
}

export default Header;