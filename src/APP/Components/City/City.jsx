import React, { Component } from 'react'
import Footer from '../footer/footer';
import Header from '../Header/Header';
import Loading from '../mostuse/loading';
import './City.css';
import CityInPage from './cityinpage';
import  axios  from 'axios';
import {backendurl} from "../call-backend/URLs";
class City extends Component {
    state = {cityinfo:[],places:[],looding:true};
constructor(props){
    super(props)
   
}
async componentDidMount(){
    const cityinfo =await axios.get(`${backendurl}/cities/${this.props.match.params.id}`);
    const places =await axios.get(`${backendurl}/places?city=${this.props.match.params.id}`);

    if(cityinfo && places ){
        this.setState({cityinfo:cityinfo.data.city,places:places.data.places,looding:false});
     }
     
    }
    render() { 
        if (!this.state.looding&&this.state.cityinfo)
        {
        return (
         <React.Fragment>
         <Header {...this.props} setuser={this.props.setuser} user={this.props.user} ></Header>
<CityInPage cityinfo={this.state.cityinfo} places={this.state.places} ></CityInPage>
<div className="footer-bg">
         <Footer></Footer></div>
        </React.Fragment> );}
        else{
            return(<>
            <div className="full-screen-err">
            <Loading></Loading>
            </div>
            </>);
        }

    }
}
 
export default City;