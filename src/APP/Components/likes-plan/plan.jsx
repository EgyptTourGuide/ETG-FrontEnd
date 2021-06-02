import React, { Component } from 'react'
import axios from "axios";
import { backendurl } from "./../call-backend/URLs";
import Loading from "../mostuse/loading";
import gettoken from "../mostuse/gettoken";
class Plan extends Component {
    state = {
        plans: {},
        load: true,
        token: JSON.parse(localStorage.getItem("user")).token,
      };
    
      async componentDidMount() {
        const plans = await axios
          .get(`${backendurl}/profile/plans`, {
            headers: { Authorization: `${this.state.token}` },
          })
          .catch((error) => {
            if (error.response.status === 403 && gettoken())
            var token="";
            gettoken().then(res=>{
              token=res;
          })
      
              this.setState({ token });
          });
    
        if (plans) {
          this.setState({ plans: plans.data, load: false });
        }
     
      }
    render() { 
        console.log(this.state.plans)
        return (  <React.Fragment>
            plan
        </React.Fragment>);
    }
}
 
export default Plan;