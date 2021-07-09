import React from "react";
const Profile = () => {
  function logout() {
    localStorage.removeItem("user");
    window.location.replace("/");
  }
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return (
      <React.Fragment>
        
        <div  className="text-start flex-container-c pro-s-solve ">
          <div className="d-flex align-items-center">
            <div>
              {user.picture ? (
                <img
                  className="profile "
                  src={user.picture}
                  alt={user.fullname}
                />
              ) : (
                <span></span>
              )}
            </div>
            <div className="text-start mx-2 ">
              <p
                style={{ fontSize: "100%", textTransform: "capitalize" }}
                className="p-0 m-0 black fw-bold"
              >
                {user.fullname.split(" ").slice(0, 2).join(" ")}{" "}
              </p>
              <p style={{ fontSize: "10px" }} className="black p-0 m-0">
                {user.email}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <button
              className="btn-e-brofile"
              onClick={(event) =>
                (window.location.href = `/etg/${user.fullname
                  .toLowerCase()
                  .replace(/\s/g, "")}`)
              }
            >
              Edit Profile
            </button>
          </div>

          <hr className="black my-2 p-0" />

          <div
            className="d-flex linkst my-1 black"
            onClick={(event) => (window.location.href = `/notifications`)}
          >
            <div className="col-3 ">
              <i style={{ color: "#344fa1" }} className="far fa-bell fa-lg ps-1"></i>
            </div>
            <div className="col-9 ">Notifications</div>
          </div>
          <hr className="black my-2 p-0" />
          <div
            className="d-flex black  linkst my-1"
            onClick={(event) => (window.location.href = `/in/plans`)}
          >
            <div className="col-3 ">
              <i
                className=" far fa-map fa-lg ps-1"
                style={{ color: "#289672" }}
              ></i>
            </div>
            <div className="col-9 ">My Plans</div>
          </div>

          <div
            className="d-flex linkst my-1 black"
            onClick={(event) => (window.location.href = `/in/favorite`)}
          >
            <div className="col-3 ">
              <i
                className=" far fa-heart fa-lg ps-1"
                style={{ color: "#ce1212" }}
              ></i>
            </div>
            <div className="col-9 ">Favorites</div>
          </div>
          <hr className="black my-2 p-0" />

          <div className="d-flex linkst  black" onClick={logout}>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className=" text-danger bi bi-box-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
            </div>
            <div className=" col-9 ">Logout</div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <></>;
  }
};

export default Profile;
