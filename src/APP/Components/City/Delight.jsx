import axios from 'axios';
import React, { Component } from 'react'
import Loading from '../mostuse/loading';
import InsideData from './Data';
import { backendurl } from './../call-backend/URLs';
class Delight extends Component {
    state = {delight:[],looding:true  }

    async componentDidMount(){
 await axios.get(`${backendurl}/activity?city=${this.props.path}`).then(res=>{this.setState({delight:res.data.activities , looding:false})});
    }
    render() { 
        if(!this.state.looding){
        return ( 
        <React.Fragment>
<InsideData data={this.state.delight} type="place"></InsideData>
        </React.Fragment> );}
        else{
            return(<Loading></Loading>);
        }
    }
}
 
export default Delight;