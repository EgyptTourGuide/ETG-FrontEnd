import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rate from "../mostuse/rate";
import AddToFav from "./../mostuse/AddToFav";
import $ from "jquery";
import getfavorite from "../mostuse/getfavorite";
import removefev from "../mostuse/removefav";
import Loading from "../mostuse/loading";
class InsideData extends Component {
  state = { type: this.props.type, fav: [] };
  constructor(props) {
    super(props);

    this.getfav();
  }

  async getfav() {
    if (JSON.parse(localStorage.getItem("user"))) {
      await getfavorite().then((res) => {this.setState({ fav: res });});}
  }
  changeicon = async (id, type) => {
    if ($(`#${id}`).hasClass("far") && !$(`#${id}`).hasClass("fas")) {
      $(`#${id}`).removeClass("far");
      $(`#${id}`).addClass("fas");

      type ? AddToFav(type, id) : AddToFav(this.state.type, id);
    } else {
      $(`#${id}`).removeClass("fas");

      $(`#${id}`).addClass("far");
      await removefev(id);
      this.getfav();
    }
  };
  render() {
    AOS.init({ duration: 500 });
    if (this.state.fav.length>0||this.state.fav===[] && this.props.data) {
      return (
        <React.Fragment>
          <div className=" container-fluid   m-0 p-0 my-2">
            <div className="row justify-content-center p-0 m-0">
              {this.props.data.map((e, index) => {
                var rate = 0;
                if (e.rate >= 0) {
                  rate = e.rate;
                } else {
                  rate = 0;
                }

                return (
                  <div
                    key={index}
                    e-aos="zoom-in"
                    style={{ backgroundImage: `url(${e.media[0]})` }}
                    className="s-data d-flex align-items-end  col-11 col-md-5 col-xl-5 city-card text-white p-2 m-2"
                  >
                    <div className="data-card d-flex align-content-between flex-wrap ">
                      <div className="row justify-content-between align-items-center">
                        <div>
                          <h4 className="fw-bold upe p-0 m-0">{e.name}</h4>
                        </div>
                        <div className="">
                          <Rate rate={rate} size={"sm"}></Rate>{" "}
                        </div>
                      </div>
                      <div
                        id="btnandlove"
                        className="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <button
                            className="data-btn"
                            onClick={(event) => {
                              this.state.type === "adventure"
                                ? (window.location.href = `/adventure/${e.id}/${this.props.cityid}`)
                                : (window.location.href = `/${
                                    e.type ? e.type : this.state.type
                                  }/${e.id}`);
                            }}
                          >
                            Read More
                          </button>
                        </div>
                        <div id="love-ptn-city" className="p-0 m-0 ">
                          {this.state.fav.filter((ele) => {
                           ( ele.id === e.id) ? $(`#${e.id}`).addClass("fas")
                              : $(`#${e.id}`).addClass("far");
                              return;

                              
                          })}

                          <i
                            id={e.id}
                            className="far fa-heart text-danger fa-2x"
                            onClick={() => this.changeicon(e.id, e.type)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Loading />;
    }
  }
}

export default InsideData;
