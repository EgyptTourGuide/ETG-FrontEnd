import React, { Component } from "react";

import $ from "jquery";

class FileUpload extends Component {
  state = {};

  handelchangeavatar = (e) => {
    this.props.setavatar(e);

    this.readURL(e);
  };

  readURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex align-items-end justify-content-center my-3">
          <div>
            <img
              id="blah"
              src={this.props.img ? this.props.img : "/images/user.png"}
              alt="profile"
            />
          </div>
          <div
            className="text-white p-0 m-0"
            onClick={() => this.fileinput.click()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>

          <input
            id="imgInp"
            className="d-none file-upload"
            type="file"
            name="avatar"
            onChange={this.handelchangeavatar}
            ref={(fileinput) => (this.fileinput = fileinput)}
            accept="image/*"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FileUpload;
