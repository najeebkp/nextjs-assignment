import React, { Component } from "react";
import "../css/main.css";
import "../css/video.css";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};

class Login extends Component {
  state = initialState;
  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (!this.state.name.includes("@")) {
      nameError = "invalid Email";
    }
    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }
    return true;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 110 }}>
        <div className="home-video-hero">
          <div className="video-frame">
            <div className="video-overlay">
              <video
                autoplay="autoplay"
                loop="loop"
                poster="https://www.edisonxacademy.com/static/images/homepage-hero-image.jpg"
                id="mautic-player-0"
              >
                <source
                  className="webm"
                  type="video/webm"
                  src="https://www.edisonxacademy.com/static/media/homepage-hero-video.webm"
                />
                <source
                  className="mp4"
                  type="video/mp4"
                  src="https://www.edisonxacademy.com/static/media/homepage-hero-video.mp4"
                />
              </video>
              <img
                src="https://www.edisonxacademy.com/static/images/homepage-hero-image.jpg"
                className="mobile-fallback"
                alt=""
                style={{ display: "none" }}
              />
              <div class="content-container">
                <link
                  href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  rel="stylesheet"
                  id="bootstrap-css"
                ></link>
                <div class="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    {/* <div className="card card-signin my-5"> */}
                    <div className="card-body">
                      <form
                        className="form-signin"
                        onSubmit={this.handleSubmit}
                        style={{
                          border: "0.1rem transparent",
                          borderStyle: "solid",
                          borderColor: "rgba(0, 0, 0, 0.2)",
                          borderRadius: "1rem",
                          padding: "2rem",
                          background: "rgba(255, 255, 255, 0.2)"
                          // filter: "blur(5px)"
                        }}
                      >
                        <h5
                          className="card-title text-center"
                          style={{ color: "#ffff" }}
                        >
                          Sign In
                        </h5>
                        <div className="form-label-group">
                          <input
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            value={this.state.name}
                          />
                          <div style={{ color: "red" }}>
                            {this.state.nameError}
                          </div>
                          <label for="inputEmail">Email</label>
                        </div>
                        <div className="form-label-group">
                          <input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.password}
                          />
                          <div style={{ color: "red" }}>
                            {this.state.passwordError}
                          </div>
                          <label for="inputPassword">Password</label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Login;
