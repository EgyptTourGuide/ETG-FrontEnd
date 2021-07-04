import axios from "axios";
import React, { Component } from "react";
import { backendurl } from "./../call-backend/URLs";
import $ from "jquery";
import gettoken from "./gettoken";
class AddReview extends Component {
  state = {
    questions: this.props.questions,
    answers: [],
    rate: "",
    comment: "",
    error: "",
  };
  sendreview = async () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      if (this.state.answers.length < 3) {
        this.setState({ error: "*Please answer all question" });
      } else if (!this.state.rate && this.state.rate !== 0) {
        this.setState({ error: "*Please choose rate" });
      } else if (!this.state.comment) {
        this.setState({ error: "*Please enter your Feedback" });
      } else {
        this.setState({ error: "" });
        if (JSON.parse(localStorage.getItem("user"))) {
          var token = JSON.parse(localStorage.getItem("user")).token;
          var rev = {
            answers: this.state.answers,
            rate: this.state.rate,
            comment: this.state.comment,
          };
          await axios
            .post(
              `${backendurl}/${this.props.type}/${this.props.id}/review`,
              rev,
              { headers: { Authorization: `${token}` } }
            )
            .then((res) => {
              console.log(res);
              $("#review-form").hide();
              $("#thank-you").fadeIn();
            })
            .catch((error) => {
              if (error.response.status === 403) {
                gettoken().then((res) => {
                  token = res;
                });
              }
              if (error.response.status === 422) {
                $("#review-form").hide();
                $("#nonew").fadeIn();
              }
            });
          setTimeout(() => {
            this.props.closereview();
          }, 2000);
        }
      }
    } else {
      window.location.replace("/mustlogin");
    }
  };
  hadelratechange = (e) => {
    let state = { ...this.state };
    if (e.currentTarget.name === "rate") {
      state[e.currentTarget.name] = parseInt(e.currentTarget.value);
    } else if (e.currentTarget.name === "comment") {
      state[e.currentTarget.name] = e.currentTarget.value;
    } else {
      if (e.currentTarget.value === "true") {
        state.answers[e.currentTarget.name] = true;
      } else {
        state.answers[e.currentTarget.name] = false;
      }
    }
    this.setState(state);
  };
  render() {
    return (
      <React.Fragment>
        <div id="review-form">
          <div className=" d-flex flex-column justify-content-center">
            <div className=" clos-con text-end mx-3 ">
              <span
                className="clo-icon"
                onClick={() => this.props.closereview()}
              >
                <i className="fas fa-times fa-lg"></i>
              </span>
            </div>
            <div className="text-center">
              <h5 className="text-white fw-bold">How do you feel about it?</h5>
            </div>

            <div className=" rate text-center m-0 p-0">
              <ul className="ul-rate p-0 m-0 text-center">
                <li className="p-0 m-0">
                  <input
                    type="radio"
                    name="rate"
                    className="r-a ra-in"
                    id="radio0"
                    onChange={this.hadelratechange}
                    value={0}
                  />
                  <label
                    htmlFor="radio0"
                    className="r-a rate-num  far fa-angry"
                  ></label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={this.hadelratechange}
                    name="rate"
                    className="r-as ra-in"
                    id="radio1"
                    value={1}
                  />
                  <label
                    htmlFor="radio1"
                    className="r-as rate-num  far fa-meh-blank"
                  ></label>
                </li>
                <li>
                  <input
                    id="radio2"
                    type="radio"
                    onChange={this.hadelratechange}
                    name="rate"
                    className="r-s ra-in"
                    value={2}
                  />
                  <label
                    htmlFor="radio2"
                    className="r-s rate-num  far fa-meh-rolling-eyes"
                  ></label>
                </li>
                <li>
                  <input
                    id="radio3"
                    className="r-n ra-in"
                    type="radio"
                    onChange={this.hadelratechange}
                    name="rate"
                    value={3}
                  />
                  <label
                    htmlFor="radio3"
                    className="r-n rate-num  far fa-meh"
                  ></label>
                </li>
                <li>
                  <input
                    id="radio4"
                    className="r-g ra-in"
                    type="radio"
                    onChange={this.hadelratechange}
                    name="rate"
                    value={4}
                  />

                  <label
                    htmlFor="radio4"
                    className="r-g rate-num  far fa-smile"
                  ></label>
                </li>
                <li>
                  <input
                    id="radio5"
                    className="r-h ra-in"
                    type="radio"
                    onChange={this.hadelratechange}
                    name="rate"
                    value={5}
                  />
                  <label
                    htmlFor="radio5"
                    className="r-h rate-num far fa-laugh-beam"
                  ></label>
                </li>
              </ul>
            </div>
            {this.state.questions.map((q, index) => {
              return (
                <>
                  <div className="text-white my-2 text-center" key={index}>
                    <p className="p-0 m-0">{q}</p>
                    <span className="mx-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="true"
                        name={index}
                        onChange={this.hadelratechange}
                      />
                      <label className="form-check-label mx-1">Yes</label>
                    </span>
                    <span className="mx-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="false"
                        name={index}
                        onChange={this.hadelratechange}
                      />
                      <label className="form-check-label mx-1">No</label>
                    </span>
                  </div>
                </>
              );
            })}
            <div>
              <textarea
                className="tex-are p-2"
                style={{ height: "100px" }}
                name="comment"
                onChange={this.hadelratechange}
                placeholder="Enter your Feedback"
              />
            </div>
            <div>
              <button
                style={{ width: "100%" }}
                className=" re-btn log-btn me-2"
                onClick={this.sendreview}
              >
                Add Review
              </button>
              <span className="text-danger">{this.state.error}</span>
            </div>
          </div>
        </div>

        <div id="thank-you">
          <div className=" text-center">
            <i className="emoji far fa-smile-wink"></i>
            <h2 className="th-text">Thank You</h2>
          </div>
        </div>

        <div id="nonew">
          <div className=" text-center">
            <i className="emoji-no far fa-comment-alt"></i>
            <h2 className="th-text">You have already added a comment.</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddReview;
