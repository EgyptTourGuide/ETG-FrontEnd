import React, { Component } from "react";
import $ from "jquery";
import FileUpload from "./../mostuse/fileupdate";
import { countries } from "./../register/country";
import "../register/register.css";
import { backendurl } from "./../call-backend/URLs";
import gettoken from "../mostuse/gettoken";
import axios from "axios";
import Loading from "../mostuse/loading";
class EditProfile extends Component {
  state = {user:{}, token:JSON.parse(localStorage.getItem('user')) ,fullname: "",    email: "",country: "", phone: "",  picture: "",error:"",backenderror:""};
   componentDidMount =async()=> {
    var token = this.state.token.token;
   await axios.get(`${backendurl}/profile `, { headers: { Authorization: `${token}`}})
   .then(res=>{
    this.setState({
      user:res.data,
      fullname: res.data.name,
      email: res.data.email,
      country: res.data.country,
      phone: res.data.phone,
      picture: res.data.picture,
    });
   })
      .catch(async error=> {
        if (error.response.status === 403) {
         await gettoken().then(res=>{
            token=res;
        })
    
          this.setState({token})}});
  

    $(".input").attr("disabled", "disabled");
    $(".input").addClass("d-in-p");
  }
 
  setavatar = (e) => {
    this.setState({ picture: e.target.files[0] });
  };
  handelabled = (id) => {
    $(`#${id}`).removeAttr("disabled");
    $(`#${id}`).focus();
    $(`#${id}`).removeClass('d-in-p');
  };
  handelchange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  
  handelsave=async(e)=>{
    e.preventDefault();
const state={...this.state}
delete state.user;
delete state.token;
delete state.error;
delete state.backenderror

if(state.fullname.length>10 &&state.phone&&state.email.includes("@",".")&&state.country){
const saveuser = new FormData();
Object.keys(state).map((key) => {
  saveuser.append( (key==="picture")?(`avatar`):(key), state[key]);
});

var backenderror = "";
await axios.put(`${backendurl}/profile`, saveuser, { headers: { Authorization: `${this.state.token.token}`}})
.then(async res=>{
  const user= JSON.parse(localStorage.getItem("user"));
 var dat= Object.fromEntries((new Map( [...[...saveuser]])));
 var token = this.state.token.token;
 await axios.get(`${backendurl}/profile `, { headers: { Authorization: `${token}`}})
 .then(res=>{
const picture=res.data.picture;
var newuser={...user ,...dat};
 newuser =Object.assign(newuser,{picture:`${picture}`})
  delete newuser.avatar;
this.props.setuser(newuser);
window.location.replace(window.location.href);
 })
 
   
})
.catch( async(error)=> {
    if (error.response){
      backenderror = error.response.data.errors;
    }
    if (error.response.status === 403) {
       const token = await gettoken();
      this.setState({token})}
  }
  
  );

  $(".input").attr("disabled", "disabled");
  $(".input").addClass("d-in-p");
this.setState({ backenderror,error:"" });
}
else{
  this.setState({error:"*Please verify your data is correct."})
}
  }


  render() {
    if (this.state.user.id) {
      return (
        <React.Fragment>
          <div className="container-fluid ">
            <form onSubmit={this.handelsubmit} className="p-0 m-0">
              <FileUpload setavatar={this.setavatar} img={this.state.picture} />
<span className="row text-center"> 
<p className="text-danger">{this.state.error}</p>
</span>
              <div className="d-flex align-items-end p-0 m-0 my-2 ">
                <div className="inp  text-start  p-0 m-0 me-1">
                  <label className=" text-white p-0 m-0" htmlFor="p-name">
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    onChange={this.handelchange}
                    className="  fullname input p-2 "
                    type="text"
                    placeholder="Enter your Full Name"
                    id="p-name"
                    value={this.state.fullname}
                  />
                </div>
                <div
                  className="mx-2"
                  onClick={() => this.handelabled("p-name")}
                >
                  <i className="far fa-edit text-white fa-2x"></i>
                </div>
              </div>

              <div className="d-flex align-items-end p-0 m-0 my-2">
                <div className="inp text-start  p-0 m-0 ">
                  <label className=" text-white p-0 m-0" htmlFor="p-email">
                    Email Address
                  </label>

                  <input
                    name="email"
                    onChange={this.handelchange}
                    className="email input p-2 m-0"
                    type="text"
                    placeholder="Enter  Email Address"
                    id="p-email"
                    value={this.state.email}
                  />
                </div>

                <div
                  className="mx-2"
                  onClick={() => this.handelabled("p-email")}
                >
                  <i className="far fa-edit text-white fa-2x"></i>
                </div>
              </div>

              <div className="d-flex c-p justify-content-between p-0 m-0 my-2">
                <div className="d-flex align-items-end p-0 m-0 w-100">
                  <div className="inp  text-start  p-0 m-0 me-1">
                    <label
                      className=" text-white p-0 m-0"
                      htmlFor="p-countrySelect"
                    >
                      Your Country
                    </label>

                    <select
                      className="custom-select input p-1 px-2 m-0"
                      onClick={() => this.countrychange()}
                      id="p-countrySelect"
                      defaultValue={this.state.country}
                    >
                      <option value={null}>Choose Your Country</option>
                      {countries.map((e, index) => {
                        return (
                          <option key={index} value={e.name}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div
                    className="mx-2"
                    onClick={() => this.handelabled("p-countrySelect")}
                  >
                    <i className="far fa-edit text-white fa-2x"></i>
                  </div>
                </div>

                <div className="d-flex align-items-end p-0 m-0 w-100">
                  <div className="inp  text-start  p-0 m-0 ms-1">
                    <label className=" text-white p-0 m-0" htmlFor="p-phone">
                      Phone Numper
                    </label>

                    <input
                      name="phone"
                      className="phone input p-2"
                      placeholder="Phone Numper"
                      id="p-phone"
                      value={this.state.phone}
                      onChange={this.handelchange}
                    />
                  </div>
                  <div
                    className="mx-2"
                    onClick={() => this.handelabled("p-phone")}
                  >
                    <i className="far fa-edit text-white fa-2x"></i>
                  </div>
                </div>
              </div>

              <div className="row  align-items-center  justify-content-center p-0  m-0">
                <div className="col-12 col-xl-6 d-flex justify-content-center  align-items-center mt-2 m-0 p-0 ">
                  <button
                    className="  sin-btn  p-0 m-0"
                    style={{ width: "20vw" }}
                    onClick={this.handelsave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </React.Fragment>
      );
    } else {
      return <Loading />;
    }
  }
}

export default EditProfile;
