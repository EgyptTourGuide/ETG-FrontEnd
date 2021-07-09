import React, { Component } from 'react'
import Header from './../Header/Header';
import Footer from './../footer/footer';
import { backendurl } from './../call-backend/URLs';
import Inhotel from './inhotel';
import Loading from '../mostuse/loading';
import  axios  from 'axios';
class Hotel extends Component {
    state = {hotelinf:{}  ,load:true}
    async componentDidMount(){
await axios.get(`${backendurl}/hotels/${this.props.match.params.id}`)
.then(res=>{
if(res.data.description){
    this.setState({hotelinf:res.data,load:false})
}
})

    }
    render() { 
        if(!this.state.load){
        return ( <React.Fragment>
            <div className="h-me s-h">
               <Header {...this.props} setuser={this.props.setuser} user={this.props.user} />
               </div>
<Inhotel hotelinf={this.state.hotelinf}></Inhotel>
<div className="footer-bg">
         <Footer/></div>
        </React.Fragment> );}
        else{
            return(<Loading></Loading>)
        }
    }
}
 
export default Hotel;