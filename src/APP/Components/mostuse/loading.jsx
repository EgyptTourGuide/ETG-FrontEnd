import React, { Component } from 'react'
import "./mostuse.css";
import NotFound from "./NotFound";
class Loading extends Component {
        state={load:true}
 
   componentDidMount(){
    
    setTimeout(() => { this.setState({load:false}) },10000);
   }
        render() { 
       
           if(this.state.load){
            return ( 
                        <React.Fragment>
                        <div className="loading container-fluid d-flex text-center align-items-center ">
                          <div className=" row text-center align-items-center ">
                            <div className="text-center text-white ">
                              <span className="le font-face-rh ">Egypt</span>
                              <br />
                              <span className="ltg font-face-ab ">TOUR GUIDE</span>
                            </div>
                            <div id="loadingIndicator">
                              <div className="loadingBar" id="loadingBar1"></div>
                              <div className="loadingBar" id="loadingBar2"></div>
                              <div className="loadingBar" id="loadingBar3"></div>
                              <div className="loadingBar" id="loadingBar4"></div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment> )}

                else{
                        return(
                       
                          <NotFound/>
                          )
                }
        }
}
 
export default Loading;




