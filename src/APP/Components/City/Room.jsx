import React, { Component } from 'react'
import axios  from 'axios';
import { backendurl } from './../call-backend/URLs';
import Header from './../Header/Header';
import Footer from './../footer/footer';
import Loading from '../mostuse/loading';
import InRoom from './InRoom';
class Room extends Component {
    state = {room:{},hotelinf:{} ,load:true}
    async componentDidMount(){
await axios.get(`${backendurl}/rooms/${this.props.match.params.id}`).then(res=>{ this.setState({room:res.data.room})})
await axios.get(`${backendurl}/hotels/${this.props.match.params.hid}`).then(res=>{this.setState({hotelinf:res.data})})
if(this.state.hotelinf&&this.state.room){
    this.setState({load:false});
}
}
    render() { 
if(this.state.load){
    return(<Loading/>);
}
else{
        return ( 
        <React.Fragment>

            <span className="head-bg s-h" style={{position: "absolute",zIndex:"10",width:"100%"}}>
         <Header {...this.props} user={this.props.user} ></Header></span>
         <InRoom room={this.state.room} hotelinf={this.state.hotelinf}></InRoom>
         <div className="footer-bg ">
         <Footer></Footer></div>
 
        </React.Fragment> );}
    }
}
 
export default Room;