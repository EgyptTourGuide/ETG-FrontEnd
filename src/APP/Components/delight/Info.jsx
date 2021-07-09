import React, { Component } from "react";
import Slider from "react-slick";
import "./adventure.css";
function NextArrow(props) {
  var { onClick } = props;
  return (
    <div
      style={{ position: "absolute", top: "0" }}
      id="right"
      className=" h-100 d-flex align-items-center justify-content-center p-2   text-white fas fa-chevron-right fa-2x"
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

class Info extends Component {
  state = { activity: this.props.activity };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="order-med row align-items-center my-1">
            <div className="col-12 col-xl-3 text-white">
              <h2 className="text-center">{this.state.activity.name}</h2>
              <p>{this.state.activity.description}</p>
            </div>

            <div className="pic-med col-12 col-xl-9">
              <Slider
                {...{
                  className: "acti-bg p-0 m-0 w-100",
                  centerMode: true,
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  autoplay: true,
                  arrows: true,
                  autoplaySpeed: 10000,
                  focusOnSelect: true,
                  pauseOnHover: true,
                  nextArrow: <NextArrow />,
                  prevArrow: <PrevArrow />,
                }}
              >
                {this.state.activity.media.map((e, ind) => {
                  return (
                    <div>
                      <div
                        key={ind}
                        className="acti-bg act-media-bg p-0 m-0"
                        style={{ backgroundImage: `url(${e})` }}
                      ></div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
