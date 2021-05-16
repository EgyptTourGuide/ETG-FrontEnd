import React, { Component } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
class Rooms extends Component {
    state = {room:this.props.room }
    constructor(props){
        super(props);
        AOS.init({duration: 500 });
      }
    render() { 
        return (<React.Fragment>

            <div className="row justify-content-center">
{this.state.room.map((e,ind)=>{
       var img=""
    if(e.media.length===0)
    {
       img=`url(/images/noimg.png)`
        
    }
    else{
          img=`url(${e.media})`;
    }
    if(!e.isBusy){
    return(
        <>
        <div
          key={ind}
            e-aos="zoom-in"
            style={{ backgroundImage: img }}
            className="s-data d-flex align-items-end  col-11 col-md-5 col-xl-5 city-card text-white p-2 m-2"
          >
          
              <div className="w-100 d-flex align-items-center justify-content-between">
                <div>
                    <p className="text-white" style={{fontSize:"20px"}}>{e.bed} <i class="fas fa-bed"></i>   {e.bed} <i class="fas fa-users"></i>   {e.food} <i class="fas fa-utensils"></i></p>
                </div>
              
                  <div >
              <button className="data-btn" onClick={(event) =>(window.location.href = `/${this.props.type}/${e.id}`)}>{e.price} $ Reserve</button></div>
            
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