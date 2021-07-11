import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import gettoken from "../mostuse/gettoken";
import NotFound from "../mostuse/NotFound";
import Loading from "./../mostuse/loading";
import Search from "./../mostuse/Search";
import Hotelshow from "./Hotelshow";
import Planshow from "../plan/Planshow";
class Plan extends Component {
  state = {
    plans: [],
    hotels: [],
    load: true,
    hotel: [],
    token: JSON.parse(localStorage.getItem("user")).token,
  };

  async componentDidMount() {
    await axios
      .get(`${backendurl}/profile/plans`, {
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
  }
  render() {
    if (!this.state.load) {
      console.log(this.state.hotels)
      return (
        <React.Fragment>
          <div className="container-fluid">
            {this.state.hotels.length > 0 || this.state.plans.length > 0 ? (
              <>
                {this.state.hotels.length > 0 ? (
                  <div className="row text-start">
                    <h3 className="text-white">
                      {" "}
                      <i
                        className="fas fa-hotel"
                        style={{ color: "#D99879" }}
                      ></i>{" "}
                      Hotels
                    </h3>
                    <div>
                      <div className="row my-3">
                        <Search
                          data={[...this.state.hotel]}
                          type={"hotel"}
                        ></Search>
                      </div>

                      <div className="row justify-content-center justify-content-xl-start">
                        <Hotelshow hotel={this.state.hotels}></Hotelshow>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span></span>
                )}

                {this.state.plans.length > 0 ? (
                  <>
                    <div className="row my-2 mt-4 text-start">
                      <h3 className="text-white">
                        {" "}
                        <i
                          className="fas fa-table"
                          style={{ color: "#66DE93" }}
                        ></i>{" "}
                        Plans
                      </h3>
                    </div>

                    <div className="row"></div>
                    <div className="row">
                      <Planshow
                        plans={this.state.plans}
                        type={"profile"}
                        path={"etg/plan"}
                      ></Planshow>
                    </div>
                  </>
                ) : (
                  <span></span>
                )}
              </>
            ) : (
              <NotFound></NotFound>
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <Loading></Loading>
        </>
      );
    }
  }
}

export default Plan;
