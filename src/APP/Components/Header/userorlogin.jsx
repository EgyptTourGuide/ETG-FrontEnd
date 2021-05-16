import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { User } from "../Context/Logincontext";


class UserorLogin extends Component {
  state = {}
  render() { 
     return (
<User.Consumer>
{user=>{
if(user){ 
 return(
<React.Fragment>
  <span className="d-none linkst d-xl-inline p-0 m-0 fs-6"   onClick={()=>this.props.showslide("#p-slide")}
  >
    {(user.picture) ? (<img className="profile "src={user.picture}alt={user.fullname.split(' ').slice(0,2).join(' ')}/>):(<span></span>) }
  
 <p className="p-0 m-0  d-none d-xl-inline  mx-1">{user.fullname.split(' ').slice(0,2).join(' ')}</p>
 <p className="p-0 m-0 linkst fw-bold fs-5 d-block d-xl-none black ">{user.fullname.split(' ').slice(0,2).join(' ')}</p>
</span>

  <Link className="d-block d-xl-none linkst d-inline p-0 m-0 fs-6" to={`/etg/${user.fullname.replace(/\s/g,'')}`}>
  {(user.picture) ? (
            <img
             className="profile "
             src={user.picture}
             width="50px"
             alt={user.fullname.split(' ').slice(0,2).join(' ')}
           />):(<span></span>) }
          
           <p className="p-0 m-0 linkst fw-bold fs-5  black ">{user.fullname.split(' ').slice(0,2).join(' ')}</p>
         </Link>
  </React.Fragment>
 );

}
else{
  return(
    <React.Fragment>
         <span
               className="d-none d-xl-block linkst d-inline  px-1"
               onClick={() => this.props.showslide("#lo-slide")}
             >
               <p id="al" className="p-0 m-0">
                 Login
               </p>
             </span>
        
    
           <span className="d-block d-xl-none  login-m m-0 p-0">
             <Link to="/login" className=" linkst  black  fs-5">
               Login
             </Link>
           </span>
         </React.Fragment>
  );
}
 // return(<h2>user</h2>);
}}
</User.Consumer>

     
      //   // user ? `${
      //   //       <Link className="linkst d-inline p-0 m-0 fs-6" to="">
              
      //   //       {user}
      //   //          <img
      //   //           className="profile "
      //   //           src={user.picture}
      //   //           width="50px"
      //   //           alt={user.fullname}
      //   //         />
      //   //         <p className="p-0 m-0 d-inline mx-1">{user.fullname}</p>
      //   //       </Link>
      //   // }`:`${
      //   //   <React.Fragment>
      //   //   <span
      //   //         className="d-none d-xl-block linkst d-inline  px-1"
      //   //         onClick={() => this.props.showslide("#lo-slide")}
      //   //       >
      //   //         <p id="al" className="p-0 m-0">
      //   //           Login
      //   //         </p>
      //   //       </span>
        
    
      //   //     <span className="d-block d-xl-none  login-m m-0 p-0">
      //   //       <Link to="/login" className=" linkst  black  fs-5">
      //   //         Login
      //   //       </Link>
      //   //     </span>
      //   //   </React.Fragment>
          
      //   // }`
      
      // }
  
      //   {/* <React.Fragment>
      //   <span
      //         className="d-none d-xl-block linkst d-inline  px-1"
      //         onClick={() => this.props.showslide("#lo-slide")}
      //       >
      //         <p id="al" className="p-0 m-0">
      //           Login
      //         </p>
      //       </span>
      
  
      //     <span className="d-block d-xl-none  login-m m-0 p-0">
      //       <Link to="/login" className=" linkst  black  fs-5">
      //         Login
      //       </Link>
      //     </span>
      //   </React.Fragment> */}
      // </UserConsumer>
  

    );
  }
}
 
export default UserorLogin;

