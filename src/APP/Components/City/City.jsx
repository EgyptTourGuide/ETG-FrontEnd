import React, { Component } from 'react'
import Footer from '../footer/footer';
import Header from '../Header/Header';
import './City.css';
class City extends Component {
    state = {citys:{}};

  componentDidMount(){
    var citys = {};
    citys=this.props.city.find(element => element.name=this.props.match.params.name);
      this.setState({ citys });
  }
    render() { 
        return (
         <React.Fragment>
         <Header {...this.props} user={this.props.user} className="position-relative"></Header>
         <Footer></Footer>
        </React.Fragment> );
    }
}
 
export default City;