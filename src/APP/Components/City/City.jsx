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
async componentDidMount(){
    await axios.get(`${backendurl}/cities/${this.props.match.params.id}`).then(res=>{ this.setState({cityinfo:res.data.city})});
    await axios.get(`${backendurl}/places?city=${this.props.match.params.id}`).then(res=>{ this.setState({places:res.data.places,looding:false});});

   
     
    }
    render() { 
        if (!this.state.looding&&this.state.cityinfo)
        {
        return (
         <React.Fragment>
            <div className="head-bg" >
          <Header {...this.props} setuser={this.props.setuser} user={this.props.user} ></Header>
          </div>
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