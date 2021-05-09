import React, { Component } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

class Cityshow extends Component {
  state = {  }
  constructor(props){
    super(props);
    AOS.init({duration: 500 });
    
  }
  render() { 
    return ( <React.Fragment>
      <div className=" container-fluid text-center  m-0 p-0 my-2">
  <div className="row justify-content-center p-0 m-0">
      {this.props.data.map((e, index) => {
        return (
          <div
          key={index}
            onClick={(event) =>(window.location.href = `/${this.props.type}/${e.id}`)}
            e-aos="zoom-in"
            style={{ backgroundImage: `url(${e.media})` }}
            className="s-data d-flex align-items-end col-11 col-md-5 col-xl-5 city-card text-white p-0 m-2"
          >
            <div className="card-contant">
              <h5 className="upe">{e.name}</h5>
              <p> {e.description.substr(0,e.description.indexOf(".")+1)}</p>
            </div>
          </div>
        );
      })}
      </div>

      </div>
    </React.Fragment> );
  }
}
 
export default Cityshow;


