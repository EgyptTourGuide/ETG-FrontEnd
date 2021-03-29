import React, { Component } from 'react';
import './footer.css'

class ConnectUS  extends Component {
    state = {  }
    render() { 
        return (
        <React.Fragment>
<div className="container-fluid text-center p-0 m-0">
    <div className="row p-0 m-0">
        <p className="text-white p-0 m-0">personal information</p>
    </div>
    <div className="row text-start p-0 m-0">

   
         <input className="input" type="text" id="name"  placeholder=""/>
         <label className="label" for="name">Full Name</label>
    </div>
    <div className="row text-start p-0 m-0">

   
<input className="input" type="text" id="name"  />
<label className="label" for="name">Full Name</label>
</div>
</div>
        </React.Fragment>);
    }
}
 
export default ConnectUS ;