import React, { Component } from 'react'
import Footer from '../footer/footer';
import Header from './../Header/Header';

import InPlaces from './inplaces';

class Place extends Component {
    state = { }

 
    render() { 
       
        return (
        <React.Fragment>
            <span className="head-bg s-h" style={{position: "absolute",zIndex:"10",width:"100%"}}>
         <Header {...this.props} user={this.props.user} ></Header></span>
         <InPlaces path={this.props.match.params.id}></InPlaces>
         <div className="footer-bg ">
         <Footer></Footer></div>
        </React.Fragment>  );
    }
}
 
export default Place;