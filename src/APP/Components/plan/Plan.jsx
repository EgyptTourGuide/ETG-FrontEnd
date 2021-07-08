import axios from "axios";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import Footer from "./../footer/footer";
import { backendurl } from "./../call-backend/URLs";
import Loading from "./../mostuse/loading";
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

const settings = {
  className: " plan-media p-0 m-0",
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
};

class Plan extends Component {
  state = { plan: [], load: true };
  async componentDidMount() {
    await axios
      .get(`${backendurl}/plans/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ plan: res.data.plan, load: false });
      });
  }
  render() {
    if (this.state.load) {
      return <Loading />;
    }
    console.log(this.state.plan);
    return (
      <>
        <Header
          {...this.props}
          setuser={this.props.setuser}
          user={this.props.user}
        />

        <div className="container-fluid p-4 m-0">
          <div className="row m-0 p-0">
            <h4 className="text-white fw-bold">{this.state.plan.title}</h4>
          </div>
          <div className="row  p-0 m-0">
            <Slider {...settings}>
              {this.state.plan.media.map((e, ind) => {
                return (
                  <div key={ind}>
                    <div
                      className="plan-media w-100 p-0 m-0"
                      style={{ backgroundImage: `url(${e})` }}
                    ></div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <div className="row my-4 mt-5 p-0 m-0">
              <h5 className="text-white m-0 p-0">
                {this.state.plan.description}
              </h5>
            </div>
            <div className="my-2 m-0 p-0">
              <h3 className="text-white p-0 m-0 ">Features</h3>
              {this.state.plan.features.map((ele, ind) => {
                return (
                  <p key={ind} className="text-white p-0 m-0">
                    <span style={{ color: "#CD113B" }}>-</span> {ele}
                  </p>
                );
              })}
            </div>
            <div
              className="d-flex justify-content-between my-2 p-0 m-0"
              style={{ fontSize: "20px" }}
            >
              <div>
                <h3 className="text-white fw-bold p-0 m-0">Tour</h3>
              </div>
              <div>
                <p className="text-white">
                  <i
                    className="far fa-calendar-alt"
                    style={{ color: "#FFA900" }}
                  ></i>{" "}
                  {this.state.plan.duration.days} Days
                </p>
              </div>
            </div>
          </div>

          <div className="row">
              <div className=""></div>
          </div>
        </div>

        <div className="footer-bg">
          <Footer />
        </div>
      </>
    );
  }
}

export default Plan;