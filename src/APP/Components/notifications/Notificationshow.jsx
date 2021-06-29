import React, { Component } from 'react'
import getnotifications from '../mostuse/getnotifications';
import Loading from '../mostuse/loading';
import './Notifications.css';
class Notificationshow extends Component {

    state = {notifications:[],load:true  }
    async componentDidMount(){
   const notifications=  await getnotifications();
   this.setState({notifications,load:false})
    }
    time=e=>{

        var time="";
        const date_future= new Date(e).getTime();
        const date_now= new Date().getTime();
        var delta = Math.abs(date_future - date_now) / 1000;
// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

if(days==0&& hours>0){
 time=`${hours}h`;
}
else if(days==0&& hours==0&&minutes>0){
    time=minutes+"min"
    }
else if (days>0&&days<30){
    time=days+"d";
}
else if( days>=30)
{
    time=days/30+"m";
}
else
{
    time="NOW";
}
return(time);
    }
    render() { 
        if(this.state.load){
            return(<Loading></Loading>)
        }
        
        else
        return (<React.Fragment>
<div className="container">


    {this.state.notifications.map((ele,ind)=>{
        return(
        <span key={ind}>
    <div className="row align-items-center">
    <div className="d-flex r-notifi justify-content-start align-items-center">
    <div className="notific-icon me-3">
    <i className="far fa-bell fa-2x"></i>
         </div>
    <div className="w-100">
        <span className="d-flex align-items-center justify-content-between ">
            <div>
        <h4 className="text-white p-0 m-0">{ele.title}</h4>
        </div>
        <div>
           <p className="text-white p-0 m-0 time-s"> {this.time(ele.createdAt)}</p>
        </div>
        </span>
        
        <p className="text-white p-0 m-0"> {ele.content}</p>
    </div>
    </div>
        </div>
        <hr className="text-white"/>
        </span>)
    
    })}
  

</div>
        </React.Fragment>  );
    }
}
 
export default Notificationshow;