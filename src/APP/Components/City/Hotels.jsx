import React, { Component } from 'react'
import Loading from '../mostuse/loading';
import { backendurl } from './../call-backend/URLs';
import Cityshow from './../mostuse/cityshow';
import axios from 'axios';
import InsideData from './Data';
class Hotels extends Component {
    state = {hotels:[] ,looding:true }
    async componentDidMount(){
        const hotels =await axios.get(`${backendurl}/hotels?city=${this.props.path}`);

        if(hotels ){
            this.setState({hotels:hotels.data,looding:false});
         }
        }
    render() { 
        console.log(this.state.hotels)
        if(!this.state.looding){
        return (
         <React.Fragment>
<InsideData data={this.state.hotels} type={`hotels/${this.props.path}`}/>

        </React.Fragment> );}
        else{
            return(<Loading/>);
        }
    }
}
 
export default Hotels;