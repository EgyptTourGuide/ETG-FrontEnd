import React, { Component } from "react";
import Loading from "./../mostuse/loading";
import Rate from "./../mostuse/rate";
class Planshow extends Component {
  state = { plans: this.props.plans };

  data = (e) => {
    const da = `${new Date(e).getDate()}/${
      new Date(e).getMonth() + 1
    }/${new Date(e).getFullYear()}`;
    return da;
  };
  render() {
    if (this.state.plans.length > 0)
      return (
        <React.Fragment>
          {this.state.plans.map((ele, ind) => {
            return (
              <>
                <div
                  className="col-12 col-xl-4 m-0 p-2 plan-card d-flex flex-column"
                  key={ind}
                  onClick={e=>{window.location.assign(`/${this.props.path?(this.props.path):('plan')}/${ele.id}`)}}
                >
                  <div
                    className="img-card d-flex justify-content-between flex-column"
                    style={{
                      backgroundImage: `url(${ele.media?(ele.media[0]):(ele.plan.media[0]) })`}}
                  >
                    <div className="p-3 d-flex justify-content-between">
                      <div>
                        <p className="text-white">
                          <i className="fas fa-map-marked-alt"></i>{" "}
                          {ele.city.name}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <Rate rate={ this.props.type==="profile"?(ele.plan.rate):(ele.rate)} />
                      </div>
                    </div>

                    <div className="shap-p-card"></div>
                  </div>

                  <div className="card-data-plan d-flex flex-column m-0  p-3">
                    <div>
                      <p className="fw-bold p-0 m-0">{ele.title?(ele.title):(ele.plan.title)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    {this.props.type==="profile"?(<p className=" m-0 p-0 fw-bold" > <span style={{ color: "#005A8D" }}>From:</span> {this.data(ele.startDate)} </p>):(<span></span>)}
                    {this.props.type==="profile"?(<p className=" m-0 p-0 fw-bold" > <span style={{ color: "#005A8D" }}>To:</span> {this.data(ele.endDate)} </p>):(<span></span>)}
                    </div>
                    <div className="d-flex justify-content-between p-0 m-0">
                      <p className="p-0 m-0 fw-bold">
                        <i
                          className="fas fa-history"
                          style={{ color: "#FFA900" }}
                        ></i>{" "}
                        {(this.props.type==="profile"?(ele.plan.duration.days):(ele.duration.days))>0?(`${this.props.type==="profile"?(ele.plan.duration.days):(ele.duration.days)} Days`):(`${this.props.type==="profile"?(ele.plan.duration.hours):(ele.duration.hours)} Hours`)}
                      </p>
                   
                      {this.props.type==="profile"?(<p className="m-0 p-0 fw-bold" > <span style={{ color: "#7C83FD" }}><i className="fas fa-users"></i></span> {ele.persons}</p>):(<span></span>)}

                      {this.props.type==="profile"?(<p className=" m-0 p-0 fw-bold" style={{ color: "#CD113B" }}>{ele.price}</p>):(
                   
                   
                   <p className=" m-0 p-0 fw-bold">
                        From:{" "}
                        <span style={{ color: "#CD113B" }}>
                          {ele.ticket.foreign}$
                        </span>{" "}
                      </p>)}
                   
                    </div>
                  </div>
                  </div>
                
              </>
            );
          })}
        </React.Fragment>
      );
    else {
      return Loading;
    }
  }
}

export default Planshow;
