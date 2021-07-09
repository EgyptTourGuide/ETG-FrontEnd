import React, { Component } from 'react'
import './adventure.css';
import Header from './../Header/Header';
import Footer from './../footer/footer';
import axios  from 'axios';
import { backendurl } from './../call-backend/URLs';
import Loading from '../mostuse/loading';
import Info from './Info';
import Pestplaces from './Pestplaces';
class Adventure extends Component {
    state = {activity:{} ,load:false}
   async componentDidMount(){
        console.log(this.props.match);
   await axios.get(`${backendurl}/activity/${this.props.match.params.id}`)
   .then(res=>{this.setState({activity:res.data.activity,load:true})})
    }
    render() { 
        if(this.state.load){
        return (<React.Fragment>
            <div className="s-h">
   <Header {...this.props} setuser={this.props.setuser} user={this.props.user} ></Header></div>
    <Info activity={this.state.activity} ></Info>
<Pestplaces name={this.state.activity.name} id={this.state.activity.id} cityid={this.props.match.params.cid}></Pestplaces>

   <div className="footer-bg">
         <Footer></Footer></div>
        </React.Fragment>  );
  

}
else{
    return(<Loading></Loading>)
}
}
}
 
export default Adventure;