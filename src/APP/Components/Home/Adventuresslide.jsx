import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import NotFound from "../mostuse/NotFound";
function NextArrow(props) {
  var { onClick } = props;
  return (
    <div id="right"
      className="h-100 d-flex align-items-center justify-content-center p-2   text-white fas fa-chevron-right fa-2x"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="h-100 d-flex align-items-center justify-content-center  p-2 left  text-white fas fa-chevron-left fa-2x"
      onClick={onClick}
    />
  );
}

class Adventuresslide extends Component {
  state = { adventure: this.props.adventure, pestadventure: [],notfound:true };

  componentDidMount() {

    if(this.state.adventure.length>0)
    {    
        /*choose pest 3 of adventure*/
        let pestadventure = this.state.pestadventure;
        for (let i = 0; i < 3; i++) {
          if(this.state.adventure[i])
          {pestadventure.push(this.state.adventure[i]);}
          else{
            pestadventure.push(this.state.adventure[0]);
          }
        }
        this.setState({ pestadventure ,notfound:false });
        /*end choose */
    
      }
      else{
        this.setState({notfound:true});
      }
    AOS.init({
      duration: 500,
    });
    $(".slick-slider").addClass("m-0 p-0");

  }

  render() {
    if(this.state.notfound){
return(<NotFound></NotFound>)
    }
    else
    return (
      <React.Fragment>
        <div className="container-fluid text-center m-0 p-0">
          <div className="row m-0 p-0  justify-content-center  align-items-center">
            <div className="row text-center text-white justify-content-center m-0 p-0">
              <h2 data-aos="fade-in" className="text-white">
                Adventures.
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                className="tex text-white"
              >
                It's Time To Escape.
              </p>
            </div>

            <div className="row justify-content-between align-items-center  p-0 m-0">
              <Slider {...{
      className: "center d-flex  justify-content-between  align-items-center p-0 m-0",
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 10000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }}>
   
                <div>
                  <div
                    onClick={(event) =>
                      (window.location.href = `/adventure/${this.state.pestadventure[0].id}`)
                    }
                    style={{backgroundImage:`url(${this.state.pestadventure[0]?(this.state.pestadventure[0].media[0]):('/images/noimg.png')})` }}
                  
                    className="col mx-2 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-0 p-0 slidedata">
                      <div className="row p-0 m-0 ">
                        <h2 className="upe text-white p-0 m-0">
                          {this.state.pestadventure[0].name}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white tex-des p-0 m-0 w-50">
                        {this.state.pestadventure[0].description.substr(0,this.state.pestadventure[0].description.indexOf(".")+1)}
                        </p>
                      </div>
                   
                    </div>
                   
                    <span className="col slideshape p-0 m-0"></span>
              
                  </div>
                </div>
              
                        
                <div>
                  <div
                    onClick={(event) =>
                      (window.location.href = `/adventure/${this.state.pestadventure[1].id}`)
                    }
                    style={{
                      backgroundImage: `url(${this.state.pestadventure[1].media})`,
                    }}
                    className="col mx-2 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-1  p-0 slidedata">
                      <div className="row p-0 m-0">
                        <h2 className="upe text-white p-0 m-0">
                          {this.state.pestadventure[1].name}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white tex-des p-0 m-0 w-50">
                          {this.state.pestadventure[1].description.substr(0,this.state.pestadventure[1].description.indexOf(".")+1)}
                        </p>
                      </div>
                    </div>
                    <span className="col slideshape p-0 m-0"></span>
                  </div>
                </div>
            
         
            
                 <div>
                  <div
                    onClick={(event) =>
                      (window.location.href = `/adventure/${this.state.pestadventure[2].id}`)
                    }
                    style={{
                      backgroundImage: `url(${this.state.pestadventure[2].media[0]})`,
                    }}
                    className="col mx-2 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-1  p-0 slidedata">
                      <div className="row p-0 m-0">
                        <h2 className="upe text-white p-0 m-0">
                          {this.state.pestadventure[2].name}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white tex-des p-0 m-0 w-50">
                          {this.state.pestadventure[2].description.substr(0,this.state.pestadventure[2].description.indexOf(".")+1)}
                        </p>
                      </div>
                  
                    </div>
                    <span className="col slideshape p-0 m-0"></span>
                  </div>
                </div>
           
             
           
           
              </Slider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Adventuresslide;




