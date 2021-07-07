import React, { Component } from "react";
import "./Notfound404.css";
class Notfound404 extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="page404 flex-column p-0 m-0">
          <div className="row text-center px-5  p-0 m-0">
            <p className="p-404  p-0">404</p>
            <p className="text-white px-4 p-0 m-0 mb-3">
              <span className="oops">OOPS!</span> The page you're looking for
              can't be found.
            </p>
          </div>
          <div>
            <div className="s-hand">
              <img src="/images/hand.png" className="hand" alt="" />
            </div>
            <div className="s-repot">
              <img src="/images/repot.png" className="report" alt="" />
            </div>
            
          </div>

          <div>
            <button
              className="btn-home"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              home
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Notfound404;
