import React, { Component } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Rate from '../mostuse/rate';
class InsideData extends Component {
    state = {  }
    constructor(props){
        super(props);
        AOS.init({duration: 500 });
        
      }
    render() { 
        return ( 
            <React.Fragment>
      <div className=" container-fluid   m-0 p-0 my-2">
  <div className="row justify-content-center p-0 m-0">
      {this.props.data.map((e, index) => {
          var rate=0;
          if(e.rate>=0)
          {
              rate=e.rate;
          }
          else{
              rate=0;
          }
        return (
          <div
          key={index}
            e-aos="zoom-in"
            style={{ backgroundImage: `url(${e.media})` }}
            className="s-data d-flex align-items-end  col-11 col-md-5 col-xl-5 city-card text-white p-2 m-2"
          >
            <div className="data-card d-flex align-content-between flex-wrap ">
              <div className="w-100 d-flex justify-content-between align-items-center">
              <div ><h4 className="fw-bold upe p-0 m-0">{e.name}</h4></div>
           <div><Rate rate={rate}size={"sm"}></Rate> </div>
              </div>
              <div className="w-100 d-flex align-items-center justify-content-between">
                  <div >
              <button className="data-btn" onClick={(event) =>(window.location.href = `/place/${e.id}`)}>Read More</button></div>
              <div className="p-0 m-0 "><i className="far fa-heart text-danger fa-2x"></i></div>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      </div>
    </React.Fragment>
       );
    }
}
 
export default InsideData;