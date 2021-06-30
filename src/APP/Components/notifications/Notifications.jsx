import React, { Component } from "react";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import Notificationshow from "./Notificationshow";

class Notifications extends Component {
  render() {
    return (
      <>
        <Header
          {...this.props}
          setuser={this.props.setuser}
          user={this.props.user}
        />

        <Notificationshow></Notificationshow>

        <div className="footer-bg">
          <Footer />
        </div>
      </>
    );
  }
}

export default Notifications;
