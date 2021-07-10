import React, { Component } from "react";
import "./mostuse.css";
import { Link } from "react-router-dom";
import Rate from "./rate";
import $ from "jquery";
class Search extends Component {
  state = { data: this.props.data, value: "", newdata: [] };

  search = (e) => {
    let value = { ...this.state.value };
    value = e.currentTarget.value;
    this.setState({ value });
    var newdata = [];
    if (value) {
      newdata = this.state.data.filter((e) =>
        e.name.toLowerCase().includes(value.toLowerCase())
      );
      if (newdata.length === 0) {
        $("#error").show();
      } else {
        $("#error").hide();
      }
    } else {
      newdata = [];
    }

    this.setState({ newdata });

    if (this.state.newdata) {
      $(".search-slid").show();
      $("#s-bar").css("border-radius", " 15px 15px 0 0");
    }

    $("#s-bar").click(() => {
      if (this.state.newdata) {
        $(".search-slid").show();
        $("#s-bar").css("border-radius", " 15px 15px 0 0");
      }
    });
    $(document).mouseup(function (e) {
      if ($(e.target).closest(".search-slid").length === 0) {
        $(".search-slid").hide();
        $("#s-bar").css("border-radius", "15px");
      }
    });
  };
  handsh(data){
    this.props.handelshow(data);
this.setState({value:""});
        $(".search-slid").hide();
        $("#s-bar").css("border-radius", "15px");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid d-flex justify-content-center p-0 m-0 ">
          <div className="row s-w p-0 m-0 justify-content-end align-items-center ">
            <div className="col-12 p-0 m-0">
              <input
                id="s-bar"
                type="text"
                className=" text-align-center px-3 pe-5"
                placeholder="Search"
                value={this.state.value}
                onChange={this.search}
              />

              <div className=" search-slid p-3">
                <span id="error" className="black ">
                  <i className="far fa-frown fa-lg m-2"></i>No Results Found
                </span>
                {this.state.newdata.map((data, index) => {
                  return (
                    <div
                      key={index}
                      onClick={
                        (data.type|| this.props.type)?((event) =>
                        (window.location.href = `/${
                          data.type ? data.type : this.props.type
                        }/${data.id}`)):(()=>this.handsh(data))
                        
                        
                      }
                      className="element  black  row align-items-center p-3 m-0"
                    >
                      <div
                        id="dataimg"
                        className="col-1 p-0 m-0"
                        style={{
                          backgroundImage: `url(${(data.media.length>0)?((typeof data.media=="string")?(data.media):(data.media[0])):('/images/noimg.png')})`,
                        }}
                      ></div>

                      <div className="col ">
                        <div className="d-flex flex-xl-row p-0 m-0  align-items-center">
                          <div>
                            <h2 className="fw-bold">
                              {data.name.charAt(0).toUpperCase() +
                                data.name.slice(1)}
                            </h2>
                          </div>

                          <div className=" mx-xl-2">
                            {data.rate ? (
                              <Rate rate={data.rate} size={"sm"}></Rate>
                            ) : (
                              <span></span>
                            )}
                          </div>
                        </div>

                        <p className="titel p-0 m-0">
                          {data.description ? (
                            (
                              data.description.charAt(0).toUpperCase() +
                              data.description.slice(1)
                            ).slice(0, data.description.search(/[^\w\s]/g) + 1)
                          ) : (
                            <span></span>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="s-icon col-1 d-flex justify-content-end p-0 px-2 m-0">
              <Link to={`${this.props.path}/search/${this.state.value}`}>
                <svg
                  className="search_icon"
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
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
