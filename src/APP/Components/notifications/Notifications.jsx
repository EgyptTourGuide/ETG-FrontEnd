

import React, { Component } from 'react'
import getnotifications from '../mostuse/getnotifications';

class Notifications extends Component {
  state = {notifications:[]  }
  async componentDidMount(){
 const notifications=  await getnotifications();
 this.setState(notifications)
  }
  render() {
    console.log(this.state.notifications) 
    return ( <></> );
  }
}
 
export default Notifications;




   