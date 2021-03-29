import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rate from "./../mostuse/rate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";

function NextArrow(props) {
  var { onClick } = props;
  return (
  
    <div
      className="arrow  h-100 d-flex align-items-center justify-content-center p-2 right  text-white fas fa-chevron-right fa-2x"
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
  constructor(props) {
    super(props);

    this.state = { adventure: this.props.adventure, pestadventure: [] };
    /*choose pest 3 of adventure*/
    let pestadventure = this.state.pestadventure;
    for (let i = 0; i < 3; i++) {
      pestadventure.push(this.state.adventure[i]);
    }
    this.tosetstate = (pestadventure) => {
      this.setState({ pestadventure });
    };
    /*end choose */
    this.state.slide = this.state.pestadventure;
  }
  componentDidMount() {
    AOS.init({
      duration: 500,
    });
    $(".slick-slider").addClass("m-0 p-0");
  }

  render() {
    const settings = {
      
      className: "center d-flex  justify-content-center  align-items-center",
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
    };
    return (
      <React.Fragment>
        <div className="container-fluid text-center m-0 p-0">
          <div className="row m-0 p-0   justify-content-center  align-items-center">
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
           
           
           
            <div className="row justify-content-center align-items-center   p-0 m-0">
              <Slider {...settings}>
                <div>
                  <div
                  onClick={event =>  window.location.href=`/adventures/${this.state.pestadventure[0].advname.toLowerCase()}`}
                    style={{
                      backgroundImage: `url(${this.state.pestadventure[0].urlimg})`,
                    }}
                    className="col mx-3 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-1 p-0 slidedata">
                      <div className="row p-0 m-0 ">
                        <h2 className=" text-white p-0 m-0">
                          {this.state.pestadventure[0].advname}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white p-0 m-0">
                          {this.state.pestadventure[0].about}
                        </p>
                      </div>
                      <div className="row p-0 m-0">
                        <Rate
                          rate={this.state.pestadventure[0].rate}
                          size={"xl"}
                        ></Rate>
                      </div>
                    </div>
                    <span className="col slideshape p-0 m-0"></span>
                  </div>
                </div>
                <div>
                  <div
                    onClick={event =>  window.location.href=`/adventures/${this.state.pestadventure[1].advname.toLowerCase()}`}
                    style={{
                      backgroundImage: `url(${this.state.pestadventure[1].urlimg})`,
                    }}
                    className="colm x-3 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-1  p-0 slidedata">
                      <div className="row p-0 m-0">
                        <h2 className=" text-white p-0 m-0">
                          {this.state.pestadventure[1].advname}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white p-0 m-0">
                          {this.state.pestadventure[1].about}
                        </p>
                      </div>
                      <div className="row p-0 m-0">
                        <Rate
                          rate={this.state.pestadventure[1].rate}
                          size={"xl"}
                        ></Rate>
                      </div>
                    </div>
                    <span className="col slideshape p-0 m-0"></span>
                  </div>
                </div>
                <div>
                  <div
                  onClick={event =>  window.location.href=`/adventures/${this.state.pestadventure[2].advname.toLowerCase()}`}
                    style={{
                      backgroundImage: `url(${this.state.pestadventure[2].urlimg})`,
                    }}
                    className="col mx-3 m-0 p-0  S-slid d-flex  align-items-end"
                  >
                    <div className="row text-start m-1  p-0 slidedata">
                      <div className="row p-0 m-0">
                        <h2 className=" text-white p-0 m-0">
                          {this.state.pestadventure[2].advname}
                        </h2>
                      </div>
                      <div className="row p-0 m-0">
                        <p className="text-white p-0 m-0">
                          {this.state.pestadventure[2].about}
                        </p>
                      </div>
                      <div className="row p-0 m-0">
                        <Rate
                          rate={this.state.pestadventure[2].rate}
                          size={"xl"}
                        ></Rate>
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
