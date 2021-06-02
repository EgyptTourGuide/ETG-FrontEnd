import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from '../mostuse/Features';
import { backendurl } from './../call-backend/URLs';
import  axios  from 'axios';
import gettoken from '../mostuse/gettoken';
import Fromto from './FromTo';
function NextArrow(props) {
    var { onClick } = props;
    return (
      <div
        style={{ position: "absolute", top: "0" }}
        id="right"
        className=" h-100 d-flex align-items-center justify-content-center p-2   text-white fas fa-chevron-right fa-2x"
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="h-100 d-flex align-items-center justify-content-center  p-2 left  text-white fas fa-chevron-left fa-2x"
        onClick={onClick}
      />
    );
  }
  
  const settings = {
    className: "p-m-slide p-media-bg p-0 m-0",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 10000,
    focusOnSelect: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
class InRoom extends Component {
state={from:"",to:"",error:"",showform:true}
handelchange = (e) => {
  var state = { ...this.state };
  state[e.currentTarget.name] = e.currentTarget.value;
  this.setState(state);
};
  Reserve= async()=>{
    if(localStorage.getItem("user")){

if(this.state.to&&this.state.from && Date.parse(this.state.to) >= Date.parse(this.state.from) && Date.parse(this.state.from) >= Date.parse(new Date())) {

      var token =JSON.parse(localStorage.getItem('user')).token;
     const room={roomId:this.props.room.id,from:this.state.from,to:this.state.to}
await axios.post(`${backendurl}/hotels/${this.props.hotelinf.id}/request`,room, {headers: {'Authorization': `${token}`}})
.then(res=>{
window.location.replace("/in/plans")
})
.catch((error)=>{
  if(error.response.status === 403)
 gettoken().then(res=>{ token=res; })
  })
}
else{
  this.setState({error:"*Please enter correct Visit Duration"})
}
    }
  else{
    window.location.replace("/mustlogin");
}}

    render() { 
        return (<React.Fragment>
    <Slider {...settings}>
            {this.props.room.media.map((e, ind) => {
              return (
                <div key={ind}>
                  <div
                    className="p-media-bg p-0 m-0"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              );
            })}
          </Slider>
<div className="container-fluid">
<div className="row  text-xl-center">
<div className="col-12 text-center my-2">
    <h2 className="text-white my-2">{this.props.hotelinf.name}  <span className="mx-2 yellow" style={{fontSize:"25px"}}>{this.props.hotelinf.stars}<i className="fas fa-star ms-1"></i></span></h2>
<p className="text-white"><i className="far fa-bookmark mx-1" style={{color:"#ffc93c"}}></i> Room number ({this.props.room.number})</p>
</div>
<div>
    <h3 className="text-white">Features</h3>
    <div className="d-flex w-100 text-center">
<Features features={this.props.hotelinf.features}></Features></div>
</div>
 <div className="my-2">
     <h3 className="text-white">Room Characteristics</h3>

                    <p className="text-white mx-4 m-0 " style={{fontSize:"20px"}}>{this.props.room.bed} <i className="fas fa-bed "></i>   {this.props.room.bed} <i className="fas fa-users"></i>   {this.props.room.food} <i className="fas fa-utensils"></i></p>
                </div>
</div>


<div className="text-center">
{this.state.showform?(  <div className="container my-2">
<p className="text-danger p-0 m-0">{this.state.error}</p>
    <div className="d-flex w-100 p-0 m-0 ">
     
    <Fromto handelchange={this.handelchange}></Fromto>
    </div>
</div>):(<span></span>)}
<button className="data-btn" style={{height:"40px",width:"50%",fontSize:"25px"}}
 onClick={this.Reserve}>{this.props.room.price} $ Reserve</button>

</div>
</div>
        </React.Fragment> );
    }
}
 
export default InRoom;