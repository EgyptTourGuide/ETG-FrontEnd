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
import AddReview from "./../mostuse/addreview";
import gettoken from "./../mostuse/gettoken";
import SingleHotel from "../likes-plan/SingleHotel";
import getnotifications from "../mostuse/getnotifications";
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
class ProfilePlan extends Component {
  state = {
    plan: [],
    load: true,
    tour: [],
    comments: [],
    comment: {},
    token: JSON.parse(localStorage.getItem("user")).token,
    transport: [],
    TotalPrice: "",
    hotel:[],
  };
  async componentDidMount() {
  

    await axios.get(`${backendurl}/profile/plans`, {
        headers: { Authorization: `${this.state.token}` },
      })
      .then((res) => {
        var hotel = [];
        res.data.hotels.map((rels) => {
          hotel.push(rels.hotel);
        });
        this.setState({
          plans: res.data.plans,
          hotels: res.data.hotels,
          hotel,
          load: false,
        });
      })
      .catch((err) => {
        if (err.response.status === 403)
          gettoken().then((res) => {
            this.setState({ token: res });
          });
      });

        this.state.plan.duration.days>0?(this.handelchangeday(1)):(this.handelchangeday(0))
        
     
  }




  handelchangeday=day=> {
    var tour = [];
var daynum=this.state.daynum+day;
if(daynum>=1&& daynum<=this.state.plan.duration.days||day===0)
 {   this.state.plan.tour.map((ele) => {
      if (ele.day === `${daynum}`) {
        tour.push(ele);
      }
    });
    this.setState({ tour,daynum });}
  }
  timeconvert(tim) {
    var sline = tim.split(":");
    var time;
    if (parseInt(sline[0]) > 12) {
      time = `${parseInt(sline[0]) - 12}:${sline[1]} PM`;
    } else {
      time = `${parseInt(sline[0])}:${sline[1]} AM`;
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
  handelchange = (e) => {
    let state = { ...this.state };
 if(e.currentTarget.name!="withHotel")
    {
    state[e.currentTarget.name] = e.currentTarget.value;
    
  }
else{
  if($("#withHotel").prop("checked")) {
    state.withHotel=true;
  }
  else
  {
    state.withHotel=false;
  }
}
this.setState(state);
  
         


  };
  handlecheck() {
    $("#slidechbo").show();
  }
  handleclose() {
    $("#slidechbo").hide();
  }
  handlecheckava = async () => {
    if (this.state.start === "") {
      $(".in-start").addClass("inputerror");
    } else if (!this.state.persons > 0) {
      $(".in-start").removeClass("inputerror");
      $(".in-per").addClass("inputerror");
    } else {
      $(".in-start").removeClass("inputerror");
      $(".in-per").removeClass("inputerror");
      const check = {
        start: this.state.start,
        persons: this.state.persons,
        withHotel: this.state.withHotel,
      };
      await axios.post(`${backendurl}/plans/${this.state.plan.id}/check`, check, {headers: { Authorization: `${this.state.token}` }})
        .then((res) => {
       
          if (res.data.available) {
            this.setState({
              id: res.data.id,
              TotalPrice: res.data.TotalPrice,
              transport: res.data.transport,
              hotel: res.data.hotel,
              endDate:res.data.endDate
            });
              if(res.data.hotel>0){
                this.setState({
                  hotel: res.data.hotel,
                });
              }
            $("#check-book").addClass("d-none");
            $("#dataplan").removeClass("d-none");
          } else {
            this.setState({
              msg: res.data.msg,
            });

            $("#check-book").addClass("d-none");
            $("#notava").removeClass("d-none");

            setTimeout(() => {
              $("#notava").addClass("d-none");
              $("#check-book").removeClass("d-none");
            }, 3000);
          }
        
        })
        .catch(err => {
         
          if (err.response.status === 403)
            gettoken().then((res) => {
              this.setState({ token: res });
            });
        })
    }
  };


   handleconfirm= async()=>{
    const id={id:this.state.id};
    await axios
    .post(`${backendurl}/plans/confirm`, id, {
      headers: { Authorization: `${this.state.token}` },
    }) .then(res=>{
if(res.status===201){
  $("#dataplan").addClass("d-none");
  $("#done").removeClass("d-none");
  setTimeout(() => {
    $("#slidechbo").hide();
  }, 1500);
getnotifications();
}
    }).catch((error) => {
     
      if (error.response.status === 403)
        gettoken().then((res) => {
          this.setState({ token: res });
        });
    });
  }
  render() {
  
    if (this.state.load) {
      return <Loading />;
    }
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

          <div className="row text-center my-2">{this.state.plan.duration.days>0?(<>
          <h4 className="text-white "><i className="fas fa-chevron-left arr-changeday" 
          onClick={()=>this.handelchangeday(-1)}></i><span className="mx-3"> Day <span className="daynum">{this.state.daynum}</span></span> <i className="fas fa-chevron-right arr-changeday" onClick={()=>this.handelchangeday(1)}></i></h4>
          </>):(<span></span>)}</div>

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
                          backgroundImage: `url(${ele.place.media[0]})`,
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
                      <h6 className="text-white p-0 m-0">
                        <span style={{ color: "#FFC947" }}>From:</span>{" "}
                        {this.timeconvert(ele.from)}{" "}
                        <span style={{ color: "#FFC947" }}> To:</span>{" "}
                        {this.timeconvert(ele.to)}
                      </h6>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* BOOK */}
          <div className=" d-flex justify-content-center">
            <div>
              <button className="reser-btn" onClick={this.handlecheck}>
                <i className="fas fa-plus"></i> Reserve Now
              </button>
            </div>
          </div>

          {/* review and comments */}
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

        {/* Slide of book */}
        <div id="slidechbo">
          <div className="ch-book">
            <div
              id="check-book"
              className="ch-slide d-flex flex-column align-items-center"
            >
              <div className="d-flex  m-0 p-2 pt-3  px-4 w-100 align-items-center justify-content-between r-n-card">
                <div>
                  <h3 className="rn-h p-0 m-0">Reserve Now</h3>
                </div>
                <div>
                  <i
                    onClick={this.handleclose}
                    className="fas fa-times close"
                  ></i>
                </div>
              </div>
              <hr className="w-100 rn-h p-0 m-0 my-2 mb-3" />

              <div className="d-flex flex-column align-items-center text-center">
                <div className="d-flex flex-column text-start   p-0 m-0">
                  <label className="fw-bold p-0 m-0 fs-5 mx-2" htmlFor="from">
                    <i className="fas fa-calendar-day"></i> Chech-in
                  </label>
                  <input
                    name="start"
                    onChange={this.handelchange}
                    className=" input p-2 in-start"
                    type="date"
                    placeholder="From"
                    id="from"
                  />
                </div>

                <div className=" d-flex flex-column text-start p-0 m-0">
                  <label
                    className="fw-bold p-0 m-0 fs-5 mx-2"
                    htmlFor="persons"
                  >
                    <i className="fas fa-users"></i> persons
                  </label>
                  <input
                    name="persons"
                    onChange={this.handelchange}
                    className=" input p-2 in-per"
                    type="number"
                    placeholder="persons"
                    id="persons"
                  />
                </div>
{this.state.plan.duration.days>0?(<>
<div className="text-start w-100 mt-2 m-0 p-0">
  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="withHotel"
                      id="withHotel"
                      onChange={this.handelchange}
                    />
                    <label
                      className="  fw-bold p-0 m-0 fs-6"
                      htmlFor="withHotel"
                    >
                      With Hotel
                    </label>
                  </div>
                  </div>
</>):(<span></span>)}
                <div className="my-2 mt-3 m-0 p-0 w-100 text-center r-n-card">
                  <button
                    onClick={this.handlecheckava}
                    className="reser-btn fw-bold"
                  >
                    Check Availability <i className="far fa-check-circle"></i>
                  </button>
                </div>
              </div>
            </div>

            <div id="done" className="d-none ch-dn-slide">
              <i className="done-anima fas fa-check"></i>
            </div>

            <div id="dataplan" className="trip-data d-none d-flex flex-column p-2">
              {this.state.transport.driverName ? (
                <>
                  <div className="d-flex  m-0 p-2 pt-3  px-4 w-100 align-items-center justify-content-between r-n-card">
                    <div>
                      <h3 className="rn-h p-0 m-0">Trip Data</h3>
                    </div>
                    <div>
                      <i
                        onClick={this.handleclose}
                        className="fas fa-times close"
                      ></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold">Transport</h4>
                  </div>

                  <div
                    className="tran-img"
                    style={{
                      backgroundImage: `url(${this.state.transport.media[0]})`,
                    }}
                  ></div>
                  <div>
                    <h4>Driver Name: {this.state.transport.driverName}</h4>
                    <h4>Driver Phone: {this.state.transport.phone}</h4>
                  </div>
               
               {this.state.hotel?(<>
              <span className="singlehotel w-100 p-0 m-0">
                <SingleHotel show={true} room={this.state.hotel.room} indx={2} hotels={this.state.hotel} city={this.state.plan.city} from={this.state.start} to={this.state.endDate}></SingleHotel>
                </span>
               </>):(<span></span>)}
               
               <div className="d-flex justify-content-between w-100 my-1 m-0 px-5 p-0">
                 <div>
                  <h4 className="fw-bold p-0 m-0">Total Price</h4>
                  </div>
                  <div>
                  <h4 className="TotalPrice p-0 m-0 ">{this.state.TotalPrice}</h4>
                  </div>
                  </div>
                  <div>
                    <button  onClick={this.handleconfirm}
                    className="reser-btn fw-bold">Reserve</button>
                  </div>
                </>
              ) : (
                <span></span>
              )}
            </div>

            <div id="notava" className="d-none trip-data d-flex p-2">
              {this.state.msg != "" ? (
                <>
                <div className="d-flex flex-column text-center">
                <h4 className="opps">OPPS!</h4>
                <h4 className="fw-bold TotalPrice">{this.state.msg}</h4>
                </div>
                </>
                
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bg">
          <Footer />
        </div>
      </>
    );
  }
}


export default ProfilePlan;