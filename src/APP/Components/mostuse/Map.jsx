import React from "react";
import { ReactBingmaps } from "react-bingmaps";
const Map = (props) => {
  function directions() {
    window.open(
      `https://www.google.com/maps?q=${props.location[0]},${props.location[1]}`,
      "_blank"
    );
  }
  return (
    <div className="map">
      <ReactBingmaps
        bingmapKey="AsIq8aZ9gDtVZOZXsOb_olJBSQeKmlV8RsTTS0O2FRnLZIL1NtMmVTlahlklMwwh"
        mapOptions={{
          showLocateMeButton: false,
        }}
        center={[props.location[0], props.location[1]]}
        mapTypeId={"aerial"}
        navigationBarMode={"compact"}
        zoom={17}
        pushPins={[
          {
            location: [props.location[0], props.location[1]],
            option: { color: "red" },
            addHandler: { type: "click", callback: directions },
          },
        ]}
      ></ReactBingmaps>
    </div>
  );
};

export default Map;
