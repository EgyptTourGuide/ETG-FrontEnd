import React, { Component } from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";

import './footer.css'

import ConnectUS from './Connectus';


class Footer extends Component {
     backtotop=()=>{
        $('html,body').animate({ scrollTop: 0 }, "slow");
       
     }
        render() { 
        return ( 
            <React.Fragment>
        <div className="footer container-fluid p-0 mt-3 m-0">
<div className="row justify-content-center align-items-center   p-3 m-0">
        <div className="row justify-content-between  m-0 p-0">

       <div className="col-6 p-0 m-0">
            <p  className="text-white d-inline">Find Us On</p>
            <Link  className="mx-1  social-icon facebook "> <i className="fab fa-facebook-f fa-lg"></i></Link>
           <Link className="mx-1 social-icon "> <i className=" fab fa-twitter fa-lg"></i></Link>
           <Link className="mx-1 social-icon "><i className="fab fa-linkedin-in fa-lg"></i></Link>
      
           </div>

           <div className="col p-0 m-0 d-flex justify-content-end">
           <p className="text-white">Download App Now</p>
           </div>

</div>
<div className="row justify-content-between align-items-center  m-0 p-0">

           <div className="col p-0 m-0">
           <Link  className="connectus decoration text-white ">Connect Us</Link> 
           </div>
         


           <div className="col d-flex justify-content-end  p-0 m-0">
         
           <Link className="me-0 mx-2 social-icon ">
      <i class=" fab fa-android fa-2x"></i>
      </Link>
      <Link className="me-0 mx-2 social-icon ">
      <i class="fab fa-apple fa-2x"></i>
      </Link>
           </div>

           </div>
        
        
           <div className="row text-center p-0 m-0 text-white">
          <p className="Rights p-0 m-0">Copyright Egypt Tour Guide {new Date().getFullYear()}. All Rights reserved</p>
      </div>
           </div>

        </div>






<span>
{/* <ConnectUS/> */}
</span>


            </React.Fragment> );
    }
}


 
export default Footer;



/*


<div className="col-12"> 
             <div className=" top-arrow p-0 m-0" onClick={()=>this.backtotop()}>
             <i className=" fas fa-chevron-up fa-2x"></i>
             <p className="top">Top</p>
             </div>
    </div>


*/ 