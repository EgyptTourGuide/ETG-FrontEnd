import axios from "axios";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import Footer from "./../footer/footer";
import { backendurl } from "./../call-backend/URLs";
import Loading from "./../mostuse/loading";
import $ from "jquery";
import AddReview from './../mostuse/addreview';
import Rate from './../mostuse/rate';
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
  state = { plan: [], load: true, tour: [],comments: [],
    comment: {}, num: 0 };
  async componentDidMount() {
    await axios
      .get(`${backendurl}/plans/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ plan: res.data.plan, load: false });
        var comments = res.data.plan.reviews;
        comments.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        if (comments.length > 0) {
          this.setState({ comments, comment: comments[0] })};
        this.handelchangeday();
      });

      
  }
  handelchangeday() {
    var tour = [];
    this.state.plan.tour.map((ele) => {
      if (ele.day === "0") {
        tour.push(ele);
      }
    });
    this.setState({ tour });
  }
  timeconvert(tim){
    var sline=tim.split(':');
    var time;
    if(parseInt(sline[0])>12){
      time=`${parseInt(sline[0])-12}:${sline[1]} PM`
    }
    else{
      time=`${parseInt(sline[0])}:${sline[1]} AM`
    }
return time;
  }
  handelshowrevform = () => {
    $("#rev-form").fadeIn();
  };
  closereview = () => {
    $("#rev-form").fadeOut();
  };
  changecomment = (val) => {
    var num = this.state.num + val;
    var comment = {};
    if (num >= 0 && num < this.state.comments.length) {
      comment = this.state.comments[num];
      this.setState({ comment, num });
    }
  };
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
                  {this.state.plan.duration.days > 0
                    ? `${this.state.plan.duration.days} Days`
                    : `${this.state.plan.duration.hours} Hours`}
                </p>
              </div>
            </div>
          </div>

          <div className="row">{/* day>0 */}</div>
         



          <div className="row plan-tour">
            {this.state.tour.map((ele, ind) => {
              return (
                <>
                  <div
                    className={
                      ind % 2 == 0
                        ? "w-bg row d-flex my-2 m-0 p-2 align-items-center justify-content-between"
                        : "row d-flex  my-2 m-0 p-2 align-items-center justify-content-between"
                    }
                    key={ind}
                  >
                    <div
                      className="col-12 col-sm-6 d-flex  align-items-center place-tour"
                      onClick={() => {
                        window.location.assign(`/place/${ele.place.id}`);
                      }}
                    >
                      <div
                        className="city-img"
                        style={{
                          backgroundImage: `url(${ele.place.media[0]})`
                        }}
                      >
                        {" "}
                      </div>
                      <div>
                        <h4 className="name-place  p-0 m-0 mx-2">
                          {ele.place.name}
                        </h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-1 m-sm-0 p-0 d-flex justify-content-center justify-content-sm-end">
                      <h6 className="text-white p-0 m-0"><span style={{color:"#FFC947"}}>From:</span> {this.timeconvert(ele.from) } <span  style={{color:"#FFC947"}}>   To:</span> {this.timeconvert(ele.to) }</h6>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
       

      
       <div className="row">


       <div className="col-12  p-2 m-0">
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
                      <Rate rate={this.state.plan.rate}></Rate>
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
            

       <span id="rev-form">
            <div className="review-banel p-0 m-0">
              <AddReview
                questions={this.state.plan.questions}
                type={"places"}
                closereview={this.closereview}
                id={this.state.plan.id}
              ></AddReview>
            </div>

            <span className="bg-rev-panel"></span>
          </span>
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
