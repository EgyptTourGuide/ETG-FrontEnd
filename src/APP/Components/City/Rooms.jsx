import React, { Component } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
class Rooms extends Component {
    state = {room:this.props.room ,hid:this.props.hid}
    constructor(props){
        super(props);
        AOS.init({duration: 500 });
      }
    render() { 
      console.log(this.state.room)
        return (<React.Fragment>

            <div className="row justify-content-center">
{this.state.room.map((e,ind)=>{

    if(!e.isBusy){
    return(
        <>
        <div
          key={ind}
            e-aos="zoom-in"
            style={{ backgroundImage: e.media.length?(`url(${e.media})`):(`url(/images/noimg.png)`) }}
            className="s-data d-flex align-items-end  col-11 col-md-5 col-xl-5 city-card text-white p-2 m-2"
          >
          
              <div className="w-100 d-flex align-items-center justify-content-between">
                <div>
                    <p className="text-white" style={{fontSize:"20px"}}>{e.bed} <i className="fas fa-bed"></i>   {e.bed} <i className="fas fa-users"></i>   {e.food} <i className="fas fa-utensils"></i></p>
                </div>
              
                  <div >
              <button className="data-btn" onClick={(event) =>(window.location.href = `/room/${e.id}/${this.state.hid}`)}>{e.price} $ Reserve</button></div>
            
              </div>
            </div>
    
        </>
    );}
})}
</div>











        </React.Fragment>  );
    }
}
 
export default Rooms;