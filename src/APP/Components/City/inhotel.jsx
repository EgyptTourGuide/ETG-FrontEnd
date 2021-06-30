import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './Rooms';
import Map from './../mostuse/Map';
import Rate from '../mostuse/rate';
import AddReview from './../mostuse/addreview';
import $ from 'jquery';
import Features from '../mostuse/Features';

class Inhotel extends Component {
    state = {hotelinf:this.props.hotelinf ,questions:this.props.hotelinf.questions,comments:{},comment:{},rate:"",num:0 }

    componentDidMount(){
      var comments=this.props.hotelinf.reviews;
      comments.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

if(comments.length>0){
      this.setState({
        comments,
        comment:comments[0],
        rate:comments[0].rate
      });
    }
    }
    changecomment=val=>{
          var num=this.state.num+val;
          var comment={};
              if (num>=0 && num<this.state.comments.length){
                comment=this.state.comments[num];
                this.setState({comment,num});
              }
          
            }


            togettime=d=>{
              var dateFormat = require("dateformat");
              var time= new Date(d);
              const realtime= dateFormat(time, "mediumDate");
              return realtime;
            }
            handelshowrevform=()=>{
              $("#rev-form").fadeIn();
                }
                closereview =()=>{
                
                  $("#rev-form").fadeOut();
                    }
    render() { 
        return (<React.Fragment>

            
<Carousel  indicators={true} touch pause>
{this.state.hotelinf.media.map((e,ind)=>{

    return(
        <Carousel.Item key={ind}>
        <img
          className="img-hotel d-block w-100"
          src={e}
          alt={this.state.hotelinf.name}
        />
      </Carousel.Item>

    );
}

)}
</Carousel>

<div className="container-fluid">
<div className="row p-3">
<div className="text-center">
    <h2 className="text-white">{this.state.hotelinf.name}<span className="mx-2 yellow" style={{fontSize:"25px"}}>{this.state.hotelinf.stars}<i className="fas fa-star ms-1"></i></span></h2>
    <p className="text-start text-white">{this.state.hotelinf.description}</p>
</div>
<div>
    <h3 className="text-white">Features</h3>
<Features features={this.state.hotelinf.features}></Features>
</div>
<div>
<h3 className="text-white">Room</h3>


<Rooms room={this.state.hotelinf.rooms} hid={this.state.hotelinf.id}></Rooms>




<div className="row  p-0 m-0 align-items-end">
          
          <div className=" col-12 col-xl-6 p-2 m-0 ">
              <Map  location={this.state.hotelinf.location.coordinates}/>
             </div>
         
            <div className="col-12  col-xl-6 p-2 m-0">
         
               
              <div>
           <h2 className="text-white ">Rate</h2>
                <div className="d-flex  justify-content-between align-items-center my-3">
         
                  <div>
                    <p
                      className="text-warning p-0 m-0 d-inline"
                      style={{ fontSize: "10px" }}
                    >
                      Rate
                    </p>
                    <Rate rate={this.state.hotelinf.rate}></Rate>
                  </div>
         
                  <div>
                    
                    <button className="log-btn me-2 text-white" onClick={this.handelshowrevform}>
                      Add Review
                    </button>
                  </div>
                </div>
              </div>
          
              {/*  comment */}

             {this.state.comment.id?(
              <div className="d-flex align-items-center  justify-content-between rev  p-3" >
                <div className=" col-1 text-start" onClick={()=>this.changecomment(-1)} >
              <i class="c-arrow text-white fas fa-caret-left" ></i>
              </div>
              <div className="col-10">
<div className="d-flex  justify-content-between align-items-center">
<div className="d-flex align-items-center">
  <div>
    {this.state.comment.user.picture ?(<img src={this.state.comment.user.picture} width="50px" height="50px" className="rev-img-user" alt={this.state.comment.user.name} />):(<span></span>)}
  </div>
  <div className="d-flex flex-column">
    <div>
    <p className="text-white p-0 m-0 mx-2 sm-s-n">{this.state.comment.user.name}</p>
    </div>
    <div>
    <p className="text-white p-0 m-0 mx-2 sm-s-n" style={{fontSize:"12px",opacity:"0.5"}}>{this.togettime(this.state.comment.createdAt)}</p>
    </div>
    </div>
</div>
<div className="sm-s-n">
  <Rate rate={this.state.comment.rate}></Rate> 
</div>
</div>
<p className="text-white mt-2 p-0 m-0">{this.state.comment.comment}</p>
              </div>
            
              <div className="col-1 text-end p-0 m-0" onClick={()=>this.changecomment(1)}>
              <i class="c-arrow text-white fas fa-caret-right"></i>
              </div>
            </div>

):(<span></span>)}
            
          </div>
      
          </div>
      

          <span id="rev-form">
<div className="review-banel p-0 m-0">
<AddReview questions={this.state.questions} type={"hotels"}  closereview={this.closereview} id={this.state.hotelinf.id}></AddReview>

</div>

<span className="bg-rev-panel"></span>
</span>  
    
    



</div>
</div>
</div>

        </React.Fragment>  );
    }

 
}
 
export default Inhotel;