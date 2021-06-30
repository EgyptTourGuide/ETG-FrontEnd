import React from "react";
const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div id="container">
            <div id="error-box">
              <div className="face2 fas fa-ankh">
                <div className="eye"></div>
                <div className="eye right"></div>
                <div className="mouth sad"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center p-0 m-0">
          <h1 className="fw-bold p-0 m-0" style={{ color: "#fdca40" }}>
            Oops!
          </h1>
          <p
            className="text-white p-0 m-0"
            style={{ fontSize: "15px", letterSpacing: "3px" }}
          >
            No Data Found
          </p>
        </div>

        <div className=" text-center p-0 m-0 my-2">
          <button
            className="reload-btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
