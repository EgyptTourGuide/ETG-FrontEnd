import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import Loading from "../mostuse/loading";
import gettoken from "../mostuse/gettoken";
class Plan extends Component {
  state = {
    plans: [],
    hotels: [],
    load: true,
    token: JSON.parse(localStorage.getItem("user")).token,
  };

  async componentDidMount() {
    await axios
      .get(`${backendurl}/profile/plans`, {
        headers: { Authorization: `${this.state.token}` },
      })
      .then((res) => {
        this.setState({
          plans: res.data.plans,
          hotels: res.data.hotels,
          load: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403 && gettoken()) var token = "";
        gettoken().then((res) => {
          token = res;
        });

        this.setState({ token });
      });
  }

  data = (e) => {
    const da = `${new Date(e).getDate()}/${
      new Date(e).getMonth() + 1
    }/${new Date(e).getFullYear()}`;
    return da;
  };
  render() {
    console.log(this.state.hotels);
    return (
      <React.Fragment>
        <div className="container">
         
         {this.state.hotels.length>0?(
          <div className="row text-start">
            <h3 className="text-white">
              {" "}
              <i className="fas fa-hotel" style={{color:"#D99879"}}></i> Hotels
            </h3>
            <div>
              <div className="row  justify-content-center justify-content-xl-start">
                {this.state.hotels.map((hotels, ind) => {
                  return (
                    <>
                      {hotels.hotel.rooms.map((room, indx) => {
                        return (
                          <>
                            <div
                              className="col-5 col-xl-3  card-hotel m-2 d-flex p-2 flex-column justify-content-between"
                            onClick={()=>{window.location.assign(`/room/${room.id}/${hotels.hotel.id}`)}}
                              key={indx + ind}
                              style={{
                                backgroundImage: `url(${room.media[0]})`,
                              }}
                            >
                              
                              <div className="d-flex align-items-center justify-content-between card-data">
                                <h4 className="text-white fw-bold p-0 m-0">
                                  {hotels.hotel.name}
                                </h4>
                                <p className="text-white fw-bold p-0 m-0">
                                  {" "}
                                  <i className="fas fa-map-marker-alt"></i>{" "}
                                  {hotels.city.name}
                                </p>
                              </div>

                              <div className="d-flex align-items-end justify-content-between card-data">
                                <div className="d-flex align-items-center p-0 m-0">
                                  <div>
                                    <i className="from-to-color far fa-calendar me-2"></i>
                                  </div>
                                  <div>
                                    <p className="text-white p-0 m-0 "><span className="from-to-color fw-bold">From: </span>{" "}{this.data(room.from)} </p>
                                    <p className="text-white p-0 m-0 "><span className="from-to-color fw-bold">To:</span> {this.data(room.to)}</p>
                                  </div>
                                </div>
                             
                                <div >
                                <p className="p-0 m-0 fw-bold price-color">{room.price}$</p>
                              </div>
                              </div>

                              
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
):(<span></span>)}

{this.state.plans.length>0?(
          <div className="row text-start">

          <h3 className="text-white">
              {" "}
              <i className="fas fa-table" style={{color:"#66DE93"}}></i> Plans
            </h3>
        
          </div>
      ):(<span></span>)}
      
      </div>
      </React.Fragment>
    );
  }
}

export default Plan;
