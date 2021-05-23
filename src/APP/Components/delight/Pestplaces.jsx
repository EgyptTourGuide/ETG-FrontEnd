import React, { Component } from 'react'
import axios from 'axios';
import { backendurl } from './../call-backend/URLs';
class Pestplaces extends Component {
    state = { places:{} }
    async componentDidMount(){
        await axios.get(`${backendurl}/places?tag=${this.props.name}`).then(res=>{this.setState({places:res.data})})
    }
    render() { 
        console.log(this.state.places)
        return ( <React.Fragment>

        </React.Fragment> );
    }
}
 
export default Pestplaces;