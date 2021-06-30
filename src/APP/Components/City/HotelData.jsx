import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { backendurl } from "./../call-backend/URLs";
import axios from "axios";
import Fromto from './FromTo';
class HotelData extends Component {
  state = {update:true};
  async componentDidMount() {
    await axios.get(`${backendurl}/settings/hotels/feature`).then((res) => {
      var data = [];
      res.data.features.map((e, ind) => {
        data.push({ name: e, id: ind });
        return(e);
      });
      this.setState({ options: data });
    });
  }
  handelupdate=()=>{
    this.props.handlefromto();
this.setState({update:false});
  }
  render() {
    return (
      <React.Fragment>
        <form id="hoteldata">
          <div className="container">
       
            <div className="row align-items-end justify-content-center">
              <div className="text-center ">
                <h4 className="p-0 m-1 text-white">Hotel Data</h4>
                <span className="text-danger ">{this.props.error}</span>
              </div>

              <div className="w-100 d-flex align-items-end justify-content-center m-0 p-0 ">
       {(localStorage.getItem("visitduration")&&this.state.update)?
       (<div className="text-center">
          <p className="text-white" style={{fontSize:"1em"}}>From <span style={{color:"#ffc93c"}}>{ JSON.parse(localStorage.getItem("visitduration")).from}</span> To <span style={{color:"#ffc93c"}}>{ JSON.parse(localStorage.getItem("visitduration")).to}</span>     <i
            className="update-icon d-inline fas fa-pencil-alt p-0 mx-1 m-0"
  
            onClick={this.handelupdate}
          ></i></p>
       </div>):
       (<Fromto handelchange={this.props.handelchange}></Fromto>)}
       </div>

              <div className="col-6 col-xl-3 text-start  p-1 m-0">
                <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="bed">
                  Bed
                </label>
                <input
                  name="bed"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="number"
                  placeholder="Bed"
                  id="bed"
                />
              </div>

              <div className="col-6 col-xl-3 select p-1 m-0">
                <label className=" text-white p-0 m-0 fs-5 mx-2">
                  Features
                </label>
                <Multiselect
                name="features"
                  avoidHighlightFirstOption={true}
                  className="p-2 m-0"
                  emptyRecordMsg="😯 No Features"
                  onSelect={this.props.handelchange}
                  onRemove={this.props.handelchange}
                  closeIcon="cancel"
                  showArrow={true}
                  keepSearchTerm={true}
                  placeholder="Features"
                  displayValue="name"
                  options={this.state.options}
                  style={{
                    searchBox: { height: "35px", padding: "0 0 0 10px" },
                    option: { color: "#141620" },
                    optionContainer: { borderRadius: " 25px" },
                    chips: { backgroundColor: "#4aa96c", borderRadius: "25px" },
                  }}
                  
                />
              </div>
              <div className="col-12 col-xl-3 p-0 m-0">
                <button
                  className="data-btn m-1"
                  onClick={this.props.handlefilter}
                  style={{ height: "35px", fontSize: "22px" }}
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default HotelData;
