import React from "react";

const Pleaselogin = () => {
  setTimeout(() => {
    window.location.replace("/login");
  }, 2000);
  return (
    <React.Fragment>
      <div
        className="pleas-login-pg d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: "url(/images/bg.png)" }}
      >
        <div>
          <h2 className=" text-white">
            {" "}
            <i class="icon-login-ml fas fa-sign-in-alt"></i>
          </h2>
        </div>
        <div>
          <h3 className="text-white">Please Login</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pleaselogin;
