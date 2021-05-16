import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rate from "../mostuse/rate";
import AddToFav from "./../mostuse/AddToFav";
import $ from "jquery";
import getfavorite from "../mostuse/getfavorite";
import removefev from "../mostuse/removefav";
import Loading from "../mostuse/loading";
import NotFound from './../mostuse/NotFound';
class InsideData extends Component {
  state = { type: this.props.type, fav: [] };
 
  changeicon =async (id, type) => {
    
    if ($(`#${id}`).hasClass("far") && !($(`#${id}`).hasClass("fas"))) {
      console.log("d")
      $(`#${id}`).removeClass("far");
      $(`#${id}`).addClass("fas");

      type ? AddToFav(type, id) : AddToFav(this.state.type, id)
    } else {
      console.log("a")
      $(`#${id}`).removeClass("fas");
      
      $(`#${id}`).addClass("far");
     await removefev(id);
      this.componentDidMount();
    }
  };
 async componentDidMount(){
   if(JSON.parse(localStorage.getItem('user'))){
await getfavorite().then((res) =>{this.setState({ fav: res }); });}


 }
  render() {
    AOS.init({ duration: 500 });
if(this.state.fav&&this.props.data.length>0 )
{ 
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
                  style={{ backgroundImage: `url(${e.media})` }}
                  className="s-data d-flex align-items-end  col-11 col-md-5 col-xl-5 city-card text-white p-2 m-2"
                >
                  <div className="data-card d-flex align-content-between flex-wrap ">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                      <div>
                        <h4 className="fw-bold upe p-0 m-0">{e.name}</h4>
                      </div>
                      <div>
                        <Rate rate={rate} size={"sm"}></Rate>{" "}
                      </div>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <button
                          className="data-btn"
                          onClick={(event) =>
                            (window.location.href = `/${
                              e.type ? e.type : this.state.type
                            }/${e.id}`)
                          }
                        >
                          Read More
                        </button>
                      </div>
                      <div className="p-0 m-0 ">
                        {this.state.fav.filter((ele) => {
                          ele.id == e.id
                            ? $(`#${e.id}`).addClass("fas")
                            : $(`#${e.id}`).addClass("far");
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
    );}
    else{
      return(
      <Loading/>
      );
    }
  }
}

export default InsideData;
