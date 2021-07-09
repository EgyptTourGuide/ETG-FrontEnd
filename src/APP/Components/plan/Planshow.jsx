import React, { Component } from "react";
import Loading from "./../mostuse/loading";
import Rate from "./../mostuse/rate";
class Planshow extends Component {
  state = { plans: this.props.plans };


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
                  onClick={e=>{window.location.assign(`/plan/${ele.id}`)}}
                >
                  <div
                    className="img-card d-flex justify-content-between flex-column"
                    style={{
                      backgroundImage: `url(${ele.media[0]})`}}
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
                        <Rate rate={ele.rate} />
                      </div>
                    </div>

                    <div className="shap-p-card"></div>
                  </div>

                  <div className="card-data-plan d-flex flex-column m-0  p-3">
                    <div>
                      <p className="fw-bold p-0 m-0">{ele.title}</p>
                    </div>
                    <div className="d-flex justify-content-between p-0 m-0">
                      <p className="p-0 m-0 fw-bold">
                        <i
                          className="fas fa-history"
                          style={{ color: "#FFA900" }}
                        ></i>{" "}
                        {ele.duration.days>0?(`${ele.duration.days} Days`):(`${ele.duration.hours} Hours`)}
                      </p>
                      <p className="ms-2 m-0 p-0 fw-bold">
                        From:{" "}
                        <span style={{ color: "#CD113B" }}>
                          {ele.ticket.foreign}$
                        </span>{" "}
                      </p>
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
