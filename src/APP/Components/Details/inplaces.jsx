import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./place.css";
import { backendurl } from "./../call-backend/URLs";
import Loading from "../mostuse/loading";
import axios from "axios";
import $ from "jquery";
import Rate from "./../mostuse/rate";
import AddReview from "../mostuse/addreview";
import Map from "./../mostuse/Map";

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
  className: "p-m-slide p-media-bg p-0 m-0",
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

class InPlaces extends Component {
  state = {
    placein: {},
    wait: true,
    price: [],
    cprice: [],
    comments: [],
    comment: {},
    num: 0,
  };

  async componentDidMount() {
    const placein = await axios.get(`${backendurl}/places/${this.props.path}`);
    if (placein) {
      const cprice = placein.data.place.ticket.egyptian;

      var comments = placein.data.place.reviews;
      comments.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      this.setState({
        placein: placein.data.place,
        price: placein.data.place.ticket,
        cprice,
        wait: false,
      });
      if (comments.length > 0) {
        this.setState({
          comments,
          comment: comments[0],
          rate: comments[0].rate,
        });
      }
    }

    $("#egy").addClass("sel");
  }

  togettime = (d) => {
    var dateFormat = require("dateformat");
    var time = new Date(d);
    const realtime = dateFormat(time, "mediumDate");
    return realtime;
  };
  changecomment = (val) => {
    var num = this.state.num + val;
    var comment = {};
    if (num >= 0 && num < this.state.comments.length) {
      comment = this.state.comments[num];
      this.setState({ comment, num });
    }
  };
  changecurrency = (cu) => {
    var cprice = [];
    if (cu === "eg") {
      cprice = this.state.price.egyptian;
      $("#egy").addClass("sel");
      $("#fore").removeClass("sel");
    } else {
      cprice = this.state.price.foreign;
      $("#egy").removeClass("sel");
      $("#fore").addClass("sel");
    }
    this.setState({ cprice });
  };
  time = (e) => {
    const min = parseFloat(e.substring(3, 6));
    const ho = parseInt(e.substring(0, 2));
    var time = "";
    if (ho < 12) {
      if (min < 10) {
        time = ho + ":0" + min + "AM";
      } else {
        time = ho + ":" + min + "AM";
      }
    } else if (ho === 12) {
      if (min < 10) {
        time = ho + ":0" + min + "PM";
      } else {
        time = ho + ":" + min + "PM";
      }
    } else if (ho > 12) {
      if (min < 10) {
        time = ho - 12 + ":0" + min + "PM";
      } else {
        time = ho - 12 + ":" + min + "PM";
      }
    }
    return time;
  };

  handelshowrevform = () => {
    $("#rev-form").fadeIn();
  };
  closereview = () => {
    $("#rev-form").fadeOut();
  };
  render() {
    if (!this.state.wait && this.state.placein) {
      return (
        <React.Fragment>
       
          <Slider {...settings}>
            {this.state.placein.media.map((e, ind) => {
              return (
                <div key={ind}>
                  <div
                    className="p-media-bg p-0 m-0"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              );
            })}
          </Slider>

          <div className="container-fluid px-3 px-xl-5 m-0">
            <div className="row text-center">
              <h2 className="text-white fw-bold my-2 mt-4 m-0 p-0">
                {this.state.placein.name}
              </h2>
            </div>
            <div className="row">
              <p className="text-white">{this.state.placein.description}</p>
            </div>
            {this.state.placein.requirements.length > 0 ? (
              <div className="row">
                <h3 className="text-white">
                  <i className="fas fa-exclamation text-danger me-1"></i>{" "}
                  Requirements
                </h3>
                <ul className="">
                  {this.state.placein.requirements.map((ele, ind) => {
                    return (
                      <li className=" text-white" key={ind}>
                        {" "}
                        <span className="text-danger">-</span> {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <span></span>
            )}
            <div className="d-flex flex-column p-0 my-3 m-0 ">
              <div>
                <h2 className="text-white ">
                  <i
                    className="fas  fa-ticket-alt fa-sm"
                    style={{ transform: " rotate(-45deg)" }}
                  ></i>{" "}
                  Tickets
                </h2>
              </div>

              <div className="d-flex  justify-content-between">
                <div>
                  <h2 className="price mx-2">
                    {this.state.cprice.price === 0
                      ? "Free"
                      : this.state.cprice.price}
                    <span style={{ textTransform: "uppercase" }}>
                      {this.state.cprice.price === 0 ? (
                        <></>
                      ) : (
                        this.state.cprice.currency
                      )}
                    </span>
                  </h2>
                </div>
                <div>
                  <img
                    id="egy"
                    className=" p-0 m-0 mx-2"
                    src="/images/egypt.png"
                    height="35px"
                    width="35px"
                    alt="Egypt"
                    onClick={() => this.changecurrency("eg")}
                  />
                  <img
                    id="fore"
                    className=" p-0 m-0 mx-2"
                    src="/images/foreign.png"
                    height="35px"
                    width="35px"
                    alt="Egypt"
                    onClick={() => this.changecurrency("fore")}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row my-2">
                <div className="col-3 col-xl-2">
                  <h2 className="text-white me-5">Timetable</h2>
                </div>
                <div id="ttable" className=" col-10 d-flex flex-wrap">
                  {this.state.placein.hours.map((e, index) => {
                    return (
                      <React.Fragment>
                        <div
                          key={index}
                          className="col-12 m-sm-e-3 col-sm-6  col-lg-4 col-xl-3 d-inline"
                        >
                          <h5 className="text-white p-0 m-0 mx-2">{e.day}</h5>
                          <p className="text-white p-0 m-0 mx-2">
                            {" "}
                            From{" "}
                            <span className="price">
                              {this.time(e.from)}
                            </span>{" "}
                            To <span className="price">{this.time(e.to)}</span>
                          </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* map and rate */}
            <div className="row  p-0 m-0 align-items-end">
              <div className=" col-12 col-xl-6 p-2 m-0 ">
                <Map location={this.state.placein.location.coordinates} />
              </div>

              <div className="col-12  col-xl-6 p-2 m-0">
                <div>
                  <h2 className="text-white ">Rate</h2>
                  <div className="d-flex  justify-content-between align-items-center my-3">
                    <div>
                      <p
                        className="text-warning p-0 m-0 d-inline"
                        style={{ fontSize: "10px" }}
                      >
                        Rate
                      </p>
                      <Rate rate={this.state.placein.rate}></Rate>
                    </div>

                    <div>
                      <button
                        className="log-btn me-2 text-white"
                        onClick={this.handelshowrevform}
                      >
                        Add Review
                      </button>
                    </div>
                  </div>
                </div>
                {/*  comment */}

                {this.state.comment.id ? (
                  <div className="d-flex align-items-center  justify-content-between rev  p-3">
                    <div
                      className=" col-1 text-start"
                      onClick={() => this.changecomment(-1)}
                    >
                      <i className="c-arrow text-white fas fa-caret-left"></i>
                    </div>
                    <div className="col-10">
                      <div className="d-flex  justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div>
                            {this.state.comment.user.picture ? (
                              <img
                                src={this.state.comment.user.picture}
                                width="50px"
                                height="50px"
                                className="rev-img-user"
                                alt={this.state.comment.user.name}
                              />
                            ) : (
                              <span></span>
                            )}
                          </div>
                          <div className="d-flex flex-column">
                            <div>
                              <p className="text-white p-0 m-0 mx-2 sm-s-n">
                                {this.state.comment.user.name}
                              </p>
                            </div>
                            <div>
                              <p
                                className="text-white p-0 m-0 mx-2 sm-s-n"
                                style={{ fontSize: "12px", opacity: "0.5" }}
                              >
                                {this.togettime(this.state.comment.createdAt)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sm-s-n">
                          <Rate rate={this.state.comment.rate}></Rate>
                        </div>
                      </div>
                      <p className="text-white mt-2 p-0 m-0">
                        {this.state.comment.comment}
                      </p>
                    </div>

                    <div
                      className="col-1 text-end p-0 m-0"
                      onClick={() => this.changecomment(1)}
                    >
                      <i className="c-arrow text-white fas fa-caret-right"></i>
                    </div>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
          <span id="rev-form">
            <div className="review-banel p-0 m-0">
              <AddReview
                questions={this.state.placein.questions}
                type={"places"}
                closereview={this.closereview}
                id={this.state.placein.id}
              ></AddReview>
            </div>

            <span className="bg-rev-panel"></span>
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <div className="full-screen-err " style={{ width: "95vw" }}>
            <Loading />
          </div>
        </>
      );
    }
  }
}

export default InPlaces;
