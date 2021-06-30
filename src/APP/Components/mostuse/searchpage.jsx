import React, { Component } from "react";
import Typical from "react-typical";
import Footer from "./../footer/footer";
import Header from "./../Header/Header";
import Cityshow from "./cityshow";
import Search from "./Search";

const steps = ["Search About Your Dreams In Egypt.", 5000];
class Searchpage extends Component {
  state = { elements: [], path: "" };

  componentDidMount() {
    var elements = [];
    //var path = "";
    if (this.props.location.pathname.startsWith("/city")) {
      if (this.props.match.params.name) {
        // elements = this.props.city.filter((e) => e.name.startsWith(this.props.match.params.name) );
        elements = this.props.city;
        this.setState({ elements });
      }
      //  else {
      //     elements = this.props.city;
      //   }
      //   path = "/city";
    }

    //  else if (this.props.location.pathname.startsWith("/adventure")) {
    //   elements = this.props.adventure.filter((e) =>   e.name.startsWith(this.props.match.params.name));
    //   elements = this.props.adventure;
    //   path = "/adventure";
    // } else if (this.props.location.pathname.startsWith("/home")) {
    //   elements = [...this.props.adventure, ...this.props.city].filter((e) =>e.name.startsWith(this.props.match.params.name));
    //   path = "/home";
    // }

    console.log(this.state.elements);
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} user={this.props.user}></Header>

        <div className="container-fluid b-s d-flex  justify-content-center align-items-center p-0 m-0">
          <div className="row p-0 m-0">
            <div className="row p-2 m-0 text-center text-white fs-4 font-weight-bold">
              <Typical wrapper="span" steps={steps} loop={100} />
            </div>

            <div className="row  p-0 m-0">
              <Search data={this.props.city} path={this.state.path}></Search>

              <Cityshow data={this.state.elements}></Cityshow>
            </div>
          </div>
        </div>
        <div className="full-screen-err">
          <Footer className="footer-bg"></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Searchpage;
