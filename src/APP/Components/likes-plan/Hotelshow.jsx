import React, { Component } from 'react'
import axios from 'axios';
import { backendurl } from './../call-backend/URLs';
class Hotelshow extends Component {
    state = {  }
    data = (e) => {
        const da = `${new Date(e).getDate()}/${
          new Date(e).getMonth() + 1
        }/${new Date(e).getFullYear()}`;
        return da;
      };
      location = async (id) => {
        await axios.get(`${backendurl}/hotels/${id}`).then((res) => {
          window.open(
            `https://www.google.com/maps?q=${res.data.location.coordinates[0]},${res.data.location.coordinates[1]}`,
            "_blank"
          );
        });
      };
    render() { 
        return (  <>
        





        {this.props.hotel.map((hotels, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              {hotels.hotel.rooms.map((room, indx) => {
                                return (
                                  <span className="col-12 col-xl-4 p-1 m-0">
                                    <div
                                      className="card-hotel  d-flex p-2  flex-column justify-content-between"
                                      key={indx}
                                      style={{
                                        backgroundImage: `url(${
                                          room.media.length > 0
                                            ? room.media[0]
                                            : "/images/noimg.png"
                                        })`,
                                      }}
                                    >
                                      <div className="d-flex align-items-center justify-content-between card-data">
                                        <h5
                                          className="text-white fw-bold p-0 m-0 loca-hotel"
                                          onClick={() => {
                                            window.location.assign(
                                              `/hotel/${hotels.hotel.id}`
                                            );
                                          }}
                                        >
                                          {hotels.hotel.name}
                                        </h5>
                                        <p
                                          className="text-white fw-bold p-0 m-0 loca-hotel"
                                          onClick={() =>
                                            this.location(hotels.hotel.id)
                                          }
                                        >
                                          {" "}
                                          <i className="fas fa-map-marker-alt"></i>{" "}
                                          {hotels.city.name}
                                        </p>
                                      </div>

                                      <div className="d-flex align-items-end justify-content-between card-data">
                                        <div className="d-flex align-items-center p-0 m-0">
                                          <div>
                                            <p className="text-white p-0 m-0 ">
                                              <span className="from-to-color fw-bold p-0 m-0">
                                                From:
                                              </span>
                                              {this.data(room.from)}
                                            </p>
                                            <p className="text-white p-0 m-0 ">
                                              <span className="from-to-color fw-bold p-0 m-0">
                                                To:
                                              </span>
                                              {this.data(room.to)}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="text-end">
                                          <p className="p-0 m-0 fw-bold price-color">
                                            {room.price}$
                                          </p>

                                          <button
                                            className="p-0 m-0 btn-read"
                                            onClick={() => {
                                              window.location.assign(
                                                `/room/${room.id}/${hotels.hotel.id}`
                                              );
                                            }}
                                          >
                                            Read more
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
          





        </>);
    }
}
 
export default Hotelshow;