import React, { Component } from "react";
import Loading from "../mostuse/loading";
import InsideData from "./../City/Data";
import Search from "../mostuse/Search";
import "./likes-plane.css";
import getfavorite from "../mostuse/getfavorite";
class Favorite extends Component {
  state = {
    favorite: {},
    load: true,
  };

  async componentDidMount() {
    const favorite = await getfavorite();

    if (favorite) {
      this.setState({ favorite: favorite, load: false });
    }
  }

  render() {
    if (!this.state.load && this.state.favorite.length > 0) {
      return (
        <React.Fragment>
          <span className="mt-3 my-1">
            <Search data={this.state.favorite}></Search>
          </span>
          <InsideData data={this.state.favorite}></InsideData>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className="row align-items-center text-center "
            style={{ height: "56vh", width: "100%" }}
          >
            <Loading />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Favorite;
