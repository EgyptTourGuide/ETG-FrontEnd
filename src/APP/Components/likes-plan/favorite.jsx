import React, { Component } from "react";
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import Loading from "../mostuse/loading";
import gettoken from "../mostuse/gettoken";
import InsideData from "./../City/Data";
import Search from "../mostuse/Search";
import "./likes-plane.css";
class Favorite extends Component {
  state = {
    favorite: {},
    load: true,
    token: JSON.parse(localStorage.getItem("user")).token,
  };

  async componentDidMount() {
    const favorite = await axios
      .get(`${backendurl}/profile/favourites`, {
        headers: { Authorization: `${this.state.token}` },
      })
      .catch((error) => {
        if (error.response.status === 403 && gettoken())
        var token="";
        gettoken().then(res=>{
          token=res;
      })
  
          this.setState({ token });
      });

    if (favorite) {
      this.setState({ favorite: favorite.data.favourites, load: false });
    }
   
  }

  render() {
    if (!this.state.load &&this.state.favorite.length>0){
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
          <div className="row align-items-center text-center " style={{ height: "56vh", width: "100%" }}>
            <Loading />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Favorite;
