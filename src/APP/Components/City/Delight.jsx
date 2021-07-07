import axios from 'axios';
import React, { Component } from 'react'
import Loading from '../mostuse/loading';
import InsideData from './Data';
import { backendurl } from './../call-backend/URLs';
class Delight extends Component {
    state = {delight:[],looding:true  }

    async componentDidMount(){
 await axios.get(`${backendurl}/activity?city=${this.props.path}`).
 then(res=>{this.setState({delight:res.data.activities , looding:false})});
    }
    render() { 
        if(!this.state.looding&& this.state.delight.length>0){
        return ( 
        <React.Fragment>
            <span className="hide-love">

<InsideData data={this.state.delight} type="adventure" cityid={this.props.path}></InsideData>
</span> </React.Fragment> );}
        else{
            return(<Loading></Loading>);
        }
    }
}
 
export default Delight;