import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import Cityshow from "./../mostuse/cityshow";
import InsideData from "../City/Data";
import { Route } from "react-router-dom";
class Pestplaces extends Component {
  state = { places: [] };
  async componentDidMount() {
    if (this.props.cityid) {
      await axios
        .get(
          `${backendurl}/places?city=${this.props.cityid}&tag=${this.props.name}`
        )
        .then((res) => {
          console.log(res);
          this.setState({ places: res.data.places });
        });
    } else
      await axios
        .get(`${backendurl}/cities?tag=${this.props.name}`)
        .then((res) => {
          this.setState({ places: res.data.cities });
        });
  }
  render() {
    console.log(this.state.places);
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row text-center">
            <h2 className="text-white">Where Can Do This</h2>
          </div>
          <div className="row hide-love">
            {this.props.cityid ? (
              <Route
                render={(props) => (
                  <InsideData
                    data={this.state.places}
                    type={`place`}
                    {...props}
                  />
                )}
              />
            ) : (
              <Route
                render={(props) => (
                  <Cityshow
                    data={this.state.places}
                    id={this.props.id}
                    type="city"
                    {...props}
                  />
                )}
              />

              // <Cityshow  data={this.state.places} id={this.props.id} type="city" ></Cityshow>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pestplaces;
