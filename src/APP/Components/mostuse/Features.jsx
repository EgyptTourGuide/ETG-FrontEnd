import React from "react";

const Features = (props) => {
  const features = {
    FreeWifi: { class: "fas fa-wifi text-primary" },
    PrivateParking: { class: "fas fa-parking text-danger" },
    FreeBreakfast: { class: "fas fa-utensils text-warning" },
    Poolterraceheated: { class: "fas fa-swimming-pool text-info" },
    Airconditioned: { class: "fas fa-wind air" },
    ViewoftheNileRiver: { class: "fas fa-water river" },
    Casino: { class: "fas fa-glass-cheers casino" },
    Gym: { class: "fas fa-dumbbell gym" },
    Spa: { class: "fas fa-spa spa" },
    Restaurant: { class: "fas fa-utensils text-warning" },
    Terrace: { class: "fas fa-chair chair" },
    Airporttransfers: { class: "fas fa-bus text-success" },
  };
  return (
    <React.Fragment>
      <div className="container-fluid p-0 m-0">
        <div className="row justify-content-center p-0 m-0">
          {props.features.map((ele, indx) => {
            let name = ele.replace(/\s+/g, "").replace("-", "");
            return (
              <div key={indx} className=" col-12 col-xl-2 mx-1 text-xl-center">
                <p className="text-white p-0 m-0 features-text">
                  <span className={`${features[name].class} mx-1 me-2`}></span>
                  {ele}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
