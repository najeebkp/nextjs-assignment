import React, { Component } from "react";
import "../css/main.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  password2Error: ""
};

class Signup extends Component {
  state = initialState;
  validate = () => {
    let nameError = "";
    let passwordError = "";
    let emailError = "";
    let password2Error = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank!!";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid Email!!";
    }
    if (!(this.state.password == this.state.password2)) {
      password2Error = "password doesnt match!!";
    }
    if (emailError || password2Error || passwordError) {
      this.setState({ emailError, password2Error, passwordError });
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
      <div class="container" style={{ marginTop: 110 }}>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <div className="raw">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 class="card-title text-center">Sign Up</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group ">
                    <input
                      onChange={this.handleChange}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Username"
                      className="form-control"
                      value={this.state.name}
                    />
                    <label for="name">Username</label>
                    <div style={{ color: "red" }}>{this.state.nameError}</div>
                    {/* <p className="help-block">
                        Username can contain any letters or numbers.
                      </p> */}
                  </div>

                  <div className="form-label-group">
                    <div className="form-label-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={this.state.email}
                      />
                      <div style={{ color: "red" }}>
                        {this.state.emailError}
                      </div>
                      <label for="email">E-mail</label>
                      {/* <p className="help-block">Please provide your E-mail</p> */}
                    </div>
                  </div>

                  <div className="form-label-group">
                    {/* <div className="controls"> */}
                    <input
                      onChange={this.handleChange}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={this.state.password}
                    />
                    <div style={{ color: "red" }}>
                      {this.state.passwordError}
                    </div>
                    <label for="password">Password</label>
                    {/* <p className="help-block">
                          Password should be at least 4 characters
                        </p> */}
                  </div>
                  {/* </div> */}

                  <div className="form-label-group">
                    {/* <div className="controls"> */}
                    <input
                      onChange={this.handleChange}
                      type="password"
                      id="password2"
                      name="password2"
                      placeholder="Confirm Password"
                      className="form-control"
                      value={this.state.password2}
                    />
                    <div style={{ color: "red" }}>
                      {this.state.password2Error}
                    </div>
                    <label for="password2">Password (Confirm)</label>

                    {/* <p className="help-block">Please confirm password</p> */}
                  </div>
                  {/* </div> */}

                  <div className="control-group">
                    <div className="controls">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
