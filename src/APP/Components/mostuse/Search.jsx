import React, { Component } from "react";
import "./mostuse.css";
import { Link } from "react-router-dom";
import Rate from "./rate";
import $ from 'jquery';
class Search extends Component {
  state = { data: this.props, value: "", newdata: [] };
  constructor(props) {
    super(props);
    let newdata = this.props.city;
    this.setState({ newdata });
  }

  search = (e) => {
    $(".search-slid").animate({
      height: 'toggle'
    });
    let value = { ...this.state.value };
    value = e.currentTarget.value;
    this.setState({ value });
    console.log(value);
    var newdata=this.state.data.city.filter((data) => data.startsWith("e"));
    this.setState({newdata });
    const data = Object.keys(this.state.data)[0];

    
    console.log(newdata);
  };
  render() {
    return (
      <React.Fragment>
        <div className="search container-fluid text-center p-0 m-0 ">
          <div className="col  p-0 m-0">
            <input
              id="s-bar"
              type="text"
              className=" text-align-center px-3  pe-5"
              placeholder="Search"
              value={this.state.value}
              onChange={this.search}
            />

            <Link className=" search_icon m-1">
              <svg
                className="  font-weight-bold "
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Link>
          </div>
        </div>


        
{/*  
        <div  className=" search-slid">
        {this.state.city.map((city, index) => {
          return (
          <div key={index} className="element row p-0 m-0">
            <div
              id="dataimg"
              className="col-1 "
              style={{
                backgroundImage: `url(${this.state.data.city[0].urlimg})`,
              }}
            ></div>
            <div className="col black ">
              <span>
                <h2 className="d-inline fw-bold"> {this.state.data.city[0].cityname.charAt(0).toUpperCase() + this.state.data.city[0].cityname.slice(1)}{" "} </h2>
                <Rate className="d-inline"rate={this.state.data.city[0].rate}size={"xs"}></Rate>
              </span>

              <p className="titel">
                {(this.state.data.city[0].about.charAt(0).toUpperCase()+this.state.data.city[0].about.slice(1)).slice(0,this.state.data.city[0].about.search(/[^\w\s]/g) + 1)}
              </p>
            </div>
            <span className="px-5">
         <hr />
         </span>
          </div>
          );})}
        </div>
            */}
      </React.Fragment>
    );
  }
}

export default Search;
