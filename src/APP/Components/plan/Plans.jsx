import React, { Component } from "react";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import "./Plans.css";
import Planshow from "./Planshow";
import Loading from "./../mostuse/loading";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import Search from "./../mostuse/Search";
class Plans extends Component {
  state = {
    plans: [],
    load: true,
    searchdata: [],
    cities: [],
    cityid: "",
    city: [],
  };
  async componentDidMount() {
    await axios
      .get(`${backendurl}/plans?city=${this.state.cityid}`)
      .then((res) => {
       
        this.setState({ plans: res.data.plans, load: false });
      });

    await axios.get(`${backendurl}/cities/plan/all`).then((res) => {
      this.setState({ cities: res.data.cities });
    });
  }
  handelshow = async (data) => {
    this.setState({ city: data, cityid: data.id, load: true });
    await axios
      .get(`${backendurl}/plans?city=${this.state.cityid}`)
      .then((res) => {
        this.setState({ plans: res.data.plans, load: false });
      });
  };
  render() {
   
    if (this.state.cities.length > 0)
    return (
        <React.Fragment>
          <Header
            {...this.props}
            setuser={this.props.setuser}
            user={this.props.user}
          />

          <div className="container-fluid p-2 m-0">
            <div className="row p-0 m-0 text-center ">
              <h2 className="fw-bold text-white">Trip</h2>
              <p className="text-white p-trip">
                This is where you’ll find your saved attractions and journeys
                and plan your journey.
              </p>
              <div>
                <Search data={this.state.cities} handelshow={this.handelshow} />
              </div>
              {this.state.city.id ? (
                <div className="d-flex  justify-content-center m-0 p-0 my-2 align-items-center">
                  <div
                    className="city-img"
                    style={{
                      backgroundImage: `url(${this.state.city.media[0]})`,
                    }}
                  >
                    {" "}
                  </div>
                  <div>
                    <h4 className="text-white p-0 m-0 mx-2">
                      {this.state.city.name}
                    </h4>
                  </div>
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <div className="row m-0 p-0">
              {this.state.load ? (
                <Loading />
              ) : (
                <Planshow plans={this.state.plans}></Planshow>
              )}
            </div>
          </div>

          <div className="footer-bg">
            <Footer />
          </div>
        </React.Fragment>
      );
    else return <Loading></Loading>;
  }
}

export default Plans;
