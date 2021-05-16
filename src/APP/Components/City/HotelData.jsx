import React, { Component } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
class HotelData extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
              
          <form id="hoteldata">
              <div className="container">
            <div className="row align-items-end justify-content-center">
              <div className="text-center ">
                <h4 className="p-0 m-1 text-white">Hotel Data</h4>
                <span className="text-danger ">{this.state.error}</span>
              </div>

              <div className="col-6 col-xl-3 text-start  p-1 m-0">
                <label
                  className=" text-white p-0 m-0 fs-5 mx-2"
                  htmlFor="adults"
                >
                  Adults
                </label>
                <input
                  name="adults"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="number"
                  placeholder="Adults"
                  id="adults"
                  
                />
              </div>

              

              <div className=" col-6 col-xl-3 text-start  p-1 m-0">
                <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="room">
                  Room
                </label>
                <input
                  name="room"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="number"
                  placeholder="Room"
                  id="room"
                 
                />
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

              <div className="col-6 col-xl-3 text-start  p-1 m-0">
                <label
                  className=" text-white p-0 m-0 fs-5 mx-2"
                  htmlFor="meals"
                >
                  Meals
                </label>
                <input 
                
                  name="meals"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="number"
                  placeholder="Meals"
                  id="meals"
                 style={{}}
                />
              </div>
<div className="col-6 col-xl-3 select p-1 m-0">
<label
                  className=" text-white p-0 m-0 fs-5 mx-2"
                
                >
                  Features
                </label>
              <Multiselect avoidHighlightFirstOption={true}  className="p-2 m-0" emptyRecordMsg='😯 No Features' onSelect={this.props.handelchange} onRemove={this.props.handelchange} closeIcon="cancel" showArrow={true} keepSearchTerm={true}  placeholder="Features" options={this.state.options}

               style={{ searchBox:{height:"35px",padding:"0 0 0 10px"}, option:{color:"#141620"},optionContainer:{borderRadius:" 25px"},chips:{backgroundColor:"#4aa96c",borderRadius:"25px"}}}  
                displayValue="name"/>
              </div>
              <div className="col-12 col-xl-1 p-0 m-0">
                <button
                  className="data-btn m-1"
                  onClick={this.filter}
                  style={{ height: "35px", fontSize: "22px" }}
                >
                  Go
                </button>
              </div>
            </div>
            </div>
          </form>
        
        </React.Fragment> );
    }
}
 
export default HotelData;