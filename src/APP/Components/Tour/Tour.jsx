import React, { Component } from "react";
import "./tour.css";
import Header from "./../Header/Header";
import Footer from "./../footer/footer";
import { Multiselect } from "multiselect-react-dropdown";
 
class Tour extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.match.params);
  }
  tourinput = () => {};
  render() {
    return (
      <React.Fragment>
        <Header
          {...this.props}
          setuser={this.props.setuser}
          user={this.props.user}
        ></Header>

        <div className="container-fluid data-z-in">
          <div className="row">
            <div className="col-12 col-xl-4 text-white align-items-center d-flex my-4 justify-content-center">
              <span>
                <span className="r-e font-face-rh ">Egypt</span>
                <br />
                <span className="r-tg font-face-ab">TOUR GUIDE</span>
              </span>
            </div>
            <div className="col-12 col-xl-8 row justify-content-center">
              <div className="select p-1 m-0 text-center">
                <h3 className="text-white">Destination</h3>
                <span className="row text-start">
                  <label className=" text-white p-0 m-0 fs-5 ps-3 mx-2">
                    Your Destination
                  </label>
                  <Multiselect
                    avoidHighlightFirstOption={true}
                    className="p-2 m-0"
                    emptyRecordMsg="😯 No Destination"
                    onSelect={this.props.handelchange}
                    onRemove={this.props.handelchange}
                    closeIcon="cancel"
                    showArrow={true}
                    keepSearchTerm={true}
                    placeholder="Destination"
                    options={this.state.options}
                    style={{
                      searchBox: { height: "35px", padding: "0 0 0 10px" },
                      option: { color: "#141620" },
                      optionContainer: { borderRadius: " 25px" },
                      chips: {
                        backgroundColor: "#4aa96c",
                        borderRadius: "25px",
                      },
                    }}
                    displayValue="name"
                  />
                </span>
              </div>

              <div className="p-0 m-0">
                <div className="text-center">
                  <h4 className="p-0 m-1 w-100 text-white">Visit Duration</h4>
                  <span className="text-danger ">{this.state.error}</span>
                </div>

                <div className="row flex-wrap p-0 m-0">
                  <div className="d-flex col-12 col-xl-6  p-0 m-0 ">
                    <div className=" text-start w-100  p-0 m-1">
                      <label
                        className=" text-white p-0 m-0 fs-5 mx-2"
                        htmlFor="from"
                      >
                        From
                      </label>
                      <input
                        name="from"
                        onChange={this.handelchange}
                        className=" input p-2"
                        type="date"
                        placeholder="From"
                        id="from"
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className=" text-start w-100 p-0 m-1">
                      <label
                        className=" text-white p-0 m-0 fs-5 mx-2"
                        htmlFor="from"
                      >
                        Time
                      </label>
                      <input
                        name="time"
                        onChange={this.handelchange}
                        className=" input p-2"
                        type="time"
                        placeholder="From"
                        id="from"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className=" col-12 col-xl-6 text-start  p-0 ">
                    <label
                      className=" text-white p-0 m-0 fs-5 mx-2"
                      htmlFor="to"
                    >
                      to
                    </label>
                    <input
                      name="to"
                      onChange={this.handelchange}
                      className=" input p-2"
                      type="date"
                      placeholder="To"
                      id="to"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="p-0 m-1 text-white">Hotel Data</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="havehotel"
                      value={true}
                      id="havehotel"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="havehotel"
                    >
                      I Have a Hotel
                    </label>
                  </div>
                </div>
                     
         
              
            <div className="row align-items-end justify-content-center">
              <div className="col-6 col-xl-4 text-start  p-1 m-0">
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

              

              <div className=" col-6 col-xl-4 text-start  p-1 m-0">
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

              <div className="col-6 col-xl-4 text-start  p-1 m-0">
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

              <div className="col-6  text-start  p-1 m-0">
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
<div className="col-12 col-xl-6 select p-1 m-0">
<label
                  className=" text-white p-0 m-0 fs-5 mx-2"
                
                >
                  Features
                </label>
              <Multiselect avoidHighlightFirstOption={true}  className="p-2 w-100 m-0" emptyRecordMsg='😯 No Features' onSelect={this.props.handelchange} onRemove={this.props.handelchange} closeIcon="cancel" showArrow={true} keepSearchTerm={true}  placeholder="Features" options={this.state.options}

               style={{ searchBox:{height:"35px",padding:"0 0 0 10px",width:"100%"}, option:{color:"#141620"},optionContainer:{borderRadius:" 25px"},chips:{backgroundColor:"#4aa96c",borderRadius:"25px"}}}  
                displayValue="name"/>
              </div>
            </div>
           
         
        
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="p-0 m-0 text-white">
                    Airport and Transportation
                  </h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="havehotel"
                      value={true}
                      id="havehotel"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="havehotel"
                    >
                      I Have a Transportation
                    </label>
                  </div>
                </div>

                <div className="d-flex col-12 text-start align-items-end  p-0 m-1">
                  <div className="col-6 col-xl-8">
                    <label
                      className=" text-white p-0 m-0 fs-5 mx-2"
                      htmlFor="to"
                    >
                      Ariport
                    </label>
                    <input
                      name="to"
                      onChange={this.handelchange}
                      className=" input p-2"
                      type="text"
                      placeholder="Ariport"
                      id="to"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="col-6 col-xl-4 d-flex align-items-center justify-content-center">
                    <p
                      style={{ fontSize: "17px" }}
                      className="text-white p-0  m-0"
                    >
                      Transportation <i className="fas fa-bus ms-2"></i>{" "}
                      <i className="fas fa-car ms-2"></i>
                    </p>
                  </div>
                </div>
        
        
                <div className="d-flex col-12 text-start align-items-end  p-0  m-1">
                  <div className="col-6 col-xl-8 p-0 m-0">
                    <label
                      className=" text-white p-0 m-0 fs-5 mx-2"
                      htmlFor="to"
                    >
                      Budget
                    </label>
                    <input
                      name="to"
                      onChange={this.handelchange}
                      className=" input p-2"
                      type="text"
                      placeholder="Range of Budget"
                      id="to"
                      style={{ width: "100%" }}
                    />
                  </div>
           
               <div className="col-6 col-xl-4 p-0 m-0">
                <button
                  className="data-btn mx-1 "
                  onClick={this.filter}
                  style={{ height: "35px", fontSize: "22px" ,width:"100%"}}
                >
                  Go
                </button>
              </div>
              
                  </div>
              </div>
            </div>
          </div>
        </div>

<div className="gradiant-bg"></div>
        <video autoPlay muted loop id="bgVideo">
          <source src="/images/tourbg.mp4" type="video/mp4" />
        </video>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Tour;
