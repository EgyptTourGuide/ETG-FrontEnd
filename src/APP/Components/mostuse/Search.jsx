import React, { Component } from "react";
import "./mostuse.css";
import { Link } from "react-router-dom";
class Search extends Component {
  state = { data: this.props, value: "", newdata: [] };
  constructor(props) {
    super(props);
    console.log(this.props.city);
    let newdata = this.props.city;
    this.setState({ newdata });
  }

  search = (e) => {
    let value = { ...this.state.value };
    value = e.currentTarget.value;
    this.setState({ value });
    console.log(value);
    const data = Object.keys(this.state.data)[0];
    // let newdata=data.filter((d)=>d.includes(value));
    console.log(data);
  };
  render() {
    console.log(this.state.newdata);
    return (
      <React.Fragment>
        <div className="container-fluid text-center p-0 m-0 ">
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
      </React.Fragment>
    );
  }
}

export default Search;
